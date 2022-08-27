export const TOGGLE_FAVOURITE = 'TOGGLE_FAVOURITE';
export const FILTERED = 'FILTERED'

//action createor
export const toggleFavourite = (id) => {
    return {
        type: TOGGLE_FAVOURITE,
        mealId: id,
    };
};

export const filtered = (filteredSetting) => {
    return {
        type: FILTERED,
        filters: filteredSetting,
    }

}