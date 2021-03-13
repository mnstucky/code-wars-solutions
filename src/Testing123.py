# https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/python

def number(lines):
    formatted_lines = []
    line_number = 1
    for line in lines:
        formatted_lines.append(str(line_number) + ": " + line)
        line_number += 1
    return formatted_lines
