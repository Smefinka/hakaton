import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import generateDough from '../API/index-api';
const inputsAnswers = {
    'Ciasto': '',
    'Nadzienie': '',
    'Składniki': ''
}
const valueInputs = ['Ciasto','Nadzienie', 'Składniki']
export const fetchTo = createAsyncThunk(
    'fetchTo/items',
    async (_, thunkAPI) => {
        return new Promise(resolve => {
          setTimeout(() => {
            console.log('hi');
            resolve(inputsAnswers);
          }, 1500);
        });
      }
)


const inputSlice = createSlice({
    name: 'input',
    initialState: {
        items: [],
        buttonLock: true,
        valueInputsShallowCopy: [],
        status: null,
        error: null
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
            // state.items = [];
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
           
        //    let b = JSON.stringify(inputsAnswers)
        //     state.items.push(b)

        },
        setIsInputsLocked(state, action){
            if( state.valueInputsShallowCopy.length === 0){
               
                let newArr = valueInputs.filter((e)=> {
                    console.log(e !== action.payload.name)
                    return  e !== action.payload.name
                });
               
                state.valueInputsShallowCopy = [...state.valueInputsShallowCopy,...newArr];
                
            }else if (state.valueInputsShallowCopy.includes(action.payload.name)){
                
                let nameIndex = state.valueInputsShallowCopy.indexOf(action.payload.name);
           state.valueInputsShallowCopy.splice(nameIndex,1);
               
            }else{
          
                state.valueInputsShallowCopy = [...state.valueInputsShallowCopy, action.payload.name]
            }
            
        },
        setIsInputsUnLocked(state, action){
            state.valueInputsShallowCopy = [...state.valueInputsShallowCopy, action.payload.name]
           console.log('add element')
        }

    },
    extraReducers:(builder) => {
        builder 
        .addCase(fetchTo.pending, (state, action) => {
            state.status = "loading";
            console.log('loading')
            
          })
        .addCase(fetchTo.fulfilled, (state,action) => {
            state.items =[]
            state.status = "fulfilled";
            console.log('fulfilled')
            console.log(action.payload)
          let b = JSON.stringify(action.payload);
           console.log(b)
           let v=[];
           v.push(b)
           console.log(JSON.parse(v))
           state.items.push(b);
           console.log( state.items)
          })

       
    }
})

const store = configureStore({
    reducer: {
        inputs: inputSlice.reducer,
    }
});
export const inputsActions = inputSlice.actions;
export default store;