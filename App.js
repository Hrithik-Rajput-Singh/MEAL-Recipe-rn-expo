import { StatusBar } from 'expo-status-bar';
import React , {useState}from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';
import {createStore , combineReducers} from 'redux';
import {Provider} from 'react-redux'
import MealsNavigator from './Navigation/MealsNavigator';
import mealReducer from './store/reducer/meals';

const rootReducer = combineReducers({
  mealss: mealReducer,
})
const store = createStore(rootReducer);

const fetchFonts =() => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App(props) {

  const [dataloaded, setdataloaded] = useState(false) 
  
  if (!dataloaded){
    return (
     <AppLoading startAsync={fetchFonts} onFinish={() => setdataloaded(true)} onError={(err) => console.log(err)}/>
    )
  };

  return (
    <Provider store={store}>
     <MealsNavigator />
    </Provider>
  );
}
