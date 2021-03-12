# https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/python

def count(string):
    count = dict()
    for char in string:
        if char not in count:
            count[char] = 1
        else:
            count[char] = count[char] + 1
    return count
