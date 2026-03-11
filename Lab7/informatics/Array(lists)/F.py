n = int(input())
a = list(map(int, input().split()))

count = 0
i = 1
while i < n - 1:
    if a[i] > a[i-1] and a[i] > a[i+1]:
        count += 1
    i += 1

print(count)