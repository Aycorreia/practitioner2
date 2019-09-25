// import helpers from '../helpers'
const helpers = require ('../helpers2')

test('Suma function return 3 when we pass 2 and 1',function (){
    //prepare(opcional)

    //execute
    const resultat = helpers.suma(2,1)

    //comprovar/assert/expect
    expect(resultat).toBe(3)
})

//TDD -> Test Driven Development

test('Multiplica function return 50 when we pass 5 and 10', () =>{
    //execute
    const resultat = helpers.multiple(5,10)

    //comprovar/assert/expect
    expect(resultat).toBe(50)
})




// test('Suma function return 3 when we pass 2 and 1',() => {

// })

// // const f1 = function (){

// // }
// test('Suma function return 3 when we pass 2 and 1', f1)