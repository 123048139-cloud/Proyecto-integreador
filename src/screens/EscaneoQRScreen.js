import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function EscaneoQRScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.marcoQR}>
        <Text style={styles.iconoQR}>📷</Text>
        <Text style={styles.textoMarco}>Cámara aparecerá aquí</Text>
      </View>
      <Text style={styles.instrucciones}>
        Apunta la cámara al código QR del contenedor para identificarlo.
      </Text>
      <TouchableOpacity style={styles.boton}>
        <Text style={styles.textoBoton}>Activar cámara (próximamente)</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  marcoQR: {
    width: 250,
    height: 250,
    borderWidth: 3,
    borderColor: "#2e7d32",
    borderStyle: "dashed",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  iconoQR: { fontSize: 50, marginBottom: 10 },
  textoMarco: { color: "#888" },
  instrucciones: {
    textAlign: "center",
    color: "#555",
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  boton: {
    backgroundColor: "#2e7d32",
    borderRadius: 12,
    padding: 16,
    paddingHorizontal: 24,
  },
  textoBoton: { color: "#fff", fontWeight: "bold" },
});
