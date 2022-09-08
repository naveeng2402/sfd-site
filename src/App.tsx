import { Routes, Route } from "react-router-dom";
import withLayout from "./components/hoc/withLayout";
import { About, Contact, Events, Gallery, Home } from "./pages";
function App() {
  const HomeHOC = withLayout(Home);
  const EventHOC = withLayout(Events);
  const ContactHOC = withLayout(Contact);
  const GalleryHOC = withLayout(Gallery);
  return (
    <Routes>
      <Route path="/" element={<HomeHOC />} />
      <Route path="/events" element={<EventHOC />} />
      <Route path="/contact" element={<ContactHOC />} />
      <Route path="/gallery" element={<GalleryHOC />} />
    </Routes>
  );
}

export default App;
