import { useState, useEffect } from 'react'
import ScrollToTop from 'react-scroll-to-top'

import Header from './layouts/Header.jsx'
import Home from './pages/Home.jsx'
import Footer from './layouts/Footer.jsx'
import Loader from './components/Loader.jsx'

import './assets/styles/import.scss'
import { Route, Routes } from 'react-router-dom'
import Project from './pages/Project.jsx'

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
                    <ScrollToTop smooth />
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route
                            path="/project/:id"
                            element={<Project />}
                        ></Route>
                    </Routes>
                    <Footer />
                </>
            )}
        </>
    )
}
