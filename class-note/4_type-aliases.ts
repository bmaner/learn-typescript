// interface Person {
//     name: string;
//     age: number;
// }

// type Person = {
//     name: string;
//     age: number;
// }

var seonghyeon : Person = {
    name: '성현',
    age: 29
}

type MyString = string;

var str: MyString = 'hello world';

type Todo = {id: string; title: string; done: boolean;}

function getTodo(todo: Todo){
    console.log(todo)
}