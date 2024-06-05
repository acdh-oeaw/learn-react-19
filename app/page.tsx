import { getFruits } from "@/data/db";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <div>All the fruits!</div>
      <Suspense fallback={<p>Waiting for fruits...</p>}>
        <Fruits />
      </Suspense>
    </main>
  );
}

async function Fruits() {
  const fruits = await getFruits();

  return (
    <ul role="list">
      {fruits.map((fruit) => {
        return <li key={fruit}>{fruit}</li>;
      })}
    </ul>
  );
}
