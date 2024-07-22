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
      { id: uuid(), name: 'Starbucks', date: 'Mar 14, 2024', street: 'North York', province: 'ON', amount: 12.00 },
      { id: uuid(), name: 'Apple Store', date: 'Mar 14, 2024', street: 'North York', province: 'ON', amount: 101.00 },
      { id: uuid(), name: 'Sephora', date: 'Mar 14, 2024', street: 'North York', province: 'ON', amount: 120.00 },
      { id: uuid(), name: 'Shoppers Drug Mart', date: 'Mar 14, 2024', street: 'North York', province: 'ON', amount: 12.00 },
      { id: uuid(), name: 'Pizza Hut', date: 'Mar 14, 2024', street: 'North York', province: 'ON', amount: 24.00 },
      { id: uuid(), name: 'Cheesecake Factory', date: 'Mar 14, 2024', street: 'North York', province: 'ON', amount: 45.00 },
      { id: uuid(), name: 'Nike', date: 'Mar 14, 2024', street: 'North York', province: 'ON', amount: 250.00 },
      { id: uuid(), name: 'Tim Hortons', date: 'Mar 14, 2024', street: 'North York', province: 'ON', amount: 7.89 },
      { id: uuid(), name: 'Whole Foods', date: 'Mar 14, 2024', street: 'North York', province: 'ON', amount: 78.00 },
      { id: uuid(), name: 'Cineplex', date: 'Mar 14, 2024', street: 'North York', province: 'ON', amount: 42.50 },
    ]
  );

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

          {/* Detail */}
          <Tab.Screen name='Detail' options={{
            headerShown: true,
            title: 'Deail',
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