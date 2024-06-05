"use client";

import type { FormEvent, ReactNode } from "react";

interface FruitsFormProps {
  children: ReactNode;
}

export function FruitsForm(props: FruitsFormProps) {
  const { children } = props;

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const fruits = formData.getAll("fruits");
    alert(JSON.stringify(fruits, null, 2));
  }

  return <form onSubmit={onSubmit}>{children}</form>;
}
