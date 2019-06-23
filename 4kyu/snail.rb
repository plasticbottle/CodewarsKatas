def snail(array)
result = [];
blocker = -1;
arrayLength = array.length;

if array[0][0].nil? != true 
    puts 'integer';
    result = Array.new((arrayLength * arrayLength), 0);
    x = 0;
    y = 0;
    a = 1;
    b = 0;
    i = 0;
    while i<result.length do 
        result[i] = array[y][x];
        array[y][x] = blocker;
        x += a;
        y += b;
        if (a != 0 && (x < 0 || x >= arrayLength || array[y][x] == blocker)) 
           x += -a; 
           y += a;
           b = a; 
           a = 0;
        elsif (b != 0 && (y < 0 || y >= arrayLength || array[y][x] == blocker)) 
           x += -b; 
           y += -b;
           a = -b; 
           b = 0;
        else
        end
        i += 1
    end
    end
return result;
end

//for problem description go to snail.js
