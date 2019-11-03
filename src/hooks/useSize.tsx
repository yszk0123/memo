import React, { useCallback, useEffect, useState } from 'react';

import { Size } from '../types/SizeType';
import { useResize } from './useResize';

export function useSize<T extends HTMLElement>(ref: React.RefObject<T>): Size | null {
  const [size, setSize] = useState<Size | null>(null);

  const handleResize = useCallback(() => {
    if (ref.current === null) {
      return;
    }
    const { width, height } = ref.current.getBoundingClientRect();
    setSize({ width, height });
  }, [ref]);

  useResize(handleResize);

  useEffect(handleResize, []);

  return size;
}
