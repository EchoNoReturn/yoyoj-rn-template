import ApplicationNavigator from "./navigation/Application";
import { ThemeProvider } from "@/themes/ThemeProvider";

import '@/translations'

function App() {
  return (
    <ThemeProvider>
      <ApplicationNavigator />
    </ThemeProvider>
  );
}

export default App;