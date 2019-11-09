import { select } from '@storybook/addon-knobs';

export function select2<T>(
  name: string,
  map: {
    [k: string]: T;
  },
  defaultValue: string,
  groupId?: string,
): T | null {
  const keys = Object.keys(map);
  const key = select(name, keys, defaultValue, groupId);
  return map[key] ?? null;
}
