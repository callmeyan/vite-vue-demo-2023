// ts的使用
// 基础的类型使用
let n: number = 1;
n = 'a'; // 报错 无法将字符串赋值给数字
console.log(n);
function getSum(a: number, b: number): number {
  return a + b;
}
// 泛型的使用
function getFoo<T>(a: number) {
  if (a == 1) return (1 + a) as any as T;
  if (a == 2) return ('' + a) as any as T;
  return false as any as T;
}
// 调用时设置的类型为准
const foo1 = getFoo(1);
const foo2 = getFoo<number>(2);
const foo3 = getFoo<string>(2);

// 自定义类型
class User {
  name = '';
}
const u: User = new User();
// 约束该类型的值 必须有定义的属性
interface Person {
  name: string;
  age?: number; // 问好表示该属性不是必须的
}
const p: Person = {
  name: '',
};
type int = number | 'a' | 'b' | boolean;
let age: int;
age = 1;
age = 'a';
age = 'c'; // 错误
age = true;

enum Gender {
  Male,
  Female,
  Unknown,
}

let g: Gender = Gender.Male;
