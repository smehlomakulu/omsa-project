export class CountryDetails {
    name: string;
    capital: string;
    population: number;
    flag: string;

    constructor(name: string, capital: string,
                population: number, flag: string) {
        this.name = name;
        this.capital = capital;
        this.population = population;
        this.flag = flag;
    }
}