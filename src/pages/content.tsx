import { LineChart } from '@src/component/Chart/LineChart/LineChart'
import { fetchTotalPopulation } from '@src/feature/population/getTotalPopulation/getTotalPopulation'
import { PrefectureCheckboxGroup } from '@src/feature/prefecture/PrefectureCheckboxGroup/PrefectureCheckboxGroup'
import type { TotalPopulation } from '@src/model/population/totalPopulation'
import styles from '@src/pages/page.module.css'
import { useMemo, useState } from 'react'
import { isArrayNotEmpty } from 'typesafe-utils'

export const Content = () => {
  const [state, setState] = useState<
    Map<
      string,
      {
        name: string
        data: TotalPopulation[]
      }
    >
  >(new Map())

  const minYear = useMemo(() => {
    const years = Array.from(state).flatMap(([, value]) =>
      value.data.map((v) => v.year)
    )
    return isArrayNotEmpty(years) ? Math.min(...years) : 0
  }, [state])

  const lineChartData = Array.from(state).map(([, value]) => ({
    name: value.name,
    values: value.data.map((data) => data.value),
  }))

  const setTotalPopulation = async (prefecture: {
    name: string
    code: number
  }) => {
    const data = await fetchTotalPopulation({
      prefectureCode: prefecture.code,
    })
    setState((prevState) => {
      const newState = new Map(prevState)
      newState.set(prefecture.name, {
        data,
        name: prefecture.name,
      })
      return newState
    })
  }

  const deleteTotalPopulation = (prefecture: {
    name: string
    code: number
  }) => {
    setState((prevState) => {
      const newState = new Map(prevState)
      newState.delete(prefecture.name)
      return newState
    })
  }

  const handleChangeCheckbox = async ({
    isChecked,
    prefecture,
  }: {
    isChecked: boolean
    prefecture: { name: string; code: number }
  }) => {
    if (isChecked) {
      await setTotalPopulation(prefecture)
    } else {
      deleteTotalPopulation(prefecture)
    }
  }

  return (
    <div className={styles.root}>
      <p className={styles.prefectureTitle}>都道府県</p>
      <div aria-hidden style={{ height: '10px' }} />
      <PrefectureCheckboxGroup onChange={handleChangeCheckbox} />
      <div aria-hidden style={{ height: '40px' }} />
      <LineChart title={'総人口'} data={lineChartData} pointStart={minYear} />
    </div>
  )
}
