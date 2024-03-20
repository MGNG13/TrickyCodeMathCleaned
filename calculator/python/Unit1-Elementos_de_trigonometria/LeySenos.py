import os
import math as Math


def clear(): return os.system('clear')


clear()


def printTriangle(size, a, b, hip):
    triangleBlankSpace = " "
    triangleEnd = "=="
    print('  '*a + '|\\')
    for triangleIndex in range(0, size):
        triangleBlankSpace += " "
        triangleEnd += "="
        if triangleIndex != 0:
            print((triangleIndex == size / 2 if a+('  '*(a/2)) else '  '*a) +
                  f'|{triangleBlankSpace}\\   {triangleIndex == size / 2 if hip else ""}')
    print('  '*a + f'{triangleEnd}\n{" "*(len(triangleBlankSpace)/2)}   {b}')


def resolve():
    print('\n')
    print('0: Hipotenusa')
    print('1: Cateto desconocido')
    print('2: Teorema de Pitagoras')
    print('\n')

    type = input('tipo => ')
    print('\n')

    try:
        if (type == '0'):
            cA = int(input('b (Cateto Adyacente) => '))
            cO = int(input('a (Cateto Opuesto) => '))

            print('\n')
            #printTriangle(30, cA, cO, Math.sqrt((cA*cA) + (cO*cO)))
            print('\n')

            print(f'h² = √ {cA}² + {cO}²')
            print(f'h² = √ {cA*cA} + {cO*cO}')
            print(f'h² = √ {(cA*cA) + (cO*cO)}')
            print(f'h = {Math.sqrt((cA*cA) + (cO*cO))}')
        elif (type == '1'):
            cX = input('Cateto Conocido => ')
            hip = input('h => ')
            typeC = input('Tipo de Cateto Conocido [ca/co] => ')

            print('\n')
            #printTriangle(30, (typeC == 'ca' if Math.sqrt((hip*hip) - (cX*cX)) else cX), (typeC == 'co' if Math.sqrt((hip*hip) - (cX*cX)) else cX), hip)
            print('\n')

            print(f'x² = √ {hip}² - {cX}²')
            print(f'x² = √ {hip*hip} - {cX*cX}')
            print(f'x² = √ {(hip*hip) - (cX*cX)}')
            print(f'x = {Math.sqrt((hip*hip) - (cX*cX))}')
        elif (type == '2'):
            #printTriangle(30, 'a', 'b', 'hip')
            print('  h² = a² + b²')
            print('\n\n')
            print('  h = √ a² + b²')
            print('  a = √ h² - b²')
            print('  b = √ h² - a²')
    except Exception as error:
        print(f'Exception: {error}')
    finally:
        print('\n')
        if (input('Other? (Boolean expression) => ') == 'true'):
            resolve()


resolve()
