import 'reflect-metadata';
import express from 'express';
import bodyParser from 'body-parser';
import { useExpressServer } from 'routing-controllers';

import { PlexController } from './controllers/plex';

const app = express();

app.use(bodyParser.json());

useExpressServer(app, {
  // TODO: This is broken on windows until routing-controllers isbumped from version 0.10.1
  //controllers: [__dirname + '/controllers/*.js'],
  controllers: [PlexController],
  routePrefix: '/api'
});

app.listen(3000, () => {
  console.log('listening on port: 3000');
});
