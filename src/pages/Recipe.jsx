import { ImageSection } from '../layouts/ImageSection/ImageSection'
import { useDispatch, useSelector } from 'react-redux'
import InputDefault from '../components/Input/InputDefault'
import { Accordion } from '../components/Accordion/Accordion'
import { NavComponent } from '../layouts/InputsSection/Navigation/NavComponent'
function Recipe() {
  const objRecipe = useSelector((state) => {
    const lengthArrayRecipes = state.recipe.recipes.length
    console.log(state.recipe.recipes)
    if (lengthArrayRecipes > 0) {
      return state.recipe.recipes[lengthArrayRecipes - 1]
    }
    return state.recipe.recipes[0]
  })
  console.log(objRecipe)

  return (
    <>
      <img
        src={objRecipe.image}
        alt="Generated Image"
        style={{ maxWidth: '343px', maxHeight: '233px' }}
      />
      <InputDefault
        onChange={false}
        inputTitle="Nazwa pieroga"
        valueInput={objRecipe.name}
      />

      <Accordion />
    </>
  )
}
export default Recipe
