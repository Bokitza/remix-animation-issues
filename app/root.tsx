import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  NavLink,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useLocation, useOutlet } from "react-router-dom";

export default function App() {
  const outlet = useOutlet();
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
          <AnimatePresence mode="wait">
            <motion.main
              key={useLocation().pathname}
              transition={{ duration: 3 }}
              initial={{ translateX: "-100vw" }}
              animate={{ translateX: "0vw" }}
              exit={{ translateX: "100vw" }}
            >
              {outlet}
            </motion.main>
          </AnimatePresence>
        </div>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
