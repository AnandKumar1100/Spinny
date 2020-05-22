import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/MaterialIcons'

import HomeScreen from '../screens/Home/container'
import DetailsScreen from '../screens/Details/container'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'movie';
            } else if (route.name === 'List') {
              iconName = 'list';
            }

            return <Icons name={iconName} size={size} color={focused ? '#379aff' : color} style={{paddingTop: 4}}/>;
          },
        })}
              tabBarOptions={{
                  labelStyle: { fontSize: 16, justifyContent:'center', alignItems:'center', padding: 0 }
              }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="List" component={DetailsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}