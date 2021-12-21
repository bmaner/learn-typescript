//함수의 파라미터에 타입을 정의하는 방식

// function sum(a: number, b: number) {
//     return a + b;
// }

//함수의 반환 값에 타입을 정의하는 방식
function 더하기(): number {
    return 10;
}

// 함수에 타입의 정의하는 방식
// function sum(a: number, b: number): number {
//     return a + b;
// }

sum(10, 20); // -> 파라미터를 제한하는 특성

//함수의 옵셔널 파라미터
function log(a: string, b?: string) {}

log('hello world');
log('hello ts', 'abc');
// log('hello world', new person());  -> 인자마다 다른 타입을 쓰면은 함수를 다르게 정의해야할까? No!
