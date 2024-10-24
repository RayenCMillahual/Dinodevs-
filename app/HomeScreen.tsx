import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootNavigationProp } from '../navigation';
export default function HomeScreen() {
  const navigation = useNavigation<RootNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        ¡Bienvenido a DinosDevs!
      </Text>
      <Button
        title="Ir a Login"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="Ir a Registro"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d1fae5', // equivalente a bg-green-50
  },
  title: {
    fontSize: 24, // equivalente a text-3xl
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#4b5563', // equivalente a text-gray-800
  },
});