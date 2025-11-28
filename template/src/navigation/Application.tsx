import type { RootStackParamList } from '@/navigation/types';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Paths } from './paths';

import { ExampleScreen, StartupScreen } from '@/screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

function ApplicationNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Paths.Startup} component={StartupScreen} />
        <Stack.Screen name={Paths.Example} component={ExampleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ApplicationNavigator;
