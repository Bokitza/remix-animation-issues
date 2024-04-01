import {
  Links,
  Meta,
  NavLink,
  Scripts,
  ScrollRestoration,
  useLocation,
  useOutlet,
} from "@remix-run/react";
import { AnimatePresence, motion } from "framer-motion";

export default function App() {
  const outlet = useOutlet();
  const location = useLocation();

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/page1">page1</NavLink>
            <NavLink to="/page2">page2</NavLink>
          </nav>
        </header>
        <div className="mx-auto grid min-h-screen place-items-center">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={location.pathname}>{outlet}</motion.div>
          </AnimatePresence>
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
