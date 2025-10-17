import { AppProps } from "next/app";
import "$dev/styles/globals.css";

const DevFolio = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default DevFolio;
