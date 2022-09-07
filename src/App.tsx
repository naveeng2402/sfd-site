import { Routes, Route } from "react-router-dom";
import withLayout from "./components/hoc/withLayout";
import { About, Events, Home } from "./pages";
function App() {
  const HomeHOC = withLayout(Home);
  const EventHOC = withLayout(Events);
  return (
    <Routes>
      <Route path="/" element={<HomeHOC />} />
      <Route path="/events" element={<EventHOC />} />
    </Routes>
  );
}

export default App;
