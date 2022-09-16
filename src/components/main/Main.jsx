import Slider from "./slider/SliderComponent";
import "../../style/main.css";
import Bestsellers from "./bestsellers/bestsellers";
import Popularbrands from "./popularbrands/popularbrands";
import MainNews from "./mainNews/mainNews";
import Advantage from "./advantage/advantage";
import Contact from "./contact/contact";

function Main(props) {
  return (
    <main className="main">
      <Slider {...props} />
      <Bestsellers />
      <Popularbrands />
      <MainNews />
      <Advantage />
      <Contact />
    </main>
  );
}

export default Main;
