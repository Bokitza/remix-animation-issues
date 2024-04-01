import { AnimatedLayout } from "~/components/animated-layout";
import { useLastLoaderData } from "~/utils/common";

export async function clientLoader() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const json = await res.json();
  return json;
}

export default function Blog() {
  const data = useLastLoaderData();

  return (
    <AnimatedLayout>
      <div style={{ border: "solid black 2px" }}>
        <h1>Im page 2 :P</h1>
        <div>
          Loader content - watch him fade away unexpectedly on unmount :O
          {data.id}
          <br />
          {data?.map((item: any) => {
            return (
              <div style={{ fontSize: 40 }} key={item.id}>
                {item.id}
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedLayout>
  );
}
