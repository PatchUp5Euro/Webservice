export type Partner = {
    id: string;
    name: string;
    lat: number;
    lng: number;
    adress: string;
    rating?: number;
    ratingCount?: number;
    image?: string;
    description?: string;
    openingHours?: string;
    phone?: string;
    email?: string;
    services: Map<string, Service>;
}

export type Service = {
    description: string;
    price: number;
}