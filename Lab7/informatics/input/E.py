v = int(input())
t = int(input())
pos = (v * t) % 109
if pos < 0:
    pos += 109
print(pos)    
