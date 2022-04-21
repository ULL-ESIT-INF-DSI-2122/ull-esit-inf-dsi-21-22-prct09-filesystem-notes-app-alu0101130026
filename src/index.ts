/**
 * Clase que implementa el filter de Typescript.
 */
type Numbers = {
    decisionVariables: number[];
    evaluate: () => void;
  }
  

abstract class filter {
    protected list: Numbers[];
  
    constructor(
        protected lista: number[],
        protected maxNumber: number) {
      this.list = [];
    }

    public run() {
        // Population initialisation
        this.initList();
        // Hook
        this.afterInitialisation();
        // Initial population evaluation
        this.evaluateList();
        // Hook
        this.afterEvaluation();

        let currentNumberGenerations = 0;
        while (currentNumberGenerations < this.maxNumber) {
            // Generates the children
             const childPopulation = this.generateAndEvaluateChildList();
            // Hook
             this.afterChildrenGeneration();
            // Selects the fittest individuals from among parents and children
            this.list = this.selectFromParentsAndChildren(childList);
            // Hook
            this.afterSurvivorSelection();
            // New generation performed
            currentNumberGenerations++;
        }
    }


protected evaluatePopulation() {
    console.log('Template: evaluating list');
    this.list.forEach((list) => {
      list.evaluate();
    });
  }

  protected generateAndEvaluateChildPopulation() {
    console.log('Template: generating children');

    const childList: Number[] = [];

    this.list.forEach((list) => {
      const otherIndividual =
        this.list[Math.floor(Math.random() * this.list.length)];

      const [newIndividual, otherNewIndividual] =
        this.crossover(individual, otherIndividual, this.crossoverRate);

      this.mutation(newIndividual, this.mutationRate);
      this.mutation(otherNewIndividual, this.mutationRate);

      newIndividual.evaluate();
      otherNewIndividual.evaluate();

      childPopulation.push(newIndividual, otherNewIndividual);
    });

    return childPopulation;
  }
}