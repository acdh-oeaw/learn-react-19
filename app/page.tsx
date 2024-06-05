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

  async function buyFruitsAction(formData: FormData) {
    "use server";
    const fruits = formData.getAll("fruits");
    console.log(fruits);
  }

  return (
    <form action={buyFruitsAction}>
      <ul role="list">
        {fruits.map((fruit) => {
          return (
            <li key={fruit}>
              <CheckBox name="fruits" value={fruit} />
            </li>
          );
        })}
      </ul>
      <button type="submit">Submit</button>
    </form>
  );
}

interface CheckBoxProps {
  name: string;
  value: string;
}

function CheckBox(props: CheckBoxProps) {
  const { name, value } = props;

  return (
    <label>
      <input type="checkbox" name={name} value={value} />
      <span>{value}</span>
    </label>
  );
}
