import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View
} from 'react-native';

import Transaction from './componenets/Transaction';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View>
        <StatusBar style="auto" />

        <Tab.Navigator>
          {/* home */}
          <Tab.Screen name='Transation' options={{
            headerShown: true,
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#008080'
            },
            title: 'Transaction',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name='file' size={size} color={color} />
            )
          }}>
            {(props) => (
              <Transaction />
            )}
          </Tab.Screen>

          {/* Search */}
          <Tab.Screen name='Summary' options={{
            headerShown: true,
            title: 'Summary',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#008080'
            },
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name='info' size={size} color={color} />
            )
          }}>
            {(props) => (
              <Search {...props}
                movies={movies}
                onAddTask={handleAddTask}
                onSearchMovie={onSearchMovie}
                onAddMovie={onAddMovie} />
            )}
          </Tab.Screen>
        </Tab.Navigator>
      </View>
    </NavigationContainer >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
