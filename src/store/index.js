import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import generateDough from '../API/index-api';
import { recipesSlice } from './recipesSlice';
const inputsAnswers = {
    'Ciasto': '',
    'Nadzienie': '',
    'Składniki': ''
}
const valueInputs = ['Ciasto', 'Nadzienie', 'Składniki']
export const fetchTo = createAsyncThunk(
    'fetchTo/items',
    async (_, thunkAPI) => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(inputsAnswers);
            }, 1800);
        });
    }
)


const inputSlice = createSlice({
    name: 'input',
    initialState: {
        items: [],
        buttonLock: true,
        sectionImage: false,
        valueInputsShallowCopy: [],
        status: null,
        error: null,
        isLoading: null
    },
    reducers: {
        getItems(state, action) {
            // state.items = [];
            if (state.valueInputsShallowCopy.length > 0) {
                state.valueInputsShallowCopy.forEach((value) => {
                    generateDough(value).then(result => {
                        inputsAnswers[value] = result
                    });
                })
               
            } else {
                valueInputs.forEach((value) => {
                    generateDough(value).then(result => {
                        if(!!inputsAnswers[value] !== true){
                            inputsAnswers[value] = result
                           }
                    });
                })
            }
        },
        setIsInputsLocked(state, action) {
            console.log('locked')
            state.items = [];
             //first try when all block 24.12 17:58
             let b = JSON.stringify(inputsAnswers);
             state.items.push(b);
//end
            if (state.valueInputsShallowCopy.length === 0) {
                let newArr = valueInputs.filter((e) => {
                    return e !== action.payload.name
                });

                state.valueInputsShallowCopy = [...state.valueInputsShallowCopy, ...newArr];

            } else if (state.valueInputsShallowCopy.includes(action.payload.name)) {
                let nameIndex = state.valueInputsShallowCopy.indexOf(action.payload.name);
                state.valueInputsShallowCopy.splice(nameIndex, 1);

            } else {
                state.valueInputsShallowCopy = [...state.valueInputsShallowCopy, action.payload.name]
            }

        },
        setIsInputsUnLocked(state, action) {
            state.valueInputsShallowCopy = [...state.valueInputsShallowCopy, action.payload.name]
        },
        getDescription(state,action){
            inputsAnswers[action.payload.name] = action.payload.description;
        },
        allLockedInputs(state,action){
            state.items.push(JSON.stringify(inputsAnswers))
        },
        showImageSection(state,action){
            state.sectionImage = true;
        },
        hideImageSection(state,action){
            state.sectionImage = false;
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTo.pending, (state, action) => {
                state.status = "loading";
                state.isLoading = true;
            })
            .addCase(fetchTo.fulfilled, (state, action) => {
                state.items = []
                state.status = "fulfilled";
                let b = JSON.stringify(action.payload);
                state.items.push(b);
                state.isLoading = false;
            })


    }
})

const store = configureStore({
    reducer: {
        inputs: inputSlice.reducer,
        recipe: recipesSlice.reducer
    }
});
export const inputsActions = inputSlice.actions;
export const recipeActions = recipesSlice.actions
export default store;