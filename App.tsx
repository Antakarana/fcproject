import React from 'react';
import {CrewMembers, CrewMember, Rockets} from './src/screens/Index';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RocketIcon from './src/assets/icons/Rocket';
import CrewIcon from './src/assets/icons/Crew';
import {StatusBar} from 'react-native';

export type RootStackParams = {
  CrewMemberStack: NavigatorScreenParams<CrewMembersParams>;
  Rockets;
  CrewMember;
};

const RootStack = createBottomTabNavigator<RootStackParams>();

export type CrewMembersParams = {
  CrewMembers;
  CrewMember: {
    name: string;
  };
};

const Stack = createNativeStackNavigator<CrewMembersParams>();

const RocketScreenStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Rockets"
        component={Rockets}
        options={{
          title: 'Rockets',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#ffffff',
        }}
      />
    </Stack.Navigator>
  );
};

const CrewMembersScreenStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CrewMembers"
        component={CrewMembers}
        options={{
          title: 'Crew Members',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#ffffff',
        }}
      />
      <Stack.Screen
        name="CrewMember"
        component={CrewMember}
        options={({route}) => ({
          title: route?.params?.name,
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#ffffff',
        })}
      />
    </Stack.Navigator>
  );
};

const tabConfig = {
  tabBarActiveTintColor: '#f4511e',
  tabBarInactiveTintColor: '#a1a1a1',
  tabBarActiveBackgroundColor: '#ffffff',
  tabBarInactiveBackgroundColor: '#ffffff',
};

const App = ({navigation, route}) => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#f4511e" />
      <NavigationContainer>
        <RootStack.Navigator
          screenOptions={{
            ...tabConfig,
            tabBarStyle: {position: 'absolute'},
            headerShown: false,
          }}>
          <RootStack.Screen
            name="Rockets"
            component={RocketScreenStack}
            options={{
              tabBarIcon: ({color, size}) => (
                <RocketIcon size={size} color={color} />
              ),
              tabBarLabel: 'Rockets',
            }}
          />
          <RootStack.Screen
            name="Crew Members"
            component={CrewMembersScreenStack}
            options={{
              tabBarIcon: ({color, size}) => (
                <CrewIcon size={size} color={color} />
              ),
            }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;