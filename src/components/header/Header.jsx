import "./../../style/normalaiz.css";
import "./../../style/header.css";
import HeaderTop from "./header-top.jsx";
import HeaderCenter from "./header-center";
import HeaderNav from "./header-nav.jsx";
import HiddenMenu from "./hiddenMenu";

function Headers(props) {
  return (
    <header className="App-header">
      <HeaderTop />
      <HeaderCenter />
      <HiddenMenu />
      <HeaderNav {...props} />
    </header>
  );
}

export default Headers;
