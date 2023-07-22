// Напишите функцию, которая принимает:
// 1) некие данные предполагаемо типа Т, но возможно не со всеми полями
// 2) функцию-дополнятор, которая принимает такие штуки как из п.1, 
//    а возвращает полноценный объект типа Т
// ... как вы поняли, саму функцию писать не надо :) 
// нас интересует только ее сигнатура.
function completeData<T>(data: Partial<T>, completer: (data: Partial<T>) => T): T {
    return completer(data);
  }
  

// Более сложный вариант:
// Напишите функцию, которая принимает:
// 1) некие данные предполагаемо типа Т (у которого поле id: string), 
//    но возможно без поля id
// 2) функцию-дополнятор, которая принимает такие штуки как из п.1, 
//    а возвращает полноценный объект типа Т
// ... как вы поняли, саму функцию писать не надо :) 
// нас интересует только ее сигнатура.
function completeDataWithId<T extends { id: string }, U extends T>(data: Omit<T, 'id'>, completer: (data: T) => U): U {
    const completeData = { ...data, id: '' } as T;
    return completer(completeData);
  }
  
  

// Последняя задача:
// Напишите сигнатуру функции, которая принимает
// - некий класс
// - количество
// ...а возвращает массив экземпляров этого класса

class Rectangle {
    w!: number;
    h!: number;
}
class Circle {
    radius!: number;
}

function createArrayOfShapes<T>(Shape: { new (): T }, count: number): T[] {
    const arr: T[] = [];
    for (let i = 0; i < count; i++) {
      const shape = new Shape();
      arr.push(shape);
    }
    return arr;
  }

// сделайте норм сигнатуру тут.
// НЕТ, Rectangle|Circle это не вариант, надо сделать универсальную функцию 
function createArrayOfObjects<T>(SomeClass: { new(): T }, count: number): T[] {
    const arr: T[] = [];
    for (let i = 0; i < count; i++) {
      const obj = new SomeClass();
      arr.push(obj);
    }
    return arr;
  }

  const rectangles = createArrayOfObjects(Rectangle, 10);
  console.log(rectangles); // [ Rectangle { w: undefined, h: undefined }, Rectangle { w: undefined, h: undefined }, ..., Rectangle { w: undefined, h: undefined } ]
  
  const circles = createArrayOfObjects(Circle, 20);
  console.log(circles); // [ Circle { radius: undefined }, Circle { radius: undefined }, ..., Circle { radius: undefined } ]