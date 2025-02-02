import { useState, useEffect } from "react";

export function useSessionStorage(
  key: string,
  defaultValue: string | null = null
) {
  const [value, setValue] = useState<string | null>(() => {
    const savedValue = sessionStorage.getItem(key);
    if (savedValue) {
      return JSON.parse(savedValue);
    }
    return defaultValue;
  });

  useEffect(() => {
    const rawValue = JSON.stringify(value);
    sessionStorage.setItem(key, rawValue);
  }, [value]);

  return [value, setValue];
}
