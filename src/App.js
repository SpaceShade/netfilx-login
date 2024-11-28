
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Main from "./pages/main-page";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/main-page" element={<Main/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
