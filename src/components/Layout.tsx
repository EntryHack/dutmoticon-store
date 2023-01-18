import { motion } from "framer-motion";
import Footer from "./Footer";
import Nav from "./Nav";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen h-[min(100vh)]">
      <Nav />
      <motion.main
        variants={{
          initial: { opacity: 0, x: 0, y: -50 },
          animate: { opacity: 1, x: 0, y: 0 },
        }}
        initial="initial"
        animate="animate"
        transition={{ type: "spring", duration: 1, bounce: 0.5 }}
        className="flex flex-col h-full"
      >
        {children}
        <Footer />
      </motion.main>
    </div>
  );
};

export default Layout;
