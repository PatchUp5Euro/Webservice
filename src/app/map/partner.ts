export type Partner = {
    id: string;
    name: string;
    lat: number;
    lng: number;
    adress: string;
    rating?: number;
    services: Map<string, Service>;
}

export type Service = {
    description: string;
    price: number;
}