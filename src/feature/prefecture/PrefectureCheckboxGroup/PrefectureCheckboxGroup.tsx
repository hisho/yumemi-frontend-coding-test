import { Checkbox } from '@src/component/Form/Checkbox/Checkbox'
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

/**
 * TODO Skeletonを作成するしloadingのUIを置き換える
 */
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
                style={{ backgroundColor: 'red', height: '1.5em' }}
              />
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
