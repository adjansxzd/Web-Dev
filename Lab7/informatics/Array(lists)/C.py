n = int(input())
a = list(map(int, input().split()))

count = 0
i = 0
while i < n:
    if a[i] > 0:
        count = count + 1
    i = i + 1

print(count)