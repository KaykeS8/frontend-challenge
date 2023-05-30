import { useState } from "react";

export function useLocalStorage(item: string) {
  const [value, setValue] = useState(localStorage.getItem(item))
}