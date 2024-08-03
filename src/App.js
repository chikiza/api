import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './components/Inicio';
import Personaje from './components/Personaje';
import Grafico from './components/Grafico';

function App() {
  return (
    <div className="contenedor">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <Inicio />
              <Grafico />
            </>
          } />
          <Route path="/personaje/:id" element={<Personaje />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
