import styles from "./Button.module.scss"
function Button({children}){
    return(
        <>
         <button className={styles.buttonHeader}>{children}</button>
        </>
    )
}
export default Button;