import React, { useCallback ,useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from '../components/HeaderButton'
import {useSelector, useDispatch} from 'react-redux';
import {toggleFavourite} from '../store/action/meal';   //to forward action what we want to dispatch

const Listitem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text>{props.children}</Text>
    </View>
  )
}


const MealDetailScreen = (props) => {

  //here we are Importing MEALS that what we have created in reducer meal.js  os that we can replace here MEALS and can have a one single files of MEALS saved
  const availableMeals = useSelector(state => state.mealss.meals)

  const mealIdd = props.navigation.getParam("selectedMeal"); 

  //to get fav meal so we can change icon
  //some is also build in method which return true 
  const currentFavMeals = useSelector((state) => state.mealss.favMeal.some(meal => meal.id === mealIdd))

  const selectedMeal = availableMeals.find((Meal) => Meal.id === mealIdd) ;
  

  //dispatrcher 
  //watch DIspatich action and reducer in redux
  const dispatch = useDispatch()
  
  const toggleFavouriteHandler = useCallback(() => {
    dispatch(toggleFavourite(mealIdd))
  },[dispatch , mealIdd])
 //passing to navigation option

  useEffect(() => {
    props.navigation.setParams({toggleFav: toggleFavouriteHandler})
  }, [toggleFavouriteHandler]);

  useEffect(() => {
    props.navigation.setParams({favMealChecked: currentFavMeals})
  }, [currentFavMeals]);


  return (
    <ScrollView>
      <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
      <View style={styles.detail}>
            <Text>{selectedMeal.duration}</Text>
            <Text>{selectedMeal.complexity.toUpperCase()}</Text>
            <Text>{selectedMeal.affordability.toUpperCase()}</Text>
      </View>
    
      <Text style={styles.title}>ingredients</Text>
      {selectedMeal.ingredients.map(ingredient => (<Listitem key={ingredient}>{ingredient}</Listitem>))}

      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map(step => (<Listitem key={step}>{step}</Listitem>))}
    </ScrollView>
 
  );
}

MealDetailScreen.navigationOptions = (navigationData) => {
  //here we cannot use use selector or our avalilble meal because it not a function or state so to get here available meals
  //to get header we will set params in favourite screen ND CATEGORies screen then get it here
  const mealTitle = navigationData.navigation.getParam("mealTitle"); 
  // const mealId = navigationData.navigation.getParam("selectedMeal"); 
  // const selectedMeal = MEALS.find((Meal) => Meal.id === mealId) ;
  const toggleFavouritee = navigationData.navigation.getParam("toggleFav"); 
  const favMealCheck = navigationData.navigation.getParam("favMealChecked"); 
  return ({
    headerTitle: mealTitle,
    headerRight:() => (
        (<HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title="fav" iconName={favMealCheck ? 'ios-star' : 'ios-star-outline'} onPress = {toggleFavouritee}/>   
    </HeaderButtons>)
    )
  // no need to add function in headerRight it just recomnended
  })

}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  detail: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-around',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 15,

  },
  listItem:{
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderRightColor: '#ccc'
    
  }
  
});

export default MealDetailScreen ;