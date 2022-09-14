import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
// import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
    <Header/>
    <Routes>
        <Route path="/" element={<HomePage />} />
    </Routes>
    {/* <Footer/> */}
</Router>
  );
}

export default App;
