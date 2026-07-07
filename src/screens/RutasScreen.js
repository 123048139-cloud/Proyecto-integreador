import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const rutas = [
  { id: "1", nombre: "Ruta Norte", hora: "08:00 AM", estado: "En camino" },
  { id: "2", nombre: "Ruta Centro", hora: "10:30 AM", estado: "Pendiente" },
  { id: "3", nombre: "Ruta Sur", hora: "01:00 PM", estado: "Completada" },
];

export default function RutasScreen() {
  return (
    <FlatList
      contentContainerStyle={styles.lista}
      data={rutas}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.tarjeta}>
          <Text style={styles.nombre}>{item.nombre}</Text>
          <Text style={styles.detalle}>Hora estimada: {item.hora}</Text>
          <Text style={styles.estado}>Estado: {item.estado}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  lista: { padding: 16, backgroundColor: "#fff" },
  tarjeta: {
    backgroundColor: "#f1f8f2",
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
  },
  nombre: { fontWeight: "600", fontSize: 15, color: "#1b5e20" },
  detalle: { fontSize: 13, color: "#555", marginTop: 4 },
  estado: { fontSize: 13, color: "#2e7d32", marginTop: 2, fontWeight: "600" },
});
