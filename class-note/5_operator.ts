// function logMessage(value:any){
//     console.log(value)
// }

// logMessage('hello');
// logMessage(100)

var dnaiel: string | number ;

function logMessage(value: string | number){
    if(typeof value === 'number'){
        value.toLocaleString();
    }
    if(typeof value === 'string'){
        value.toString();
    }
    throw new TypeError('value must be string or number') 
    //  타입 가드 : 특정 타입으로 타입의 범위를 좁혀나가는(필터링 하는) 과정
}

logMessage('hello');
logMessage(100)

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function askSomeone(someone: Developer | Person){
    someone.name
    someone.skill
    someone.age
}

// 두개의 인터페이스에 공통되는 속성과 다른 속성이 있다. 그리고 유니온 타입으로 두가지 인터페이스를 엮어줬을 때에는 공통되는 속성만을 불러올 수 있음을 명심하자.