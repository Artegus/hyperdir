import { BrowserRouter, Route, Routes } from "react-router";
import { Dashboard } from "./pages/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="*"  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
