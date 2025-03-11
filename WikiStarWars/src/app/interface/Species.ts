export interface ISpecies {
    count: number;
    next: string;
    previous: null;
    results: ISpecie[];
}

export interface ISpecie {
    name: string;
    classification: string;
    designation: string;
    average_height: string;
    skin_colors: string;
    hair_colors: string;
    eye_colors: string;
    average_lifespan: string;
    homeworld: null | string;
    language: string;
    people: string[];
    films: string[];
    created: string;
    edited: string;
    url: string;
}