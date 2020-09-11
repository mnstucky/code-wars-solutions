def get_average(marks):
    accumulator = 0
    for grade in marks:
        accumulator += grade
    return int(accumulator / len(marks))