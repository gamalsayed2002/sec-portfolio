import Header from "./components/1-header/Header";
import Hero from "./components/2-Hero/Hero";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";

function App() {
  return (
    <div className="container">
      <Header />

      <Hero />
      <div className="line" />

      <Main />
      <div className="line" />

      <Contact />
      <div className="line" />

      <Footer />
    </div>
  );
}

export default App;
