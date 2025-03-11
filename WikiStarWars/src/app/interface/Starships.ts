export interface IAllStarships{    
    count: number;
    next: string;
    previous: string;
    results: IStarships[];
}

export interface IStarships{
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    lenght: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    hyperdrive_rating: string;
    mglt: string;
    starship_class: string;
    pilots: string[];
    films: string[];
    created: string;
    edited: string;
    url: string;
}