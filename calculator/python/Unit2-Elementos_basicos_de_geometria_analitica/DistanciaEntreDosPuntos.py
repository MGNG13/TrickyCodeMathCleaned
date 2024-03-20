import os
import math as Math


def clear(): return os.system('clear')


clear()


def resolveDist():
    print("\n")
    x2 = int(input("Ingresa X2 => "))
    x1 = int(input("Ingresa X1 => "))
    y2 = int(input("Ingresa Y2 => "))
    y1 = int(input("Ingresa Y1 => "))
    print("")
    print(
        f'√({x2}-{"("+x1+")" if x1 < 0 else x1})² + ({y2}-{"("+y1+")" if y1 < 0 else y1})²')
    print(
        f'√({x2-("("+x1+")" if x1 < 0 else x1)}² + {y2-("("+y1+")" if y1 < 0 else y1)}²)')
    print(f'√{Math.pow(x2-("("+x1+")" if x1 < 0 else x1), 2)} + {Math.pow(y2-("("+y1+")" if y1 < 0 else y1), 2)}')
    result = Math.sqrt(Math.pow(x2-("("+x1+")" if x1 < 0 else x1),
                       2) + Math.pow(y2-("("+y1+")" if y1 < 0 else y1), 2))
    print(f'√{Math.pow(x2-("("+x1+")" if x1 < 0 else x1), 2) + Math.pow(y2-("("+y1+")" if y1 < 0 else y1), 2)} {"≈" if len(str(result).split(".", -1))-1 >= 1 else "="} {result}')
    print(f"")
    return result


def getInfo():
    print("0: Procedimiento")
    print("1: Perimetro")
    print("2: Colineales (Misma linea recta)")
    print("3: Obtener ABC")

    print("\n")
    type = int(input("Elige el procedimiento => "))

    if (type == 0):
        resolveDist()
    elif (type == 1 or type == 2):
        valores = []
        maximo = int(input("Ingresa la cantidad de valores => "))

        for i in range(0, maximo):
            print(resolveDist())

        if (type == 1):
            print(f"P = {' + '.join(valores)}")
            valorFinal = 0
            for index in valores:
                valorFinal += valores[index]
            print(f"P = {valorFinal}")
        elif (type == 2):
            valorFinal = 0
            valores = valores.sort()
            for index in valores:
                if (index == len(valores)-1):
                    break
                valorFinal += valores[index]
            print("Al parecer "+(float(valorFinal).toPrecision(4+(len((valorFinal.toFixed()+'').split('', -1)) > 1 if len(valorFinal.toFixed() +
                  ''.split('', -1))-1 else 0)) == float(valores[len(valores)-1]).toPrecision(4) if "es colineal." else "no es colineal."))
            print("\n"+" ~ ".join(valores))
    elif (type == 3):
        print("\n~ Ejemplo: -7 30\n")
        A = input("Escribe A => ").split(' ', -1)
        B = input("Escribe B => ").split(' ', -1)
        C = input("Escribe C => ").split(' ', -1)
        print("\n")
        print(f"AB= [{B[0]}, {A[0]}] [{B[1]}, {A[1]}]")
        print(f"AC= [{C[0]}, {A[0]}] [{C[1]}, {A[1]}]")
        print(f"BC= [{C[0]}, {B[0]}] [{C[1]}, {B[1]}]")

    print("\n")

    if (input("Other? (Boolean expression) => ") == "true"):
        print("\n~~~~~~~~~~~~~~~~ OTRO ~~~~~~~~~~~~~~~~")
        getInfo()


getInfo()
