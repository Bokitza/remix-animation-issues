import { useLoaderData } from "@remix-run/react";
import React from "react";

export function useLastLoaderData<T>() {
  const dataRef = React.useRef({});

  const data = useLoaderData<T>() || dataRef.current;

  React.useEffect(() => {
    if (data) dataRef.current = data;
  }, [data]);

  return data;
}
