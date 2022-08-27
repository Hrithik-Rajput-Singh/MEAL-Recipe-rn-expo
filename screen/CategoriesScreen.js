import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity , Platform} from 'react-native';
import { CATEGORIES } from '../data/dummy-data'
import TouchGridItem from "../components/TouchGridItem";


const CategoriesScreen = (props) => {

    const renderGridItem = (itemData) => {
        return (
                <TouchGridItem items = {itemData.item.title} colors={itemData.item.color} onSelect={() => {props.navigation.navigate({
                    routeName: "CategoriesMeals",
                    params: {
                        categoryId: itemData.item.id,
                        mealTitle: itemData.item.title  //added later to get these title in mealDetail so we can put over there
                        }
                    })
                }} 
                />
        
        )

    }//faltlist take itemdata properties and also item properties
  return (
       <FlatList  data={CATEGORIES} renderItem={renderGridItem} numColumns={2}/>

  )
};

//adding header --note header is automatically added what we assign the name on MEALSNAVIGATION as a properties
CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Category',

};
//categories creen techniqual is js function are object and on obect we added properties so these categories screen are js object only u can added specia;l properties that react navigation will look
 // or u can say in every react component u assign a value screen can be use as properties 
const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default CategoriesScreen;