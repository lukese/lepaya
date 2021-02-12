import words from 'random-words';
import Randoma from 'randoma';
import moment from 'moment';

export class CompanyGenerator {
    public randomizer: Randoma
    private startRange: Date;
    private endRange: Date;

    constructor() {
        this.randomizer = new Randoma({seed: 10});
        this.startRange = new Date(2021,2,1);
        this.endRange = new Date(2021,2,6);
    }

    getCompanies(skills: Array<string>): Array<object> {
        let generatedOffers: object[] = [];

        // Add 3 random dated offers
        for (let i = 0; i < 3; i++) {
            generatedOffers.push(this.getOffer(generatedOffers, skills, true));
        }

        // Add 2 offers with same date
        for (let i = 0; i < 2; i++) {
            generatedOffers.push(this.getOffer(generatedOffers, skills, false));
        }

        return generatedOffers;
    }

    getOffer(generatedOffers: Array<object>, skills: Array<string>, randomDates: boolean) {
        let startDate = randomDates ? new Date(2021, 3, 1) : this.randomizer.dateInRange(this.startRange, this.endRange);
        let endDate = randomDates ? new Date(2021, 3, 6) : moment(startDate).add(5, 'd').toDate();

        return {
            "name": words({
                exactly: 5,
                join: ' ',
            }),
            "description": words({
                exactly: 20,
                join: ' ',
            }),
            "skills": skills,
            "startDate": startDate,
            "endDate": endDate,
        }
    }
}
