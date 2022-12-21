import Highcharts from 'highcharts'
import HighchartsExporting from 'highcharts/modules/exporting'
import HighchartsReact from 'highcharts-react-official'
import { useMemo } from 'react'

type Props = {
  title: string
  xAxis?: {
    title: string
  }
  yAxis?: {
    title: string
  }
  data: LineChartData
  pointStart: number
}

export type LineChartData = {
  name: string
  values: number[]
}[]

/**
 * Next.jsのエラー対策
 * @see https://github.com/highcharts/highcharts-react#highcharts-with-nextjs
 */
if (typeof Highcharts === 'object') {
  HighchartsExporting(Highcharts)
}

export const LineChart = ({ data, pointStart, title, xAxis, yAxis }: Props) => {
  const options: Highcharts.Options = useMemo(() => {
    return {
      credits: {
        enabled: false,
      },
      exporting: {
        enabled: false,
      },
      plotOptions: {
        series: {
          pointStart,
        },
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
  }, [data, pointStart, title, xAxis?.title, yAxis?.title])

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}
