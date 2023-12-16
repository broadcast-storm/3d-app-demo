// Значения объекта
declare type ValueOf<T> = T[keyof T];

// Значения массива
declare type ValuesOf<T extends Array<unknown>> = T[number];
