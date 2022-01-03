// enum Shoes {
//     Nike,
//     Adidas,
// }

enum Shoes {
    Nike = '나이키',
    Adidas = '아디다스',
}

var myShoes = Shoes.Nike;

console.log(myShoes);

//예제

enum Answer {
    Yes = 'Y',
    No = 'N',
}

function askQuestion(answer: Answer) {
    if (answer === Answer.Yes) {
        console.log('정답입니다.');
    }
    if (answer === Answer.No) {
        console.log('오답입니다.');
    }
}

askQuestion(Answer.Yes);
//드롭다운 등에서 목록이 필요한 형태에서 enum을 정의해서 쓰면 된다.
