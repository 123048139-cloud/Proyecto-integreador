import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const notificaciones = [
  {
    id: "1",
    titulo: "Contenedor lleno",
    mensaje: "Contenedor A-12 alcanzó el 90% de capacidad.",
  },
  {
    id: "2",
    titulo: "Recolección pendiente",
    mensaje: "La Ruta Centro no se ha completado hoy.",
  },
  {
    id: "3",
    titulo: "Nuevo reporte",
    mensaje: "Se generó un nuevo reporte ambiental semanal.",
  },
];

export default function NotificacionesScreen() {
  return (
    <FlatList
      contentContainerStyle={styles.lista}
      data={notificaciones}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.tarjeta}>
          <Text style={styles.titulo}>Notificacion {item.titulo}</Text>
          <Text style={styles.mensaje}>{item.mensaje}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  lista: { padding: 16, backgroundColor: "#fff" },
  tarjeta: {
    backgroundColor: "#fff8e1",
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#f9a825",
  },
  titulo: { fontWeight: "600", fontSize: 15, color: "#333" },
  mensaje: { fontSize: 13, color: "#555", marginTop: 4 },
});
