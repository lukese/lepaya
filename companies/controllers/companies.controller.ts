import express from 'express';
import { CompanyGenerator } from "../companyGenerator";

class CompaniesController {
    private static instance: CompaniesController;

    static getInstance(): CompaniesController {
        if (!CompaniesController.instance) {
            CompaniesController.instance = new CompaniesController();
        }
        return CompaniesController.instance;
    }

    async getCompaniesForSkills(req: express.Request, res: express.Response) {
        const companies = new CompanyGenerator()
            .getCompanies(req.body.skills);

        res.status(200).send(companies);
    }
}

export default CompaniesController.getInstance();
