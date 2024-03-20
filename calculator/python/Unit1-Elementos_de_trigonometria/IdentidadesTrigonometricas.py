import os


def clear(): return os.system('clear')


clear()

DICTIONARY = {
    'Sen()': 'Sen() / 1',
    'Cosc()': 'Sen() / Sen()',
    'Sec()': 'Sen() / Cos()',
    'Cot()': 'Cos() / Sen()',
    'tan()': 'Sen() / Cos()',
    'Cot()': 'Cos() / Sen()',
}


def resolve():
    print('\n')
    print('0: FORMULAS (Sin verificar)')
    print('1: DICTIONARY')
    print('\n')

    type = input('tipo => ')
    print('\n')

    try:
        if (type == '0'):
            print('Ⅰ: Sen²x + Cos²x = 1')
            print('ⅠⅠ: tan²x + 1 = Sen²x')
            print('ⅠⅠⅠ: 1 + Cot²x = Csc²x')
        elif (type == '1'):
            print(DICTIONARY)
    except Exception as error:
        print(f"Exception: {error}")
    finally:
        print('\n')
        if (input('Other? (Boolean expression) => ') == 'true'):
            resolve()


resolve()
