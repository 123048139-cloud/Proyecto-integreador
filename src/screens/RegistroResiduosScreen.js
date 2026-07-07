import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";

const tiposResiduo = [
  "Orgánico",
  "Plástico",
  "Papel/Cartón",
  "Vidrio",
  "Metal",
  "Otro",
];

export default function RegistroResiduosScreen() {
  const [tipo, setTipo] = useState("");
  const [peso, setPeso] = useState("");
  const [ubicacion, setUbicacion] = useState("");

  const handleGuardar = () => {
    if (!tipo || !peso) {
      Alert.alert(
        "Faltan datos",
        "Selecciona un tipo de residuo e ingresa el peso.",
      );
      return;
    }
    Alert.alert(
      "Registro guardado (simulado)",
      `Tipo: ${tipo}\nPeso: ${peso} kg\nUbicación: ${ubicacion || "N/A"}`,
    );
    setTipo("");
    setPeso("");
    setUbicacion("");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Tipo de residuo</Text>
      <View style={styles.chipsContainer}>
        {tiposResiduo.map((item) => (
          <TouchableOpacity
            key={item}
            style={[styles.chip, tipo === item && styles.chipSeleccionado]}
            onPress={() => setTipo(item)}
          >
            <Text
              style={[
                styles.chipTexto,
                tipo === item && styles.chipTextoSeleccionado,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>Peso (kg)</Text>
      <TextInput
        style={styles.input}
        placeholder="Ej. 2.5"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />

      <Text style={styles.label}>Ubicación / contenedor (opcional)</Text>
      <TextInput
        style={styles.input}
        placeholder="Ej. Contenedor A-12"
        value={ubicacion}
        onChangeText={setUbicacion}
      />

      <TouchableOpacity style={styles.botonGuardar} onPress={handleGuardar}>
        <Text style={styles.textoBotonGuardar}>Guardar Registro</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#fff", flexGrow: 1 },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 14,
    marginBottom: 6,
    color: "#333",
  },
  chipsContainer: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  chip: {
    borderWidth: 1,
    borderColor: "#c8e6c9",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 14,
    marginRight: 8,
    marginBottom: 8,
  },
  chipSeleccionado: { backgroundColor: "#2e7d32", borderColor: "#2e7d32" },
  chipTexto: { color: "#2e7d32", fontSize: 13 },
  chipTextoSeleccionado: { color: "#fff", fontWeight: "600" },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    fontSize: 15,
  },
  botonGuardar: {
    backgroundColor: "#2e7d32",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    marginTop: 24,
  },
  textoBotonGuardar: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
