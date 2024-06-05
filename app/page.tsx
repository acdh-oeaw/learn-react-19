import { getFruits } from "@/data/db";
import { Suspense } from "react";
import { FruitsForm } from "./fruits-form";

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
    <FruitsForm>
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
    </FruitsForm>
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
