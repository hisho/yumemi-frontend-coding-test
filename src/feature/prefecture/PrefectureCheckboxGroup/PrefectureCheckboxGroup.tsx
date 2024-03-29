import { Checkbox } from '@src/component/Form/Checkbox/Checkbox'
import { Skeleton } from '@src/component/Skeleton/Skeleton'
import styles from '@src/feature/prefecture/PrefectureCheckboxGroup/PrefectureCheckboxGroup.module.css'
import { useFetchPrefectures } from '@src/feature/prefecture/useFetchPrefectures/useFetchPrefectures'

type Props = {
  onChange?: ({
    isChecked,
    prefecture,
  }: {
    isChecked: boolean
    prefecture: { name: string; code: number }
  }) => void
}

export const PrefectureCheckboxGroup = ({ onChange }: Props) => {
  const { data, isLoading } = useFetchPrefectures()
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        {isLoading
          ? [...Array(47)].map((_, i) => (
              <div
                key={`PrefectureCheckboxGroup_loading_${i}`}
                className={styles.label}
              >
                <Skeleton width={'100%'} height={'1.5em'} />
              </div>
            ))
          : data.map(({ prefectureCode, prefectureName }, index) => (
              <Checkbox
                className={styles.label}
                key={`PrefectureCheckboxGroup_${prefectureCode}_${index}`}
                name={'PrefectureCheckboxGroup'}
                value={String(prefectureCode)}
                onChange={({ isChecked }) => {
                  onChange?.({
                    isChecked,
                    prefecture: {
                      code: prefectureCode,
                      name: prefectureName,
                    },
                  })
                }}
              >
                {prefectureName}
              </Checkbox>
            ))}
      </div>
    </div>
  )
}
