import { Skeleton } from '@src/component/Skeleton/Skeleton'
import styles from '@src/feature/prefecture/PrefectureCheckboxGroup/PrefectureCheckboxGroup.module.css'

export const FetchPrefecturesLoading = () => {
  return (
    <>
      {[...Array(47)].map((_, i) => (
        <div
          key={`FetchPrefecturesLoading_loading_${i}`}
          className={styles.label}
        >
          <Skeleton width={'100%'} height={'1.5em'} />
        </div>
      ))}
    </>
  )
}
