//https://www.codewars.com/kata/567b21565ffbdb30e3000010/
//solution:
const select = (population, fitnesses) => {
var result = 0;
var total = fitnesses[0];

for(var i = 1; i < fitnesses.length; i++) {
    total = total + fitnesses[i];
    if(Math.random() <= (fitnesses[i]/total)) {
        result = population[i];
    }
}
return result;
};

//The "Roulette wheel selection", also known as "Fitness proportionate selection", 
//is a genetic operator used in genetic algorithms for selecting potentially useful solutions for recombination.
