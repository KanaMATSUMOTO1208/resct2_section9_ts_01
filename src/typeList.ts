/* eslint-disable*/

/** TypeScriptの基本の型 */
let bool: boolean = true;

//number型
let num: number = 0;

//string型
let str: string = "A";

//Array 配列
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [01, 1, 2];

//any
let any1: any = false;

// void 関数に紐づく型
const funkA = (): void => {
  const test = "TEST";
};

// null
let null1: null = null;

// undefined
let undefined1: undefined = undefined;

// object
let obj1: object = {};
let obj2: { id: number; name: string } = { id: 0, name: "AAA" };
