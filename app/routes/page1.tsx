import { useLoaderData } from "@remix-run/react";
import { AnimatedLayout } from "~/components/animated-layout";
import { useLastLoaderData } from "~/utils/common";

export async function clientLoader() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json = await res.json();
  return json;
}

export default function About() {
  const data = useLastLoaderData();

  return (
    <AnimatedLayout>
      <div style={{ border: "solid black 2px" }}>
        <h1>Im page 1 :P</h1>
        <div>
          {" "}
          Loader content - watch him fade away unexpectedly on unmount :O
          <br />
          <p style={{ fontSize: 64 }}>{data.id}</p>
        </div>
      </div>
    </AnimatedLayout>
  );
}
