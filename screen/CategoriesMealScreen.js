import React from 'react';
import { StyleSheet, Text, View ,Button, FlatList} from 'react-native';
import { CATEGORIES , MEALS} from '../data/dummy-data';
import MealItem from '../components/MealItem';
import {useSelector} from 'react-redux';
console.log(MEALS)


const CategoriesMealScreen = (props) => {

  const renderMealItem = (itemData) => {
    return <MealItem 
      onSelectMeal={() => {props.navigation.navigate({
        routeName: 'MealDetail',
        params: {
          selectedMeal: itemData.item.id
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
  const catId = props.navigation.getParam("categoryId");   //getting params what we have passed in categoriesscreen 

  // const selectedCategory = CATEGORIES.find((Categ) => Categ.id === catId)  //finding from over array CATAGORY the catid which we haave pass in 
  
  //here we are Importing MEALS that what we have created in reducer meal.js  os that we can replace here MEALS and can have a one single import of MEALS 
  //useSlector help in that ut help to select slice of our state
  const availableMeals = useSelector(state => state.mealss.filteredMeal)

  
  const displayMeal = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0 );  //here we have saved meals array with doing a filter if meals categoryids matches catid 
  //we can also do here in last that categoryids===catid then it true but meal categorgyids are in array so have done indexof 
 
  return (
    <View style={styles.container}>
    <FlatList data = {displayMeal} renderItem={renderMealItem}/>
    </View>
  );
}

//creating here function instead of object because first we have to assign here dynamic header
//it outsside function so we simply can't get here props    // console.log(navigationData);
CategoriesMealScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((Categ) => Categ.id === catId) ;

  return {
    headerTitle: selectedCategory.title,
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CategoriesMealScreen;