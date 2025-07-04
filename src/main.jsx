import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Quiz from "./pages/quiz/Quiz";
import NotFound from "./pages/not-found/NotFound";
import Cerebro from "./pages/cerebro/Cerebro";
import Alzheimer from "./pages/cerebro/alzheimer/Alzheimer";
import Bipolaridad from "./pages/cerebro/bipolaridad/Bipolaridad";
import Huntington from "./pages/cerebro/huntington/Huntington";
import Esquizofrenia from "./pages/cerebro/esquizofrenia/Esquizofrenia";
import Layout from "./layout/Layout";
import Perfil from "./pages/perfil/Pefil";
import AboutUs from "./pages/aboutUs/AboutUs";
import Podio from "./pages/quiz/Podio";
import "./index.css";
createRoot(document.getElementById("root")).render(
  // <App />
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="aboutUs" element={<AboutUs />} />
        <Route index path="/" element={<Home />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="*" element={<NotFound />} />
        <Route path="cerebro" element={<Cerebro />}>
          <Route path="alzheimer" element={<Alzheimer />} />
          <Route path="bipolaridad" element={<Bipolaridad />} />
          <Route path="huntington" element={<Huntington />} />
          <Route path="esquizofrenia" element={<Esquizofrenia />} />
        </Route>
        <Route path="perfil" element={<Perfil />} />
        <Route path="podio" element={<Podio />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);
