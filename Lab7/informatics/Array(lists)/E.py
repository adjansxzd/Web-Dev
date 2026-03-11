n = int(input())
a = list(map(int, input().split()))

i = 1
found = False
while i < n:
    if a[i] * a[i-1] > 0:
        found = True
        break
    i += 1

if found:
    print("YES")
else:
    print("NO")