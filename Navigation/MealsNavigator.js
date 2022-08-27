import React from "react";
import {Platform} from 'react-native'
import { createStackNavigator } from 'react-navigation-stack';
import CategoriesScreen from '../screen/CategoriesScreen';
import CategoriesMealScreen from '../screen/CategoriesMealScreen';
import MealDetailScreen from '../screen/MealDetailScreen';
import { createAppContainer } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import FavouriteScreen from '../screen/FavouriteScreen';
import FilterScreen from '../screen/FilterScreen'
import { Ionicons } from '@expo/vector-icons';
// import { createDrawerNavigator } from 'react-navigation-drawer';
// import { createDrawerNavigator } from '@react-navigation/drawer';

 

const MealsNavigator = createStackNavigator(
    {
        Categories: {
            screen: CategoriesScreen,
            // navigationOptions: {
            //     headerTitle: ''mealcarvgh'
            // }
        },
        CategoriesMeals: {
            screen: CategoriesMealScreen    
        },
        MealDetail: MealDetailScreen,
    },{
        mode: "modal",
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? 'grey' : 'white' 
            },
            headerTitleStyle: {
                fontFamily: 'open-sans-bold'
            },
            headerTintColor: '#ff6347',

        }
    } 
);
//mealcontainer here is a component we are saving stacknavigator router to0 a MelContainr component 
//here CreateAppContainer is also a contrainer so we are sending it default because it just a pattern u can normally send defaulMEalcontainer to
//it also take another object argument
//along with screen we can set various properties
//default navigation option set to add style on all
//like haeder moder u can set many more properties just control and space to check

const FavouriteNavigator=createStackNavigator(
    {
    favourites: FavouriteScreen,
    MealDetail: MealDetailScreen,

},{
    mode: "modal",
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? 'grey' : 'white' 
        },
        headerTitleStyle: {
            fontFamily: 'open-sans-bold'
        },
        headerBackTitle: {
            fontFamily: 'open-sans'
        },

        headerTintColor: '#ff6347',
 
    }
} 
)

const filterNavigator = createStackNavigator({
    filter: FilterScreen
},{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? 'grey' : 'white' 
        },
        headerTitleStyle: {
            fontFamily: 'open-sans-bold'
        },
        headerBackTitle: {
            fontFamily: 'open-sans'
        },
        headerTintColor: '#ff6347',

    }
} 
)


const tabNavigationBottom = createBottomTabNavigator({
        Meals: {
            screen: MealsNavigator,
            navigationOptions: {
                tabBarIcon: (tabinfo) => {
                   return <Ionicons name='ios-restaurant' size={24} color={tabinfo.tintColor}/>
                }
            }},
             //tab bar option allow us to set icon
            //here we have taken tabinfo as a function bcus by assigning parameter in function it gives as various feature like in color we can say tabinfo.tintcolor

        Favourite: {
            screen: FavouriteNavigator,
            navigationOptions: {
                tabBarIcon: (tabinfo) => {
                   return <Ionicons name='ios-star' size={24} color={tabinfo.tintColor}/>
                }
            }},
        Filter: {
            screen: filterNavigator,
            navigationOptions: {
                tabBarIcon: (tabinfo) => {
                   return <Ionicons name='ios-filter' size={24} color={tabinfo.tintColor}/>
                }
            }
        }

    },{
        tabBarOptions: {
            activeTintColor: 'orange'
        }
    }
);



export default createAppContainer(tabNavigationBottom);

//first export toke simple meallsnavigator then we have created tabbarnavigator then we have said these navigator also have mailnavigtor 
//after that we have created mainDrawernavigator and aasign a value of tabnavigattor and exporter it to 