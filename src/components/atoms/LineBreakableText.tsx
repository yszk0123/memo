import React, { useMemo } from 'react';

interface Props {
  text: string;
  maxLines?: number;
}

export const LineBreakableText: React.FunctionComponent<Props> = ({ text, maxLines }) => {
  return useMemo(() => {
    const result: React.ReactNode = join(text.split(/\r?\n/), maxLines);
    return <>{result}</>;
  }, [maxLines, text]);
};

function join<T>(lines: T[], max?: number): React.ReactNode[] {
  const result: React.ReactNode[] = [];
  const length = max === undefined ? lines.length : Math.min(lines.length, max);
  for (let i = 0; i < length; i += 1) {
    result.push(lines[i]);
    if (i !== length - 1) {
      result.push(<br key={i} />);
    }
  }
  return result;
}
