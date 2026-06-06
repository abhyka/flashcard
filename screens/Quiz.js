import { View, Text, Button } from 'react-native';

export default function Quiz({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Quiz Screen</Text>
      {/* This button demonstrates how to navigate to the Settings screen */}
      <Button 
        title="Go to Settings" 
        onPress={() => navigation.navigate('Settings')} 
      />
    </View>
  );
}