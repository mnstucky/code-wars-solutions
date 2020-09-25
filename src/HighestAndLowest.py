# https://www.codewars.com/kata/554b4ac871d6813a03000035/train/python

def high_and_low(numbers):
    arr = numbers.split(" ")
    arr = list(map(lambda num: int(num), arr))
    return f"{max(arr)} {min(arr)}"