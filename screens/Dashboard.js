import { View, Text, Button } from 'react-native';

export default function Dashboard({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Dashboard Screen</Text>
      {/* This button demonstrates how to navigate to the WordEntry screen */}
      <Button 
        title="Go to Word Entry" 
        onPress={() => navigation.navigate('WordEntry')} 
      />
    </View>
  );
}