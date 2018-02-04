// tslint:disable:no-console

// Angular requires Zone.js
import 'zone.js/dist/zone-node';

import * as express from 'express';
import { ngExpressEngine } from '@nguniversal/express-engine';
import * as fs from 'fs';
const {
    ServerAppModuleNgFactory,
    LAZY_MODULE_MAP
} = require('../dist-angular-server/main.bundle');
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
import * as awsServerlessExpress from 'aws-serverless-express';

const app = express();
const provider = provideModuleMap(LAZY_MODULE_MAP);

app.engine(
    'html',
    ngExpressEngine({
        bootstrap: ServerAppModuleNgFactory,
        providers: [provider]
    })
);

app.set('view engine', 'html');
app.set('views', __dirname + '/..');

app.use(express.static(__dirname + '../dist-angular-browser', { index: false }));
app.use(express.static(__dirname + '../src', { index: false }));

app.get('/*', (req, res) => {
    console.time(`GET: ${req.originalUrl}`);
    res.render('./src/index', {
        req,
        res
    });
    console.timeEnd(`GET: ${req.originalUrl}`);
});

const server = awsServerlessExpress.createServer(app);

export const handler = (event, context) =>
    awsServerlessExpress.proxy(server, event, context);
