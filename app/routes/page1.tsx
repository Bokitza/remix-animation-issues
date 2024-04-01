import { useLoaderData } from "@remix-run/react";

export async function clientLoader() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json = await res.json();
  return json;
}

export default function About() {
  const data = useLoaderData() || {};
  return (
    <div style={{ border: "solid black 2px" }}>
      <h1>Im page 1 :P</h1>
      <p>
        {" "}
        Loader content - watch him fade away unexpectedly on unmount :O
        <br />
        <p style={{ fontSize: 64 }}>{data.id}</p>
      </p>
    </div>
  );
}
