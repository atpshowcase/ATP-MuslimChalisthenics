import MyRoutes from "./MyRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import WebsiteProtection from "./components/WebsiteProtection";

function App() {
  return (
    <div className="App">
      <WebsiteProtection />  {/* Tambahkan ini */}
      <MyRoutes />
    </div>
  );
}

export default App;
