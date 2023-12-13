import styles from './AppLayout.module.scss'
export const AppLayout = ({ children }) => (
  <div className={styles.layout}>{children}</div>
)
