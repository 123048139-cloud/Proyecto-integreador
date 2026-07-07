import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import RegistroResiduosScreen from "../screens/RegistroResiduosScreen";
import EscaneoQRScreen from "../screens/EscaneoQRScreen";
import ReporteContenedoresScreen from "../screens/ReporteContenedoresScreen";
import RutasScreen from "../screens/RutasScreen";
import NotificacionesScreen from "../screens/NotificacionesScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: "#2e7d32" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Gestión de Residuos" }}
        />
        <Stack.Screen
          name="RegistroResiduos"
          component={RegistroResiduosScreen}
          options={{ title: "Registro de Residuos" }}
        />
        <Stack.Screen
          name="EscaneoQR"
          component={EscaneoQRScreen}
          options={{ title: "Escaneo QR" }}
        />
        <Stack.Screen
          name="ReporteContenedores"
          component={ReporteContenedoresScreen}
          options={{ title: "Contenedores Llenos" }}
        />
        <Stack.Screen
          name="Rutas"
          component={RutasScreen}
          options={{ title: "Consulta de Rutas" }}
        />
        <Stack.Screen
          name="Notificaciones"
          component={NotificacionesScreen}
          options={{ title: "Notificaciones" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
