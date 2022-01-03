// function logMessage(value:any){
//     console.log(value)
// }

// logMessage('hello');
// logMessage(100)

var dnaiel: string | number | boolean;

function logMessage(value: string | number) {
    if (typeof value === 'number') {
        value.toLocaleString();
    }
    if (typeof value === 'string') {
        value.toString();
    }
    throw new TypeError('value must be string or number');
    //  타입 가드 : 특정 타입으로 타입의 범위를 좁혀나가는(필터링 하는) 과정
}

logMessage('hello');
logMessage(100);

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

//실무에서는 인터섹션보다는 유니온의 형태를 더 많이 사용한다.

// function askSomeone(someone: Developer | Person) {
//     someone.name;
//     someone.skill;
//     someone.age;
// }

// askSomeone({ name: 'danielPark', skill: 'web development' });
// askSomeone({ name: '성현', age: 30 });

function askSomeone(someone: Developer & Person) {
    //intersection
    someone.name;
    someone.skill;
    someone.age;
}

askSomeone({ name: 'danielPark', skill: 'web development', age: 30 }); // 인터섹션이기 떄문에 디벨롭퍼의 타입과 퍼슨의 타입까지 모두 합한 객체를 넘겨야 한다.

// 두개의 인터페이스에 공통되는 속성과 다른 속성이 있다. 그리고 유니온 타입으로 두가지 인터페이스를 엮어줬을 때에는 공통되는 속성만을 불러올 수 있음을 명심하자.

var capt: number & boolean & string;
// 위 capt에 마우스를 가져다 대면 never라고 뜬다. 타입이 숫자이면서 불린이면서 스트링인 것은 불가하기 때문.
