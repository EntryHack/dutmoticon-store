import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import "@/styles/fonts.css";
import "@/styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Component {...pageProps} />
    </AnimatePresence>
  );
};

export default App;
