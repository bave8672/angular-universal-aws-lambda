# Angular Universal / AWS Lambda Template

[![Greenkeeper badge](https://badges.greenkeeper.io/bave8672/angular-universal-aws-lambda.svg)](https://greenkeeper.io/)

The default [Angular CLI](https://github.com/angular/angular-cli) project, modified to support [Angular Universal](https://github.com/angular/universal) prerendering via AWS Lambda (using the [Serverless](https://github.com/serverless) platform).

[Demo](https://s6pjooqlgl.execute-api.us-east-1.amazonaws.com/dev/)

## Quick start

- Clone the repo and run `yarn` to install dependencies.
- Build the angular projects for server and browser using `npm run build:angular`
- Build the lambda code with `npm run build:server`
- After building, simulate the lambda endpoint locally by running `npm run start`
- To deploy to AWS, set up your credentials with serverless, then use `npm run deploy`.

### Acknowledgements

Lukas Marx's [blog post](https://malcoded.com/posts/angular-fundamentals-universal-server-side-rendering) does a great job explaining what's required to set up an Angular Universal project.