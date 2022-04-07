


def factorial(n):
    fact = 1
    for i in range(n, 0, -1):
        fact = fact * i
    return fact

def factorial2(n, fact=1):
    if n == 1: return fact
    fact = fact * n
    return factorial2(n - 1, fact)

print(factorial2(2))