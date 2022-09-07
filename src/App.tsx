import { Routes, Route } from "react-router-dom";
import withLayout from "./components/hoc/withLayout";
import { About, Contact, Events, Home } from "./pages";
function App() {
  const HomeHOC = withLayout(Home);
  const EventHOC = withLayout(Events);
  const ContactHOC = withLayout(Contact);
  return (
    <Routes>
      <Route path="/" element={<HomeHOC />} />
      <Route path="/events" element={<EventHOC />} />
      <Route path="/contact" element={<ContactHOC />} />
    </Routes>
  );
}

export default App;
