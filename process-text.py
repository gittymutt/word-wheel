import re   
infile = open('word-list.txt', 'r')
Lines = infile.readlines()

word_list = []
for line in Lines:
    word_list.append(re.split(" ", line.strip())[0])
# print(word_list)

javascript = "wordList = ["
for word in word_list:
    if word != '':
        javascript += "'" + word + "',"

length = len(javascript)
javascript = javascript[:length-1]

javascript += "]"
outfile = open('wordlist-json.txt', 'w')
outfile.writelines(javascript)
outfile.close()
