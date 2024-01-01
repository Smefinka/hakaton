import PierogIcon from '@icons/Pierog.svg?react'
function NavigateNameLogo({title}){
    return(
        <>
         <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <PierogIcon />
        <h2 style={{ paddingLeft: '8px' }}>{title}</h2>
      </div>
        </>
    )
}
export default NavigateNameLogo;