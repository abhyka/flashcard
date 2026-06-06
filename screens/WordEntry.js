import { View, Text, Button } from 'react-native';

export default function WordEntry({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Word Entry Screen</Text>
      {/* This button demonstrates how to navigate to the Study screen */}
      <Button 
        title="Go to Study Mode" 
        onPress={() => navigation.navigate('StudyMode')} 
      />
    </View>
  );
}