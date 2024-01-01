import SnowFlakes from '../SnowFlakes/SnowFlakes'
import { NavComponent } from '../../InputsSection/Navigation/NavComponent'
import { useDispatch, useSelector } from 'react-redux'
import { inputsActions, fetchTo } from '../../../store/index'
import { useLocation, useNavigate } from 'react-router-dom';
function Header() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.inputs.isLoading);
  const navigate = useNavigate()
  const handleClick = () => {
    if(location.pathname === '/recipe'){
      navigate('/');
      dispatch(inputsActions.showImageSection());
//при клике на zmień тут надо помнить о том что бы сделать 
//возможность редактирования массива а не добавление нового
    }else{
      dispatch(inputsActions.getItems())
      dispatch(fetchTo());
    }
   
  }
  let location = useLocation();
let titleNav = 'Skladniki';
let buttonText = "Generuj";
if(location.pathname === '/recipe'){
titleNav = 'Pieróg';
buttonText = 'Zmień'
}
if(location.pathname === '/list'){
  titleNav = 'Moje pierogi';
  buttonText = 'Nowy pieróg'
}
  return (
    <>
      <header>
        <SnowFlakes />
        <h1>Pierogator świąteczny </h1>
      </header>

      <NavComponent
        title={titleNav}
        onClickFunction={handleClick}
        buttonText={buttonText}
        isLoading={isLoading}
      />
    </>
  )
}
export default Header
