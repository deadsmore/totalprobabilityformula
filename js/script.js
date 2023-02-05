let P = Number(prompt(`введите первое число(сколько людей)`))
let A = Number(prompt(`введите второе число(сколько всего людей)`))
let H =[]
for (let i=0;i<A;i++){
    H.push(Number(prompt(`Вероятность`)))
}


function calculateFullProbability(P, A, H) {
    let temp = 0
    for (let i=0;i<H.length;i++){
        temp+=(P*H[i])/A
    }

    temp= (temp/P)/A

    return temp;
}


let vvod = calculateFullProbability(P, A, H);


console.log(vvod);