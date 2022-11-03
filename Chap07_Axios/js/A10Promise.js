
function sleep(ms) {
    const wakeUp = Date.now() + ms;
    while (Date.now() < wakeUp) { }
};

function normalFunc() {
    console.log('start');

    sleep(1000);

    console.log('end');
}
// normalFunc();
console.log('');

let result = 0;
function one() {
    console.log('---------- START -----------');

    setTimeout(() => {
        result = 1000;
        console.log('1차 처리완료', result);

        setTimeout(() => {
            result = result + 500;
            console.log('2차 처리완료', result);
        }, 1500);
    }, 1000);

    console.log('---------- END -----------');
}
// one();
// console.log('one 종료', result);



function two(callback) {
    console.log('---------- START -----------');

    setTimeout(() => {
        result = 1000;
        // console.log('1차 처리완료', result);
        callback(result);
    }, 1000);

    console.log('---------- END -----------');
}

// two(value => {
//     console.log('받은 값', value);
//     console.log('1차 처리완료', result);
// })


function three(ms) {
    console.log('---------- START -----------');
    // resolve, reject가 callback 함수
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ms < 1000) reject('시간은 1초 이상이어야 합니다');
            result = 1000;
            resolve(result);
            /*
            const resolve = data => {
                console.log('데이터 가져오기 완료', data);
            }
            */
        }, ms);
    });
    console.log('---------- END -----------');

    return promise;
}

three(500)
    // resolve에 전달할 함수를 정의 (성공시 전달할 함수)
    .then(data => {
        console.log('데이터 가져오기 완료', data);
    })
    // reject에 전달할 함수를 정의 (실패시 전달할 함수)
    .catch(error => {
        console.log("에러 발생", error)
    })



console.log('---------- 프로그램 종료 -----------');