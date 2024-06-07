import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

export default function PasswordItem({ data, removePassword }) {
  return (
    <Pressable style={styles.container} onLongPress={removePassword}>
      <Text style={styles.password}>{ data }</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0e0e0e",
    padding: 14,
    width: '100%',
    marginBottom: 14,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  password: {
    color: '#FFF'
  }
});