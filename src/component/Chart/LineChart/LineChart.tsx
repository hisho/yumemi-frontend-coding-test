import Highcharts from 'highcharts'
import HighchartsExporting from 'highcharts/modules/exporting'
import HighchartsReact from 'highcharts-react-official'
import { useEffect, useMemo, useState } from 'react'

type Props = {
  title: string
  xAxis?: {
    title: string
  }
  yAxis?: {
    title: string
  }
  data: LineChartData
}

export type LineChartData = {
  name: string
  values: number[][]
}[]

/**
 * Next.jsのエラー対策
 * @see https://github.com/highcharts/highcharts-react#highcharts-with-nextjs
 */
if (typeof Highcharts === 'object') {
  HighchartsExporting(Highcharts)
}

export const LineChart = ({ data, title, xAxis, yAxis }: Props) => {
  const options: Highcharts.Options = useMemo(() => {
    return {
      colors: [
        '#7cb5ec',
        '#ffe4c4',
        '#90ed7d',
        '#f7a35c',
        '#8085e9',
        '#f15c80',
        '#e4d354',
        '#2b908f',
        '#f45b5b',
        '#91e8e1',
      ],
      credits: {
        enabled: false,
      },
      exporting: {
        enabled: false,
      },
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
          },
        ],
      },
      series: data.map(({ name, values }) => ({
        data: values,
        name,
        type: 'line',
      })),
      title: {
        text: title,
      },
      xAxis: {
        title: {
          align: 'high',
          text: xAxis?.title ?? null,
        },
      },
      yAxis: {
        labels: {
          format: '{value}',
        },
        title: {
          align: 'high',
          offset: 16,
          padding: 1000,
          rotation: 0,
          text: yAxis?.title ?? null,
          y: -12,
        },
      },
    }
  }, [data, title, xAxis?.title, yAxis?.title])

  const [documentWidth, setDocumentWidth] = useState(0)

  /**
   * sizeが大きくなる時は、グラフのサイズが変わるが小さくなる場合はみ出すのでwindowのサイズに応じて再描画させる
   */
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        const width = document.documentElement.clientWidth
        if (width >= 900) {
          return
        }
        setDocumentWidth(width)
      }

      window.addEventListener('resize', handleResize)
      handleResize()
      return () => window.removeEventListener('resize', handleResize)
    } else {
      return
    }
  }, [])

  return (
    <HighchartsReact
      key={`LineChart_${documentWidth}`}
      highcharts={Highcharts}
      options={options}
    />
  )
}
