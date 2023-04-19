
import { Routes, Route} from "react-router-dom";
import InscricaoPage from './pages/InscricaoPage';
import Homepage from "./pages/Homepage";

function App() {

  return (
    <>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/inscricao" element={<InscricaoPage />} />
        <Route path="*" element={<Homepage />}/>
      </Routes>
    </>
  );
}

export default App
