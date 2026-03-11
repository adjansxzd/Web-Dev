def power(a, n):
    result = 1
    for _ in range(n):
        result *= a
    return result

# Основная часть программы
a, n = map(float, input().split())
n = int(n)
print(power(a, n))