const crossover = (chromosome1, chromosome2, index) => [chromosome1.slice(0,index) + chromosome2.slice(index), chromosome2.slice(0,index) + chromosome1.slice(index)];
//https://www.codewars.com/kata/567d71b93f8a50f461000019/
//crossover('111000', '000110', 3) should return ['111110', 000000]
