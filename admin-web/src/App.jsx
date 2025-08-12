import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Texts from './Pages/Texts';
import { TextsProvider } from "./Contexts/TextsContext";
import TextDetails from './Pages/TextDetails';
import AddTextPage from './Pages/AddTextPage';
import EditTextPage from './Pages/EditTextPage';
import Header from './Component/Header';

function App() {
  return (
    <TextsProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Texts" element={<Texts />} />
          <Route path="/text/:id" element={<TextDetails />} />
          <Route path="/add" element={<AddTextPage />} />
          <Route path="/edit/:id" element={<EditTextPage />} />
        </Routes>
      </Router>
    </TextsProvider>
  );
}

export default App;
