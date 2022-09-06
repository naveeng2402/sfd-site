import { Routes, Route } from "react-router-dom";
import withLayout from "./components/hoc/withLayout";
import { About, Home } from "./pages";
function App() {
  const HomeHOC = withLayout(Home);
  const AboutHOC = withLayout(About);
  return (
    <Routes>
      <Route path="/" element={<HomeHOC />} />
      <Route path="/about" element={<AboutHOC />} />
    </Routes>
  );
}

export default App;
