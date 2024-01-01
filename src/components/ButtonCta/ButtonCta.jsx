import styles from './ButtonCta.module.scss'
function Button({ children }) {
  return (
    <>
      <button className={styles.buttonHeader}>{children}</button>
    </>
  )
}
export default Button
