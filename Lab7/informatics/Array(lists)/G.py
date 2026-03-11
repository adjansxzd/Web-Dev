n = int(input())
a = list(map(int, input().split()))

i = 0
while i < n // 2:
    a[i], a[n - 1 - i] = a[n - 1 - i], a[i]
    i += 1

for x in a:
    print(x, end=" ")