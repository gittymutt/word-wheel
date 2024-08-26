import re   
infile = open('word-list.txt', 'r')
Lines = infile.readlines()

word_list = []
for line in Lines:
    word_list.append(re.split(" ", line.strip())[0])
# print(word_list)

json = "wordList = "
outfile = open('wordlist-json.txt', 'w')
outfile.writelines(json)
outfile.close()
