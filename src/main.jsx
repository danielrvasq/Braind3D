import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home/Home";
import Quiz from "./pages/quiz/Quiz";
import NotFound from "./pages/not-found/NotFound";
import Cerebro from "./pages/cerebro/Cerebro";
import Alzheimer from "./pages/cerebro/alzheimer/Alzheimer";
import Bipolaridad from "./pages/cerebro/bipolaridad/Bipolaridad";
import Huntington from "./pages/cerebro/huntington/Huntington";
import Esquizofrenia from "./pages/cerebro/esquizofrenia/Esquizofrenia";
import "./index.css";
import Layout from "./layout/Layout";

createRoot(document.getElementById("root")).render(
  // <App />
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="*" element={<NotFound />} />
        <Route path="cerebro" element={<Cerebro />}>
          <Route path="alzheimer" element={<Alzheimer />} />
          <Route path="bipolaridad" element={<Bipolaridad />} />
          <Route path="huntington" element={<Huntington />} />
          <Route path="esquizofrenia" element={<Esquizofrenia />} />
        </Route>
      </Routes>
    </Layout>
  </BrowserRouter>
);
