import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./pages/Game";
import Dictionary from "./pages/Dictionary";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";

export default function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Game />} />
          <Route path="dictionary" element={<Dictionary />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
