# https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/python

def filter_list(l):
    result = []
    for ele in l:
        if isinstance(ele, int):
            result.append(ele)
    return result