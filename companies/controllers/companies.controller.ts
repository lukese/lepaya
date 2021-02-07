import express from 'express';

class CompaniesController {
    private static instance: CompaniesController;

    static getInstance(): CompaniesController {
        if (!CompaniesController.instance) {
            CompaniesController.instance = new CompaniesController();
        }
        return CompaniesController.instance;
    }

    async getCompaniesForSkills(req: express.Request, res: express.Response) {
        // Get a random set of companies
        const companies = {
            "Id": 1
        };

        //

        res.status(200).send(companies);
    }
}

export default CompaniesController.getInstance();
