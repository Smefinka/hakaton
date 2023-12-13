import { configureStore, createSlice } from '@reduxjs/toolkit';
import generateDough from '../API/index-api';



const inputsAnswers = {
    'Ciasto': '',
    'Nadzienie': '',
    'Składniki': ''
}
const valueInputs = ['Ciasto','Nadzienie', 'Składniki']
const inputSlice = createSlice({
    name: 'input',
    initialState: {
        items: [],
        buttonLock: true,
        valueInputsShallowCopy: []
    },
    reducers: {
        // deleteItem(state, action){
        //     const delItemID = +action.payload;
        //     const updatedItems = state.items.filter(item => item.id !== delItemID);
        //     state.items = updatedItems;
        // },
        fisrtLoadItems(state, action){
            valueInputs.forEach((value)=> {
                generateDough(value).then(result => {
                 
                   inputsAnswers[value] = result
               });
            //   state.items = [...state.items,inputsAnswers
           }) 
        },
        regenarateItems(state, action){
            state.items = [];
            
            valueInputs.forEach((value)=> {
                 generateDough(value).then(result => {
                    inputsAnswers[value] = result
                });
            })  
           let regenarateItemsString = JSON.stringify(inputsAnswers)
            state.items.push(regenarateItemsString)
        }
        ,
        getItems(state, action){
            state.items = [];
            if(state.valueInputsShallowCopy.length>0){
                state.valueInputsShallowCopy.forEach((value)=> {
                    generateDough(value).then(result => {
                       console.log(result); // Use the result directly
                       inputsAnswers[value] = result
                    console.log('shallow only get')
                   });
               }) 
            }else{

                valueInputs.forEach((value)=> {
                    generateDough(value).then(result => {
                       console.log(result); // Use the result directly
                       inputsAnswers[value] = result
                    //    console.log('inputsAnswers')
                    //    console.log(inputsAnswers)
                   });
               })  
            }
           
           let b = JSON.stringify(inputsAnswers)
            state.items.push(b)

        },
        setIsInputsLocked(state, action){
            if( state.valueInputsShallowCopy.length === 0){
               
                let newArr = valueInputs.filter((e)=> {
                    console.log(e !== action.payload.name)
                    return  e !== action.payload.name
                });
               
                state.valueInputsShallowCopy = [...state.valueInputsShallowCopy,...newArr];
                
            }else if (state.valueInputsShallowCopy.includes(action.payload.name)){
                console.log('i am exists!')
                let nameIndex = state.valueInputsShallowCopy.indexOf(action.payload.name);
           state.valueInputsShallowCopy.splice(nameIndex,1);
                console.log(state.valueInputsShallowCopy)
            }else{
                console.log('hi!')
                state.valueInputsShallowCopy = [...state.valueInputsShallowCopy, action.payload.name]
            }
            // console.log(action.payload.name)
            console.log(state.valueInputsShallowCopy.length)
            // if(state.valueInputsShallowCopy.length>1){
            //     console.log('hi')
            //     state.valueInputsShallowCopy.splice(0, 1)
            // }
           // state.buttonLock = action.payload
        },
        setIsInputsUnLocked(state, action){
            state.valueInputsShallowCopy = [...state.valueInputsShallowCopy, action.payload.name]
           console.log('add element')
        }

    }
})

const store = configureStore({
    reducer: {
        inputs: inputSlice.reducer,
    }
});
export const inputsActions = inputSlice.actions;
export default store;