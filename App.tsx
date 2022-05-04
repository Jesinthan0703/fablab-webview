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
          <WebView source={{ uri: "http://61.16.128.190:49174/" }} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
