import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ItemProvider } from "./contexts/itemProvider";
import WelcomeScreen from "./pages/WelcomeScreen"

const queryClient = new QueryClient();

const App = () => (
  <>
    <QueryClientProvider client={queryClient}>
      <ItemProvider>
        <Routes>
          <Route path="/" element={<WelcomeScreen/>}/>
          <Route path="/home" element={<Home />} />
        </Routes>
      </ItemProvider>
    </QueryClientProvider>
  </>
);

export default App;
