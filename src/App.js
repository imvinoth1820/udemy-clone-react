import React from 'react'
import Navbar from "./components/Navbar"
import Categories from "./components/Categories"
import Sale from "./components/Sale"
import Recomended from "./components/Recomended"
import Topics from "./components/Topics"
import Popular from "./components/Popular"
import Footer from "./components/Footer"

function App() {
    return (
        <div>
            <Navbar />
            <Categories />
            <Sale />
            <Recomended />
            <Topics />
            <Popular />
            <Footer />
        </div>
    )
}

export default App