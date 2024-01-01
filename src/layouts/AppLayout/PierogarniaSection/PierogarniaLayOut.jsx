import NavigateNameLogo from "../../../components/Nav/NavigateNameLogo";
import styles from "./PierogarniaLayOut.module.scss"
function Pierogarnia(){
return(
    <>
    <div className={styles.container}> 
    <h1 style={{color:"black"}}>New added items here</h1>
    </div>
    <section className={styles.container}> 
    <NavigateNameLogo title="Pierogarnia" />
    <div className={styles.listContainer}>
<div className={styles.itemContainer}>
<img width="162" height="110"  className={styles.imageContainer} loading="eager" fetchpriority="high" ng-img="true" src="https://xurxupibc5lblwyy.public.blob.vercel-storage.com/dumpling_Pier%C3%B3g%20Micha%C5%82_1701996150639-REIzLQzO2Fa55kl5jPh2IT3qVp9Yjr" />
<span  className={styles.containerName}>Pieróg Michał</span>
</div>
    </div>
    </section>
        
    </>
)
}
export default Pierogarnia;