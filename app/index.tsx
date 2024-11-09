import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <WebView source={{ uri: "http://starconnect.vercel.app" }} />
    </SafeAreaView>
  );
}
