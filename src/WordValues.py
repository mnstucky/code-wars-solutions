def name_value(my_list):
    values = []
    multiple = 1
    for strings in my_list:
        string_value = 0
        for letter in strings:
            if letter.isalpha():
                string_value += ord(letter) - ord('a') + 1
        values.append(string_value * multiple)
        multiple += 1
    return values