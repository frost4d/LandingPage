import { Box } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import "./App.css";
import First from "./components/firstpage";
import Footer from "./components/firstpage/Footer";

function App() {
  return (
    <BrowserRouter> {/* Wrap the app in BrowserRouter */}
      <Box className="App">
        <First />
      </Box>
    </BrowserRouter>
  );
}

export default App;
