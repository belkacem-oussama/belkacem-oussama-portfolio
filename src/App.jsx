import { useState, useEffect } from "react";
import Home from "./pages/Home.jsx";
import Header from "./layouts/header.jsx";
import "./assets/styles/import.scss";
import Footer from "./layouts/Footer.jsx";
import Loader from "./components/Loader.jsx";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Home />
          <Footer />
        </>
      )}
    </>
  );
}
