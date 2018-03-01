import {graphiqlKoa, graphqlKoa} from 'apollo-server-koa';
import * as Koa from 'koa';
import * as koaBody from 'koa-bodyparser';
import * as  koaRouter from 'koa-router';
import schema from './schema';

const app = new Koa();
const router = new koaRouter();

app.use(koaBody());

router.post('/graphql', graphqlKoa({schema}));
router.get('/graphql', graphqlKoa({schema}));
router.get(
  '/graphiql',
  graphiqlKoa({
    endpointURL: '/graphql',
  }),
);

app.use(router.routes());
app.use(router.allowedMethods());

export default app;
