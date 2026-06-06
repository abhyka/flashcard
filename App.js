import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importing the screen components
import Dashboard from './screens/Dashboard';
import WordEntry from './screens/WordEntry';
import StudyMode from './screens/StudyMode';
import StudySession from './screens/StudySession';
import Quiz from './screens/Quiz';
import Settings from './screens/Settings';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ title: 'Dashboard' }}
        />
        <Stack.Screen
          name="WordEntry"
          component={WordEntry}
          options={{ title: 'Word Entry' }}
        />
        <Stack.Screen
          name="StudyMode"
          component={StudyMode}
          options={{ title: 'Study Mode' }}
        />
        <Stack.Screen
          name="StudySession"
          component={StudySession}
          options={{ title: 'Study Session' }}
        />
        <Stack.Screen
          name="Quiz"
          component={Quiz}
          options={{ title: 'Quiz' }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ title: 'Settings' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}