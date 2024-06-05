import { getFruits } from "@/data/db";

export default async function Home() {
  const fruits = await getFruits();

  return (
    <main>
      <div>All the fruits!</div>
      <ul role="list">
        {fruits.map((fruit) => {
          return <li key={fruit}>{fruit}</li>;
        })}
      </ul>
    </main>
  );
}
