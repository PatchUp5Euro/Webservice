import { Partner, Service } from "./partner";

export function getExampleData(): Partner[] {
    return [
        {
            id: "1",
            name: "Schneiderei Mustermann",
            lat: 47.733333,
            lng: 10.316667,
            rating: 3.2,
            adress: "Musterstraße 2, 12345 Musterstadt",
            image: "/window.svg",
            services: new Map<string, Service>([
                [
                    "Socken flicken",
                    {
                        description:
                            "Die Socken werden maschinell schnell zusammengeflickt.",
                        price: 4,
                    },
                ],
                [
                    "Hose kürzen",
                    {
                        description:
                            "Hosen werden professionell gekürzt und gesäumt.",
                        price: 12,
                    },
                ],
            ]),
        },
        {
            id: "2",
            name: "Schreinerei Müller",
            lat: 47.719008,
            lng: 10.297393,
            rating: 4.5,
            adress: "Müllerstraße 1, 12345 Musterstadt",
            image: "/file.svg",
            services: new Map<string, Service>([
                [
                    "Stuhl reparieren",
                    {
                        description:
                            "Holzstühle werden stabil verleimt und aufgearbeitet.",
                        price: 25,
                    },
                ],
                [
                    "Tisch abschleifen",
                    {
                        description:
                            "Tische werden abgeschliffen und neu versiegelt.",
                        price: 40,
                    },
                ],
            ]),
        },
        {
            id: "3",
            name: "Fahrradservice RadlProfi",
            lat: 47.726,
            lng: 10.31,
            rating: 4.9,
            adress: "Radweg 5, 12345 Musterstadt",
            image: "/globe.svg",
            services: new Map<string, Service>([
                [
                    "Fahrradreifen wechseln",
                    {
                        description:
                            "Schneller Wechsel von Fahrradreifen inkl. Material.",
                        price: 18,
                    },
                ],
                [
                    "Kette ölen",
                    {
                        description: "Fahrradkette wird gereinigt und geölt.",
                        price: 6,
                    },
                ],
            ]),
        },
        {
            id: "4",
            name: "Elektro Reparatur BlitzFix",
            lat: 47.73,
            lng: 10.32,
            rating: 4.1,
            adress: "Blitzstraße 10, 12345 Musterstadt",
            image: "/next.svg",
            services: new Map<string, Service>([
                [
                    "Toaster reparieren",
                    {
                        description:
                            "Defekte Toaster werden geprüft und repariert.",
                        price: 22,
                    },
                ],
                [
                    "Kabel tauschen",
                    {
                        description: "Austausch von defekten Stromkabeln.",
                        price: 10,
                    },
                ],
            ]),
        },
        {
            id: "5",
            name: "Schuhmacherei SohleGut",
            lat: 47.735,
            lng: 10.325,
            rating: 3.8,
            adress: "Sohlengasse 3, 12345 Musterstadt",
            image: "/vercel.svg",
            services: new Map<string, Service>([
                [
                    "Absatz erneuern",
                    {
                        description:
                            "Schuhabsätze werden erneuert und verstärkt.",
                        price: 15,
                    },
                ],
                [
                    "Schuhe putzen",
                    {
                        description:
                            "Professionelle Schuhreinigung und Pflege.",
                        price: 8,
                    },
                ],
            ]),
        },
        {
            id: "6",
            name: "Nähatelier Schneiderfee",
            lat: 47.728,
            lng: 10.312,
            rating: 4.7,
            adress: "Feenweg 7, 12345 Musterstadt",
            image: "/window.svg",
            services: new Map<string, Service>([
                [
                    "Reißverschluss ersetzen",
                    {
                        description:
                            "Defekte Reißverschlüsse werden fachgerecht ersetzt.",
                        price: 14,
                    },
                ],
                [
                    "Knopf annähen",
                    {
                        description:
                            "Verlorene Knöpfe werden schnell und stabil angenäht.",
                        price: 3,
                    },
                ],
            ]),
        },
        {
            id: "7",
            name: "Computerhilfe IT-Fix",
            lat: 47.732,
            lng: 10.318,
            rating: 4.3,
            adress: "Pixelstraße 8, 12345 Musterstadt",
            image: "/file.svg",
            services: new Map<string, Service>([
                [
                    "Laptop reinigen",
                    {
                        description: "Innen- und Außenreinigung von Laptops.",
                        price: 20,
                    },
                ],
                [
                    "Software installieren",
                    {
                        description:
                            "Installation und Einrichtung von Software.",
                        price: 15,
                    },
                ],
            ]),
        },
        {
            id: "8",
            name: "Uhrmacher Zeitwert",
            lat: 47.737,
            lng: 10.328,
            rating: 4.8,
            adress: "Zeitgasse 2, 12345 Musterstadt",
            image: "/globe.svg",
            services: new Map<string, Service>([
                [
                    "Batterie wechseln",
                    {
                        description:
                            "Uhrenbatterien werden schnell gewechselt.",
                        price: 9,
                    },
                ],
                [
                    "Armband kürzen",
                    {
                        description:
                            "Uhrenarmbänder werden individuell angepasst.",
                        price: 7,
                    },
                ],
            ]),
        },
        {
            id: "9",
            name: "Polsterei Sitzkomfort",
            lat: 47.721,
            lng: 10.299,
            rating: 4.0,
            adress: "Komfortweg 4, 12345 Musterstadt",
            image: "/next.svg",
            services: new Map<string, Service>([
                [
                    "Sessel neu beziehen",
                    {
                        description: "Sessel werden mit neuem Stoff bezogen.",
                        price: 60,
                    },
                ],
                [
                    "Polster reinigen",
                    {
                        description:
                            "Professionelle Reinigung von Polstermöbeln.",
                        price: 25,
                    },
                ],
            ]),
        },
        {
            id: "10",
            name: "Handywerkstatt SmartFix",
            lat: 47.734,
            lng: 10.322,
            rating: 4.6,
            adress: "Handyallee 12, 12345 Musterstadt",
            image: "/vercel.svg",
            services: new Map<string, Service>([
                [
                    "Display tauschen",
                    {
                        description:
                            "Smartphone-Displays werden schnell ersetzt.",
                        price: 70,
                    },
                ],
                [
                    "Akku wechseln",
                    {
                        description:
                            "Austausch von Handyakkus für viele Modelle.",
                        price: 30,
                    },
                ],
            ]),
        },
        {
            id: "11",
            name: "Schneiderei SchnellFix",
            lat: 47.736,
            lng: 10.315,
            rating: 4.2,
            adress: "Nadelweg 11, 12345 Musterstadt",
            image: "/window.svg",
            services: new Map<string, Service>([
                [
                    "Socken flicken",
                    {
                        description:
                            "Schnelles Flicken von Socken mit moderner Technik.",
                        price: 5,
                    },
                ],
                [
                    "Hose kürzen",
                    {
                        description: "Hosen werden exakt auf Maß gekürzt.",
                        price: 10,
                    },
                ],
            ]),
        },
        {
            id: "12",
            name: "Nähstube Fadenlauf",
            lat: 47.738,
            lng: 10.319,
            rating: 3.9,
            adress: "Fadenstraße 12, 12345 Musterstadt",
            image: "/file.svg",
            services: new Map<string, Service>([
                [
                    "Socken flicken",
                    {
                        description:
                            "Handgenähtes Flicken für empfindliche Socken.",
                        price: 6,
                    },
                ],
                [
                    "Knopf annähen",
                    {
                        description: "Knöpfe werden farblich passend angenäht.",
                        price: 2,
                    },
                ],
            ]),
        },
        {
            id: "13",
            name: "Textilservice Stoffreich",
            lat: 47.734,
            lng: 10.312,
            rating: 4.8,
            adress: "Stoffgasse 13, 12345 Musterstadt",
            image: "/globe.svg",
            services: new Map<string, Service>([
                [
                    "Socken flicken",
                    {
                        description:
                            "Fachmännisches Flicken mit Qualitätsgarn.",
                        price: 7,
                    },
                ],
                [
                    "Reißverschluss ersetzen",
                    {
                        description: "Reißverschlüsse werden schnell ersetzt.",
                        price: 13,
                    },
                ],
            ]),
        },
        {
            id: "14",
            name: "Atelier Nadel & Faden",
            lat: 47.731,
            lng: 10.317,
            rating: 4.0,
            adress: "Atelierweg 14, 12345 Musterstadt",
            image: "/vercel.svg",
            services: new Map<string, Service>([
                [
                    "Socken flicken",
                    {
                        description:
                            "Traditionelles Flicken mit Liebe zum Detail.",
                        price: 5,
                    },
                ],
                [
                    "Hose kürzen",
                    {
                        description: "Hosen werden individuell angepasst.",
                        price: 11,
                    },
                ],
            ]),
        },
    ];
}
