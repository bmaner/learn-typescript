// JS 문자열 선언

var str = 'hello';

// TS 문자열 선언
var str: string = 'hello';

// TS 숫자
let num: number = 10;

// TS 배열
// let arr: Array<number> = [1, 2, 3];
let heroes: Array<string> = ['Capt', 'Thor', 'Hulk'];
// 배열은 아래와 같이 literal으로도 표현 할 수 있다.
let items: number[] = [1, 2, 3];

// TS 튜플 : 인덱스별로 타입을 지정하는 것
let address: [string, number] = ['gangnam', 2]; //number 타입이 들어올 자리에 문자열이 들어와서 빨간 밑줄이 생기는 것을 확인할 수 있다.

// TS 객체
let obj: object = {};
// let person: object = {
//     name: 'capt',
//     age: 100,
// };
let person: { name: string; age: number } = {
    name: 'thor',
    age: 1000,
};

// TS 진위값
let show: boolean = true;
