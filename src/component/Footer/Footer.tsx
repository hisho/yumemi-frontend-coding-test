import styles from '@src/component/Footer/Footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.root}>
      <div className={`${styles.container} wrapper`}>
        <span className={styles.copyright}>
          Copyright © 2022 - All right reserved by Hisho
        </span>
      </div>
    </footer>
  )
}
