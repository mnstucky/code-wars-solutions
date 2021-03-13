# https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/python

def order(sentence):
    return " ".join(sorted(sentence.split(), key=lambda word: sorted(word)))
