interface User {
    age: number;
    name: string;
}

//변수에 인터페이스 활용
 
var seho: User = {
    age: 33,
    name: '세호'
}

//함수에 인터페이스 활용(많은 경우에 함수에서 interface가 쓰인다.)

function getUser(user: User){
    console.log(user)
}

const capt = {
    name: '캡틴',
    age: 100
}

getUser(capt);

// 프론트엔드 프레임워크를 썼을 때 interface, ts가 가장 많이 빛을 발하는 구간이 api를 호출 해와서 api의 데이터 모양이 어떻다는 것을 interface로 정의하고 활용하는 구간이 가장 많기 때문에 함수의 인자에 어떻게 쓰면되는지 기억하면 좋다.
// 바로 위의 예시를 말하는 것이지

// -----------------------

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction{
    (a: number, b: number): number;
}

var sum: SumFunction;

sum = function(a:number, b:number): number{
    return a + b;
}
//함수의 구조를 어떻게 잡자고 정할때 이렇게 interface로 정의할 수 있습니다. 

// -------------------

// 인덱싱
interface StringArray {
    [index: number]: string;
}

var arr: StringArray = ['a', 'b', 'c'];

// arr[0] = 10;

// 딕셔너리(Dictionary) 패턴

interface StringRegexDictionary{
    [key:string]: RegExp;
}

var obj:StringRegexDictionary = {
    // sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}

// obj['cssFile'] = 'a';

Object.keys(obj).forEach(function(value){
    // value에 마우스를 가져다대면 string이라고 정의되어있음을 알 수 있습니다. 
})

// -----------------------------------

// 인터페이스 확장
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person {
    language: string;
}