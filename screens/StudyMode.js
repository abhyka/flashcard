import { View, Text, Button } from 'react-native';

export default function StudyMode({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Study Mode Screen</Text>
      {/* This button demonstrates how to navigate to the Study Session screen */}
      <Button 
        title="Go to Study Session" 
        onPress={() => navigation.navigate('StudySession')} 
      />
    </View>
  );
}