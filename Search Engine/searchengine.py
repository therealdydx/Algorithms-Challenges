from sys import argv

cases = int(input()) # get the raw input

values = []

for case in range(cases):

    result = list(map(int,input().split()))

    N = result[0] # where N is number of items in DB
    Q = result[1] # where Q is total number of queries

    # next N lines will contain an item name
    dictionary = {}
    count = 0

    while count < N:
        data_input = str(input())
        data = data_input.split()
        # so there will be a list like ['Yap', 'Tzi', 'Richard']
        # we can create a list like this ['Yap', 'Tzi', 'Richard', 'Yap Tzi', 'Tzi Richard', 'Yap Tzi Richard']

        dataset = []
        dataset.extend(data)
        dataset.append(data_input)
        length = len(data)

        # pop the last character
        x = 0 # this is for the first index value
        data_string = data_input
        string = ""

        while x < length - 1:
            y = 0

            data_word = data_string

            while y < length - 1: # this is to strip the last space

                # calculate the number to be ripped off the end of the word
                number2 = length - y - 1
                word_length = 0 - len(data[number2]) - 1# including space

                data_word = data_word[:word_length]

                if data_word is string:
                    break

                if data_word not in dataset:
                    dataset.append(data_word)

                y = y + 1

            # now we deduct the first word off the name
            number1 = len(data[x]) + 1 # so that this string can be stripped
            data_string = data_string[number1:] #strips off the first value off the name
            data_word = data_string

            if data_string not in dataset:
                dataset.append(data_string)

            x = x + 1

        # start counting for the values
        for datas in dataset:
            if datas in dictionary:
                dictionary[datas] += 1
            else:
                dictionary[datas] = 1

        count += 1

    # now check if the value exists inside the dataset
    counts = 0
    casevalue = case + 1

    kases = "Case " + str(casevalue) + ":"
    values.append(kases)

    while counts < Q:

        valuecount = 0
        query_input = str(input())

        # start counting for the values
        if query_input in dictionary:
            valuecount = dictionary[query_input]
            values.append(valuecount)
        else:
            values.append(0)

        counts += 1

for val in values:
    print(val)