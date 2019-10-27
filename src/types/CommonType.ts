export type ValueOf<T> = T[keyof T];

export type ReturnTypes<T extends { [key: string]: (...args: any[]) => any }> = {
  [K in keyof T]: ReturnType<T[K]>;
};

export type ForCreate<T extends { id: string }> = Omit<T, 'id'>;
