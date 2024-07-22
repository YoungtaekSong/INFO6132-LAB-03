import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import uuid from 'react-uuid';

import Summary from './components/Summary';
import Transactions from './components/Transactions';

const Tab = createBottomTabNavigator();

export default function App() {

  const [transactions, setTransactions] = useState(
    [
      { id: uuid(), name: 'Starbucks', date: 'Mar 1, 2024', street: 'North York', province: 'ON', amount: 12.00 },
      { id: uuid(), name: 'Apple Store', date: 'Mar 2, 2024', street: 'North Centre Rd', province: 'ON', amount: 101.00 },
      { id: uuid(), name: 'Sephora', date: 'Mar 3, 2024', street: 'Centre', province: 'ON', amount: 120.00 },
      { id: uuid(), name: 'Shoppers Drug Mart', date: 'Mar 4, 2024', street: 'Richmond St', province: 'ON', amount: 12.00 },
      { id: uuid(), name: 'Pizza Hut', date: 'Jun 2, 2024', street: 'Fanshawe Park Rd', province: 'ON', amount: 24.00 },
      { id: uuid(), name: 'Cheesecake Factory', date: 'Jun 3, 2024', street: 'Oxford St', province: 'ON', amount: 45.00 },
      { id: uuid(), name: 'Nike', date: 'Jun 14, 2024', street: 'Quebec St', province: 'ON', amount: 250.00 },
      { id: uuid(), name: 'Tim Hortons', date: 'Jul 4, 2024', street: 'Alberta St', province: 'ON', amount: 7.89 },
      { id: uuid(), name: 'Whole Foods', date: 'Jul 12, 2024', street: 'Highbury Ave', province: 'ON', amount: 78.00 },
      { id: uuid(), name: 'Cineplex', date: 'Jul 20, 2024', street: 'Clarke Rd', province: 'ON', amount: 42.50 },
    ]
  );

  const [currentItem, setCurrentItem] = useState({})



  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="auto" />

        <Tab.Navigator>
          {/* Transactions */}
          <Tab.Screen name='Transactions' options={{
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
              <Transactions {...props} transactions={transactions} />
            )}
          </Tab.Screen>

          {/* Summary */}
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
              <Summary {...props} transactions={transactions} />
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