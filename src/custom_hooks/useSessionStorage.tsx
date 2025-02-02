import { useState, useEffect } from "react";

export function useSessionStorage<T>(key: T, defaultValue: T | null) {
  const [value, setValue] = useState<T>(() => {
    const savedValue = sessionStorage.getItem(key as string);
    if (savedValue) {
      return JSON.parse(savedValue);
    }
    return defaultValue;
  });

  useEffect(() => {
    const rawValue = JSON.stringify(value);
    sessionStorage.setItem(key as string, rawValue);
  }, [value]);

  return [value, setValue];
}
