import Input from '../../components/Input/Input'
import { InputField } from './InputField/InputField'
import styles from './SectionContent.module.scss'
import { useSelector, useDispatch } from 'react-redux';
function SectionContent() {
  let objInputs;
  const inputsDescription = useSelector(state => state.inputs.items);
 if(inputsDescription.length > 0){
  objInputs =  JSON.parse(inputsDescription);
  console.log(objInputs);
 }
 
  return (
    <>
      <section className={styles.container}>
      {(inputsDescription.length > 0) ? <InputField inputTitle="Ciasto" value={objInputs['Ciasto']} /> : <InputField inputTitle="Ciasto" value='wpisz, wygeneruj lub zostaw puste' />}
      {(inputsDescription.length > 0) ? <InputField inputTitle="Nadzienie" value={objInputs['Nadzienie']} /> : <InputField inputTitle="Nadzienie" value='wpisz, wygeneruj lub zostaw puste' />}
      {(inputsDescription.length > 0) ? <InputField inputTitle="Składniki" value={objInputs['Składniki']} /> : <InputField inputTitle="Składniki" value='wpisz, wygeneruj lub zostaw puste' />}
      </section>
    </>
  )
}
export default SectionContent
