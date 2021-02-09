import {CommonRoutesConfig} from '../common/common.routes.config';
import CompaniesController from './controllers/companies.controller';
import express from 'express';

export class CompaniesRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'CompaniesRoutes');
    }

    configureRoutes() {
        this.app.route(`/companies`)
            .post(CompaniesController.getCompaniesForSkills)

        return this.app;
    }
}
