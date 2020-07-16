// Copyright (C) 2020, Nicolas Morales Escobar. All rights reserved.

'use strict'

import Express from 'express'
const Router = Express.Router();

Router.post('/login', (request, response) => {

    response.send('result');
});

export default Router;