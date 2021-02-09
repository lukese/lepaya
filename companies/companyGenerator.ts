import words from 'random-words';

export class CompanyGenerator {
    getCompanies(skills: Array<string>) {
        const generatedOffers = [];

        for (let i = 0; i < 5; i++) {
            generatedOffers.push({
                "name": words({
                    exactly: 5,
                    join: ' ',
                }),
                "description": words({
                    exactly: 20,
                    join: ' ',
                }),
                "skills": skills,
            });
        }
        return generatedOffers;
    }
}
