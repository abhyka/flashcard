import { View, Text, Button } from 'react-native';

export default function StudySession({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Study Session Screen</Text>
      {/* This button demonstrates how to navigate to the Quiz screen */}
      <Button 
        title="Go to Quiz" 
        onPress={() => navigation.navigate('Quiz')} 
      />
    </View>
  );
}