import type { MetaFunction } from "@remix-run/node";
import { useLocation } from "@remix-run/react";
import { AnimatedLayout } from "~/components/animated-layout";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <AnimatedLayout>
      <div
        style={{
          fontFamily: "system-ui, sans-serif",
          lineHeight: "1.8",
          border: "solid 1px black",
        }}
      >
        <h1>Lets test animations unmounting with loaders...</h1>
      </div>
    </AnimatedLayout>
  );
}
