import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { NavComponent } from '../InputsSection/Navigation/NavComponent'
import useImageGeneration from '../../hooks/useImgGenerate'
import useNameGeneration from '../../hooks/useNameGenerate'
import { useDispatch, useSelector } from 'react-redux'
import InputDefault from '../../components/Input/InputDefault'
import Button from '../../components/ButtonCta/ButtonCta'
import { inputsActions, recipeActions } from '../../store'
import generateUniqueId from '../../utills/generateUniqueId'
export const ImageSection = () => {
  const dispatch = useDispatch();
   
  const { generatedImages, isLoading, generateImage } = useImageGeneration()
  const { generatedNames, generateName} = useNameGeneration();
  const [uniqID, setUniqID] = useState();
  let objInputs, editNameDumpling;
  const inputsDescription = useSelector((state) => state.inputs.items)
  const imageSection1 = useSelector((state) => state.inputs.sectionImage);
  const recipeArr = useSelector((state) => state.recipe.recipes);
  if (inputsDescription.length > 0) {
    objInputs = JSON.parse(inputsDescription)

  }
  const handleButtonClick = () => {
    const uniqId = generateUniqueId();
    generateInfo();
    setUniqID(uniqId);
    dispatch(inputsActions.hideImageSection());
  }

  function generateInfo(){
    generateImage(
      `zgeneruj obrazek pieroga. Dane: ciasto (${objInputs['Ciasto']}), nadzienie (${objInputs['Nadzienie']}), składniki (${objInputs['Składniki']}) `
    )
    generateName(`zgeneruj nazwę pieroga z dwóch trzech słów znając go nadzienie (${objInputs['Nadzienie']})`)
  }
//при клике на zmień тут надо помнить о том что бы сделать 
//возможность редактирования массива а не добавление нового
// при клике handleSaveData нужно проверить существующий перог
//сделать слайс чисто под рецепты?
const handleChildData = (data) => {
  // Обработка полученных данных из дочернего компонента
  editNameDumpling = data ;
};
  function handleSaveData(nameFromInput){
    if(uniqID){
      const recipe = {
        'name': generatedNames,
        'image': generatedImages,
        'ciasto': objInputs['Ciasto'],
        'nadzienie': objInputs['Nadzienie'],
        'składniki': objInputs['Składniki'],
        'id': uniqID
      }
      dispatch(recipeActions.addRecipes(recipe))
    }
    if(editNameDumpling){
     dispatch(recipeActions.editNameRecipes(editNameDumpling))
      console.log("handleChildData")
      console.log(editNameDumpling)
    }

  }
  

  return (
    <div>
      <NavComponent
        onClickFunction={handleButtonClick}
        buttonText="Generuj"
        title="Pieróg"
        isLoading={isLoading}
      />
      {generatedImages && (
       <> <img
          src={generatedImages}
          alt="Generated Image"
          style={{ maxWidth: '343px', maxHeight: '233px' }}
        />
        <InputDefault  blurName={handleChildData} id={uniqID} onChange={true} inputTitle="Nazwa pieroga" valueInput={generatedNames} />
    <div style={{padding: '24px 0'}}>
    <Button> <NavLink to="/recipe"><span onClick={handleSaveData}>Zapisz i przejdź do tworzenia przepisu</span></NavLink></Button>
    </div>
     
        </>
      )}
      {imageSection1 && (
          <> 
          <img
          src={recipeArr[0]['image']}
          alt="Generated Image"
          style={{ maxWidth: '343px', maxHeight: '233px' }}
        />
        <InputDefault blurName={handleChildData} onChange={true} inputTitle="Nazwa pieroga" valueInput={recipeArr[0]['name']} id={recipeArr[0]['id']} />
    <div style={{padding: '24px 0'}}>
    <Button > <NavLink to="/recipe"><span onClick={handleSaveData}>Zapisz i przejdź do tworzenia przepisu</span></NavLink></Button>
    </div>
          </>)
      }
      
    </div>
  )
}
