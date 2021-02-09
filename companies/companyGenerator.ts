import words from 'random-words';
import Randoma from 'randoma';
import moment from 'moment';

export class CompanyGenerator {
    getCompanies(skills: Array<string>): Array<object> {
        let generatedOffers: object[] = [];

        // Add 3 random dated offers
        for (let i = 0; i < 3; i++) {
            generatedOffers.push(this.getOffer(generatedOffers, skills));
        }

        // Add 2 offers with same date
        for (let i = 0; i < 2; i++) {
            const startDate = new Date(2021, 2, 1);
            const endDate = new Date(2021, 2, 6);

            generatedOffers.push(this.getOffer(generatedOffers, skills, {
                startDate,
                endDate
            }));
        }

        return generatedOffers;
    }

    getOffer(generatedOffers: Array<object>, skills: Array<string>, dates?: any) {
        const random = new Randoma({seed: 10});
        let startDate = random.dateInRange(new Date(2021,2,1), new Date(2021,2,10));
        const endDate = moment(startDate).add(5, 'd').toDate();

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
            "startDate": dates ? dates.startDate : startDate,
            "endDate": dates ? dates.endDate : endDate,
        }
    }
}
