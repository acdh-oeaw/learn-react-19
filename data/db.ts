import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { wait } from "@acdh-oeaw/lib";

export async function getFruits() {
  await wait(5000);
  const filePath = join(process.cwd(), "data", "fruits.json");
  const fileContent = await readFile(filePath, { encoding: "utf-8" });
  const fruits = JSON.parse(fileContent) as Array<string>;
  return fruits;
}
