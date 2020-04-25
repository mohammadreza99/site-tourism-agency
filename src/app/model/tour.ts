export class Price {
    public euro: number;
    public tooman: number;
}

export class Date {
    public startShamsi: string;
    public startMiladi: string;
    public endShamsi: string;
    public endMiladi: string;
}
export class DestinationCity {
    public nights: number;
    public city: string;
}
export class Plan {
    public title: string;
    public subTitle: string;
    public description: string;
}
export class Comment {
    public owner: string;
    public img: string;
    public date: string;
    public rate: number;
    public likes: number;
    public dislikes: number;
    public text: string;
    public replayText: string;
}

export class Tour {
    public id: string;
    public img: string;
    public code: string;
    public description: string;
    public destinationCountries: string[];
    public destinationCities: DestinationCity[];
    public date: Date;
    public vehicle: string;
    public gallery: string[];
    public days: number;
    public category: string;
    public services: string[];
    public adult: Price;
    public child4To12: Price;
    public child2To4: Price;
    public child0To2: Price;
    public plans: Plan[];
    public comments: Comment[];
    public class: string;
    public hotelRate: number;
    public running: boolean;
    public noruzi: boolean;
    constructor() {
        this.running = false;
    }
}