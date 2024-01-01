import { createSlice } from "@reduxjs/toolkit";
export const recipesSlice = createSlice({
    name: "recipe",
    initialState: {
        recipes: [],
        id: ''
    },
    reducers: {
        addRecipes(state, action) {
            console.log('addd recipes')
            console.log(action.payload.id)
            //если id существует ничего не делай
            state.recipes = [...state.recipes, action.payload]
            // надо пробежаться по массиву и проверить у объектов id если совпадает
            // то тогда не добавлять в массив а видоизменять существующий?
        },
        editNameRecipes(state, action){
            console.log(action.payload.id)
            state.recipes.forEach(element => {
               if(element.id === action.payload.id){
                element.name = action.payload.name
               }
            });
        }
    }
}
)