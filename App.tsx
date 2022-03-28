import React from "react";
import { WebView } from "react-native-webview";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SafeAreaView from "react-native-safe-area-view";
import { View } from "react-native";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }} forceInset={{ top: "always" }}>
        <View style={{ flex: 1 }}>
          <WebView source={{ uri: "http://192.168.137.106:3000/" }} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
