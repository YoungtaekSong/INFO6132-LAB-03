import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View
} from 'react-native';

import Summary from './componenets/Summary';
import Transactions from './componenets/Transactions';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="auto" />

        <Tab.Navigator>
          {/* home */}
          <Tab.Screen name='Transations List' options={{
            headerShown: true,
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#008080'
            },
            title: 'Transactions',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name='file' size={size} color={color} />
            )
          }}>
            {(props) => (
              <Transactions />
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
              <Summary {...props} />
            )}
          </Tab.Screen>
        </Tab.Navigator>
      </View>
    </NavigationContainer >
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    flex: 1
  },
});