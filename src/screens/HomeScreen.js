import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const opciones = [
  { label: " Registrar Residuo", screen: "RegistroResiduos" },
  { label: " Escanear Contenedor (QR)", screen: "EscaneoQR" },
  { label: " Reportar Contenedor Lleno", screen: "ReporteContenedores" },
  { label: " Consultar Rutas", screen: "Rutas" },
  { label: " Notificaciones", screen: "Notificaciones" },
];

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>¿Qué deseas hacer?</Text>

      {opciones.map((opcion) => (
        <TouchableOpacity
          key={opcion.screen}
          style={styles.boton}
          onPress={() => navigation.navigate(opcion.screen)}
        >
          <Text style={styles.textoBoton}>{opcion.label}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f1f8f2",
    flexGrow: 1,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#2e7d32",
  },
  boton: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#c8e6c9",
    elevation: 2,
  },
  textoBoton: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1b5e20",
  },
});
