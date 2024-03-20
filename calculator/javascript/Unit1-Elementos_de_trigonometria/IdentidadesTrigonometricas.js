const input = (I) => {
    try{
        return require('prompt-sync')()(I);
    } catch(ignored){
        sleep(1000);
        return prompt(I);
    }
}

console.clear();

const DICTIONARY = {
    'Sen()': 'Sen() / 1',
    'Cosc()': 'Sen() / Sen()',
    'Sec()': 'Sen() / Cos()',
    'Cot()': 'Cos() / Sen()',
    'tan()': 'Sen() / Cos()',
    'Cot()': 'Cos() / Sen()',
}

function resolve() {
    console.log('\n');
    console.log('0: FORMULAS (Sin verificar)');
    console.log('1: DICTIONARY');
    console.log('\n');

    const type = input('tipo => ');
    console.log('\n');

    try {
        if (type === '0') {
            console.log('Ⅰ: Sen²x + Cos²x = 1');
            console.log('ⅠⅠ: tan²x + 1 = Sen²x');
            console.log('ⅠⅠⅠ: 1 + Cot²x = Csc²x');
        }
        else if (type === '1')
            console.log(JSON.stringify(DICTIONARY, null, 4));
    } catch (error) {
        console.log(`Exception: ${error}`);
    } finally {
        console.log('\n');
        if (input('Other? (Boolean expression) => ') === 'true')
            resolve();
    }
}

resolve();
