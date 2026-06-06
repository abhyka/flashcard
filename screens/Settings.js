import { View, Text, Button } from 'react-native';

export default function Settings({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
      {/* This button demonstrates how to navigate to the Dashboard screen */}
      <Button 
        title="Go to Dashboard" 
        onPress={() => navigation.navigate('Dashboard')} 
      />
    </View>
  );
}