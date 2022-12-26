import { Checkbox } from '@src/component/Form/Checkbox/Checkbox'
import { FetchPrefectures } from '@src/feature/prefecture/FetchPrefectures/FetchPrefectures'
import styles from '@src/feature/prefecture/PrefectureCheckboxGroup/PrefectureCheckboxGroup.module.css'

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
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <FetchPrefectures>
          {(prefectures) =>
            prefectures.map(({ prefectureCode, prefectureName }, index) => (
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
            ))
          }
        </FetchPrefectures>
      </div>
    </div>
  )
}
