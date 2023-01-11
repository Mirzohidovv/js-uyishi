
const partyList = {
    meat: {
        info: 'Mol gosht 5 kg', weight: 5, price: 500000,
    },
    potato: {
        info: 'Qizil kartoshka 10 kg', weight: 10, price: 100000,
    },
    tomato: {
        info: 'Pomidor 4 kg', weight: 4, price: 80000,
    },
    cucumber: {
        info: 'Podiring 3 kg', weight: 3, price: 30000,
    },
    oil: {
        info: 'Pista Yogi 3L', amount: 1, price: 70000,
    },

    cola: {
        info: 'Coca-cola 1.5 L', weight: 6, price: 12000,
    },
    fanta: {
        info: 'Fanta 1.5 l', weight: 6, price: 12000,
    }

}

console.log(partyList.cola);

let totalPrice = 0
let peopleNum = 30
for (const key in partyList) {
    totalPrice += partyList[key].price * (partyList[key].weight ? partyList[key].weight : partyList[key].amount)
}


console.log(`Umumiy Choyhona harajati: ${totalPrice} so'm
Har bir kishidan: ${Math.ceil(totalPrice / peopleNum)} so'm dan
`);

