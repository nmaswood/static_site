import { AppProps } from "next/app";

import "./style.css";
import "./style/Navbar.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
