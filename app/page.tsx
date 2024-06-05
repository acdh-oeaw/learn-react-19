import { getFruits } from "@/data/db";

export default function Home() {
  return (
    <main>
      <div>All the fruits!</div>
      <Fruits />
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
