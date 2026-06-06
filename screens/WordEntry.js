import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  Button, 
  Switch, 
  StyleSheet, 
  ScrollView, 
  Alert 
} from 'react-native';
import { useWordStore } from '../store/useWordStore';

export default function WordEntry({ navigation }) {
  // Access the addWord action from our global store
  const addWord = useWordStore((state) => state.addWord);

  // Local state for the form fields
  const [word, setWord] = useState('');
  const [meaning, setMeaning] = useState('');
  const [hasArticle, setHasArticle] = useState(false);
  const [article, setArticle] = useState('');
  const [gender, setGender] = useState(''); // E.g., Masculine, Feminine
  const [exampleSentence, setExampleSentence] = useState('');
  const [tagsInput, setTagsInput] = useState('');

  const handleSave = () => {
    // Basic validation
    if (!word.trim() || !meaning.trim()) {
      Alert.alert('Error', 'Please enter at least the word and its meaning.');
      return;
    }

    // Convert comma-separated string into an array of clean tags
    const tagsArray = tagsInput
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0);

    // Construct the payload for the store
    const newWordData = {
      word,
      meaning,
      article: hasArticle ? article : '',
      gender: hasArticle ? gender : '',
      exampleSentence,
      tags: tagsArray,
    };

    // Save to local database
    addWord(newWordData);

    // Provide feedback and route back
    Alert.alert('Success', 'Word added successfully!', [
      { text: 'OK', onPress: () => navigation.goBack() }
    ]);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      
      <Text style={styles.label}>Word *</Text>
      <TextInput 
        style={styles.input} 
        value={word} 
        onChangeText={setWord} 
        placeholder="Example: Eyeball" 
      />

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Does the word have an article?</Text>
        <Switch 
          value={hasArticle} 
          onValueChange={setHasArticle} 
        />
      </View>

      {/* Conditional Rendering: Only show these if the switch is ON */}
      {hasArticle && (
        <View style={styles.conditionalBox}>
          <Text style={styles.label}>Article</Text>
          <TextInput 
            style={styles.input} 
            value={article} 
            onChangeText={setArticle} 
            placeholder="Example: The, A, An" 
          />
          <Text style={styles.label}>Gender (Optional)</Text>
          <TextInput 
            style={styles.input} 
            value={gender} 
            onChangeText={setGender} 
            placeholder="Example: Masculine, Feminine" 
          />
        </View>
      )}

      <Text style={styles.label}>Meaning *</Text>
      <TextInput 
        style={styles.input} 
        value={meaning} 
        onChangeText={setMeaning} 
        placeholder="Example: Eye ball, Eyes" 
      />

      <Text style={styles.label}>Example Sentence</Text>
      <TextInput 
        style={[styles.input, styles.textArea]} 
        value={exampleSentence} 
        onChangeText={setExampleSentence} 
        placeholder="Usage in a sentence..." 
        multiline
      />

      <Text style={styles.label}>Categories / Tags (Separate with commas)</Text>
      <TextInput 
        style={styles.input} 
        value={tagsInput} 
        onChangeText={setTagsInput} 
        placeholder="Example: Body, Noun, Hard" 
      />

      <View style={styles.buttonWrapper}>
        <Button title="Save" onPress={handleSave} color="#007AFF" />
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  conditionalBox: {
    backgroundColor: '#f0f8ff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#cce0ff',
  },
  buttonWrapper: {
    marginTop: 10,
  }
});