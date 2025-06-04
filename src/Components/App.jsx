import { useState } from 'react'
import Header from './Header.jsx'
import About from './About.jsx'
import ArticleList from './ArticleList.jsx'
import Footer from './Footer.jsx'

function App() {
    return(
    <>
        <Header name="This is a Blog Site"/>
        <About />
        <ArticleList />
        <Footer />
    </>
    );
}

export default App
