// pages/_app.js
import "../../styles/global.css"; // Adjust the path according to your directory structure

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
