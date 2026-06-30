import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useWordStore = create(
    persist(
        (set, get) => ({
            // State: Array of vocabularies
            words: [],

            // Action: Add a new word
            addWord: (wordData) => set((state) => ({ 
                words: [
                    ...state.words,
                    {
                        id: Date.now().toString(), // Unique ID for each word
                        word: wordData.word.trim(),
                        meaning: wordData.meaning.trim(),
                        article: wordData.article ? wordData.article.trim() : '',
                        gender: wordData.gender || '' , // 'Masculine', 'Feminine', 'Neuter'
                        exampleSentence: wordData.exampleSentence ? wordData.exampleSentence.trim() : '',
                        tags: wordData.tags || [], // Array of tags
                        box: 1, // Initial box for Leitner system (1 = new word, higher = memorized)
                        createdAt: new Date().toISOString(),
                    }
                ]
            })),

            // Action: Delete a word
            deleteWord: (id) => set((state) => ({
                words: state.words.filter(word => word.id !== id)
            })),

            // Action: Update a word
            updateWord: (id, isCorrect) => set((state) => ({
                words: state.words.map(word => {
                    if (word.id === id) {
                        // If correct, advance it to a higher retention box, otherwise move it back to 1
                        const nextBox = isCorrect ? Math.min(word.box + 1, 5) : 1;
                        return { ...word, box: nextBox };
                    }
                    return word;
                })
            })),
        }),
        {
            name: 'word-storage', // Name of the storage (must be unique)
            storage: createJSONStorage(() => AsyncStorage), // Use AsyncStorage for React Native
        }
    )
);