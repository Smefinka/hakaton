import Button from '../../../components/Button/Button'
import SnowFlakes from '../SnowFlakes/SnowFlakes'
import SnowFlakesIcon from '@icons/SnowFlake.svg?react'
import { NavComponent } from '../../InputsSection/Navigation/NavComponent'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { inputsActions, fetchTo } from '../../../store/index';
function Header() {
  const dispatch = useDispatch();
//   useEffect(()=>{
//  // это мой костыль что бы при первом клике подгружать данные тут получается как страница грузится оно уже обрщается в чат ДЖПТ   
//     dispatch(inputsActions.fisrtLoadItems());
//     dispatch(fetchTo())
//   },[])
  return (
    <>
      <header>
        <SnowFlakes />
        <h1>Pierogator świąteczny</h1>
      </header>

      <NavComponent title="Skladniki" />
    </>
  )
}
export default Header
