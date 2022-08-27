import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVOURITE , FILTERED} from '../action/meal';

const initialState = {
    meals: MEALS,
    filteredMeal: MEALS,     //because intial our app start we have our no App setup
    favMeal: []          //App start no fav meal
} 
const mealReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVOURITE:
            //if id is part of action we want to add it or remove it 
            const existingIndex = state.favMeal.findIndex(meal => meal.id === action.mealId);
            if (existingIndex >= 0){ //it a part of fav meal
                const updatedFavMeal = [...state.favMeal]      //saving th current favmeal in const
                updatedFavMeal.splice(existingIndex, 1)          //slicing up with only exisingindex
                return   {...state, favMeal: updatedFavMeal }     //setting that updatedfav meal as new favMeal
            }else{   //it not part of favmeal
                const findingMeal = state.meals.find(meal => meal.id === action.mealId)    //finding that item in meals so that we can concantae
               return {...state, favMeal: state.favMeal.concat(findingMeal)};
            };
        case FILTERED:
            const appliedFilters = action.filters
            const updateFilteredMeal = state.meals.filter(meal => {
                if (appliedFilters.glutenFree && !meal.isGlutenFree){
                    return false
                }
                if(appliedFilters.lactoseFree && !meal.isLactoseFree){
                    return false
                }
                if(appliedFilters.vegan && !meal.isVegan){
                    return false
                }

                return true                

            })
            return {...state, filteredMeal: updateFilteredMeal}
        default:
            return state;
    }
}

export default mealReducer;

