import { useState, useEffect } from "react";

import Header from "./layouts/Header.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./layouts/Footer.jsx";
import Loader from "./components/Loader.jsx";

import "./assets/styles/import.scss";

export default function App() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 4000)
    }, [])

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
    )
}
