import { useEffect, useState } from 'react';

import { Rectangle } from '../types/GeometoryType';

export function useRectangle(element: HTMLElement | null): Rectangle | null {
  const [rectangle, setRectangle] = useState<Rectangle | null>(null);

  useEffect(() => {
    if (element !== null) {
      const r = element.getBoundingClientRect();
      const newRectangle: Rectangle = { x: r.left, y: r.top, width: r.width, height: r.height };
      setRectangle(newRectangle);
    }
  }, [element]);

  return rectangle;
}
