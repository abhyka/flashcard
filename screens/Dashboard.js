import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useWordStore } from '../store/useWordStore';

export default function Dashboard({ navigation }) {
  // Pulling the words from the Zustand store to display on the dashboard
  const words = useWordStore((state) => state.words);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <Text style={styles.subtitle}>Total Words: {words.length}</Text>

      <View style={styles.statsCard}>
        <Text style={styles.statsNumber}>{words.length}</Text>
        <Text style={styles.statsLabel}>Total Words</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Add New Word"
          onPress={() => navigation.navigate('WordEntry')}
        />
        <View style={{marginVertical: 8}} />
        <Button
          title="Start Study Mode"
          onPress={() => navigation.navigate('StudyMode')}
          disabled={words.length === 0} // Disable if no words are added
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  statsCard: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 40,
  },
  statsNumber: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  statsLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
  },
  buttonContainer: {
    width: '80%',
  },
});