import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";

const contenedoresIniciales = [
  { id: "1", nombre: "Contenedor A-12", nivel: 90 },
  { id: "2", nombre: "Contenedor B-05", nivel: 60 },
  { id: "3", nombre: "Contenedor C-08", nivel: 30 },
];

export default function ReporteContenedoresScreen() {
  const [contenedores, setContenedores] = useState(contenedoresIniciales);

  const reportarLleno = (id, nombre) => {
    Alert.alert(
      "Reporte enviado (simulado)",
      `${nombre} fue reportado como lleno.`,
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.tarjeta}>
      <View style={{ flex: 1 }}>
        <Text style={styles.nombre}>{item.nombre}</Text>
        <View style={styles.barraFondo}>
          <View style={[styles.barraNivel, { width: `${item.nivel}%` }]} />
        </View>
        <Text style={styles.nivelTexto}>{item.nivel}% lleno</Text>
      </View>
      <TouchableOpacity
        style={styles.botonReportar}
        onPress={() => reportarLleno(item.id, item.nombre)}
      >
        <Text style={styles.textoBotonReportar}>Reportar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      contentContainerStyle={styles.lista}
      data={contenedores}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  lista: { padding: 16, backgroundColor: "#fff" },
  tarjeta: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f8f2",
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
  },
  nombre: {
    fontWeight: "600",
    fontSize: 15,
    marginBottom: 6,
    color: "#1b5e20",
  },
  barraFondo: {
    height: 8,
    backgroundColor: "#c8e6c9",
    borderRadius: 4,
    overflow: "hidden",
  },
  barraNivel: { height: 8, backgroundColor: "#e53935" },
  nivelTexto: { fontSize: 12, color: "#666", marginTop: 4 },
  botonReportar: {
    backgroundColor: "#e53935",
    borderRadius: 8,
    padding: 10,
    marginLeft: 10,
  },
  textoBotonReportar: { color: "#fff", fontWeight: "600", fontSize: 12 },
});
