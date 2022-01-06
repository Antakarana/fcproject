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

const CrewMemberStack = createNativeStackNavigator<CrewMembersParams>();

const CrewMembersScreenStack = () => {
  return (
    <CrewMemberStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <CrewMemberStack.Screen name="CrewMembers" component={CrewMembers} />
      <CrewMemberStack.Screen name="CrewMember" component={CrewMember} />
    </CrewMemberStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#7127F2',
          tabBarInactiveTintColor: 'gray',
        }}>
        <RootStack.Screen
          name="Rockets"
          component={Rockets}
          options={{
            tabBarIcon: ({color, size}) => (
              <RocketIcon size={size} color={color} />
            ),
            tabBarLabel: 'Rockets',
          }}
        />
        <RootStack.Screen
          name="CrewMemberStack"
          component={CrewMembersScreenStack}
          options={{
            tabBarIcon: ({color, size}) => (
              <CrewIcon size={size} color={color} />
            ),
            tabBarLabel: 'Crew',
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
