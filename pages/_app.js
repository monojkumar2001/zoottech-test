import { Fragment, useEffect } from "react";
import Script from "next/script";
import Aos from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.css";

//All Css

import "./assets/css/meanmenu.css";
import "./assets/css/remixicon.css";
// import './assets/css/odometer.min.css'
import "./assets/css/magnific-popup.min.css";
// import './assets/css/fancybox.min.css'
import "./assets/css/navbar.css";
import "./assets/css/footer.css";
import "./assets/css/dark.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import "./assets/css/custom.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  const Layout = Component.layout || Fragment;

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
