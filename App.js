import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Button, StyleSheet, Text, View, useColorScheme } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button onPress={() => {navigation.navigate('Normal Modal')}} title='Normal Modal'/> 
      <Button onPress={() => {navigation.navigate('FullScreen Modal')}} title='FullScreenModal'/> 
    </View>
  );
}

function NormalModal({ navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Normal Modal</Text>
      <Button onPress={() => {navigation.goBack()}} title='Close Modal'/>
    </View>
  );
}

function FullScreenModal({navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>FullScreen Modal</Text>
      <Button onPress={() => {navigation.goBack()}} title='Close Modal'/>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  const colorscheme = useColorScheme();
  return (
    <>
    <StatusBar style="auto" />
    <NavigationContainer theme={colorscheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Normal Modal" component={NormalModal} options={{ presentation: 'modal'}} />
        <Stack.Screen name="FullScreen Modal" component={FullScreenModal} options={{ presentation:'fullScreenModal'}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
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
