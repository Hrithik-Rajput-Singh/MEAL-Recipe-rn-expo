import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import MealItem from '../components/MealItem';
import {useSelector} from 'react-redux';

const FavouriteScreen = (props) => {



    //here we are Importing MEALS that what we have created in reducer meal.js  os that we can replace here MEALS and can have a one single import of MEALS 
  //useSlector help in that ut help to select slice of our state
  //here we now don't need dump data of meal.is=='m1,m2 beacuse we have one state of favourite meal and we can use it here 
  //so we have assign here favMeals as a value then in data below we choose favMeals
  const favMeals = useSelector(state => state.mealss.favMeal)

  

  const renderingItem = (itemData) => {
    return <MealItem 
    onSelectMeal={() => {props.navigation.navigate({
      routeName: 'MealDetail',
      params: {
        selectedMeal: itemData.item.id,
        mealTitle: itemData.item.title     //added later to get these title in mealDetail so we can put over there
      }

     }) 
    }}
    image = {itemData.item.imageUrl}
    title = {itemData.item.title}
    duration = {itemData.item.duration}
    complexity ={itemData.item.complexity}
    affordability = {itemData.item.affordability}
  />

  }



  // const displayMeal = MEALS.filter(meal => meal.id == 'm1','m2' ); 
  return (
    <FlatList  data={favMeals} renderItem={renderingItem}/>
  );
}

//to change header titile
FavouriteScreen.navigationOptions = {
  headerTitle: 'YOUR FAV',

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FavouriteScreen