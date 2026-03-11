bin = input()
decimal = 0
power = len(bin) - 1

for i in bin:
    decimal += int(i) * (2 ** power)
    power -= 1
print(decimal)    