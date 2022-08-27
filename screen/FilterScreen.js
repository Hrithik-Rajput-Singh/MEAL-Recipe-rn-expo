import React, { useState ,useCallback, useEffect} from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from '../components/HeaderButton'
import {useDispatch} from 'react-redux';
import {filtered} from '../store/action/meal'

const FilterSwitch = (props) => {
  return(
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch value={props.state} onValueChange={props.onChange} thumbColor={'green'} />
    </View>

  )
}


const FilterScreen = (props) => {
  const {navigation} = props;
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const dispatch = useDispatch()

  const saveFilter = useCallback(() => {
    const appliedFilter = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,

    };
    
    dispatch(filtered(appliedFilter))

  },[isGlutenFree, isLactoseFree , isVegan,dispatch]);
//to communicate between component and navigation 
//we firest creatred a save filter function which have an object which is saving a state 
//then useeffect is saving that function in save key by set params so we can send it to navigation //use effect triger whenever the state change 
//saving and getting params through navdata.navigatin.getparams
//usecallback insure that function only triger when then dependency in it have some change .. so that  not recreate its function unneccesary
  useEffect(() => {
    navigation.setParams({save: saveFilter});
    
  }, [saveFilter])

  return (
    <View style={styles.container}>
    <Text style={styles.filterTitle}>These is filter screen </Text>
    <FilterSwitch label="Gluten free" state={isGlutenFree} onChange={(newvalue) => setIsGlutenFree(newvalue)}/>
    <FilterSwitch label="Lactose free" state={isLactoseFree} onChange={(newvalue) => setIsLactoseFree(newvalue)}/>
    <FilterSwitch label="VEGAN" state={isVegan} onChange={(newvalue) => setIsVegan(newvalue)}/>
    </View>
  );
}

//used function here instead ofobject because navigation has a feature that autimatically  store data in navigationData 
FilterScreen.navigationOptions = (navData) => {
  return{

    headerTitle: 'Filter',
    headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
    <Item title="save" iconName="ios-save" onPress = {navData.navigation.getParam('save')}/>
  </HeaderButtons>)
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 15,


  },
  filterTitle: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center',

  }
});

export default FilterScreen ;