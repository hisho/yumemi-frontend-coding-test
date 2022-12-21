import styles from '@src/component/Header/Header.module.css'

type Props = {
  title: string
}

export const Header = ({ title }: Props) => {
  return (
    <header className={styles.root}>
      <div className={`${styles.container} wrapper`}>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </header>
  )
}
