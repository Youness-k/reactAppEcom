/* eslint-disable no-unused-vars */



import About from "./section/About";
import style from "./App.module.css";
import Footer from "./section/Footer";
import Header from "./section/Header";
import Home from "./section/Home";
import Contact from "./section/Contact";
import Products from "./section/Products";
export default function App() {
  return (
    <>
      <Header />

      <main>
        <Home />
        <Products />
        <About />
        <Contact />
      </main>
      
      <Footer/>
    </>
  )
}
