import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Posts from "./Pages/Posts";
import { hydrate, render } from "react-dom";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>,
    rootElement
  );
} else {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>,
    rootElement
  );
}
