import styles from './AppLayout.module.scss'
function AppLayout ({ children }){
 return (
  <>
  <div className={styles.layout}>{children}</div>
  </>
  
)}
export default AppLayout;