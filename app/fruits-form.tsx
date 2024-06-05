"use client";

import { buyFruitsAction } from "@/actions/fruits";
import { type ReactNode, useActionState } from "react";

interface FruitsFormProps {
  children: ReactNode;
}

export function FruitsForm(props: FruitsFormProps) {
  const { children } = props;

  const [state, action, isPending] = useActionState(buyFruitsAction, {
    kind: "initial",
  });

  return (
    <form action={action}>
      {children}

      <div aria-atomic={true} aria-live="polite">
        {state.kind !== "initial" ? state.message : null}
      </div>

      {isPending ? <p>Working...</p> : null}
    </form>
  );
}
