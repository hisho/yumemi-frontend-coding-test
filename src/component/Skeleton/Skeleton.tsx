import styles from '@src/component/Skeleton/Skeleton.module.css'

type Props = {
  width?: string
  height?: string
}

export const Skeleton = ({ height, width }: Props) => {
  return <span className={styles.root} style={{ height, width }} />
}
