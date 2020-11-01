import logo from "./logo.svg";
import Header from "./components/Common/Headers/Header.jsx";
import Headline from "./components/Common/Controls/Headline";
import Banner from "./components/Common/Headers/Banner";
import Footer from "./components/Common/Footers/Footer";
import ModalVideo from "./components/Common/Modals/ModalVideo";
import BackToTop from "./components/Common/Controls/BackToTop";
import FeatureNews from "./components/Homepage/FeatureNews";
import CommonNews from "./components/Homepage/CommonNews";
import LatestNews from "./components/Homepage/LatestNews";

function App() {
  return (
    <div className="App">
      <div>
        {/* HEADER */}
        <Header/>
        {/*  */}
        {/* Headline */}
        <Headline/>
        {/* Feature post */}
        <FeatureNews/>
        {/* Post */}
        <CommonNews/>
        {/* Banner */}
        <Banner/>
        {/* Latest */}
        <LatestNews/>
        {/* Footer */}
        <Footer/>
        {/* Back to top */}
        <BackToTop/>
        {/* Modal Video 01*/}
        <ModalVideo/>
      </div>
    </div>
  );
}

export default App;
