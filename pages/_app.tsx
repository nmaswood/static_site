import { AppProps } from "next/app";

import "../style/style.css";
import "../style/Navbar.css";
import "../style/AboutMe.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
