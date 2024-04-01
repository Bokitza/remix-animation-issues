import { motion } from "framer-motion";

export function AnimatedLayout({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      transition={{ duration: 3 }}
      initial={{ translateX: "-100vw" }}
      animate={{ translateX: "0vw" }}
      exit={{ translateX: "100vw" }}
    >
      {children}
    </motion.div>
  );
}
