"use server";

import { wait } from "@acdh-oeaw/lib";

type BuyFruitActionState =
  | {
      kind: "initial";
    }
  | {
      kind: "success";
      message: string;
    }
  | {
      kind: "error";
      message: string;
    };

export async function buyFruitsAction(
  previousState: BuyFruitActionState,
  formData: FormData
): Promise<BuyFruitActionState> {
	await wait(2500)
  const fruits = formData.getAll("fruits");
  console.log(fruits);
  return { kind: "success", message: `Bought some fruit for you: ${fruits.join(", ")}.` };
}
