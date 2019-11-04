import { useCallback, useState } from 'react';

export function useToggle(initialValue: boolean): [boolean, () => void] {
  const [value, setValue] = useState(initialValue);

  const handleToggle = useCallback(() => {
    setValue(v => !v);
  }, []);

  return [value, handleToggle];
}
