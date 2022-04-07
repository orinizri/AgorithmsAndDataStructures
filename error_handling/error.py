
class FactorialArgumentError(Exception):
    def __init__(self, args):
        self._args = args
    def __str__(self):
        return "Provided argument %s is not positive integer." % self._args
    def get_arg(self):
        return self._args



def factorial(n):
    if n < 0:
        # raise ValueError('Value is non-positive number.')
        raise FactorialArgumentError(n)
        
    fact = 1
    for i in range(n, 0, -1):
        fact = fact * i
    return fact

print(factorial(-3))