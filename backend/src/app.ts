import cors from 'cors';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from '@/docs/api/swagger';
import {
    productRouter,
    emailRouter,
    newsRouter,
    promotionRouter,
    reviewRouter,
    userRouter,
    advantagesRouter,
    brandsRouter,
    regionsRouter,
    contactPersonsRouter,
} from '@/internal/api/rest/routes';
import { graphqlHTTP } from 'express-graphql';
import { root, schema } from './internal/api/graphql';

export const app = express();

const jsonBodyMiddleware = express.json();
app.use(jsonBodyMiddleware);

app.use(
    cors({
        origin: 'http://localhost:5173',
        credentials: true,
    }),
);

const apiV1Router = express.Router();

apiV1Router.use('/product', productRouter);
apiV1Router.use('/news', newsRouter);
apiV1Router.use('/promotions', promotionRouter);
apiV1Router.use('/email', emailRouter);
apiV1Router.use('/reviews', reviewRouter);
apiV1Router.use('/user', userRouter);
apiV1Router.use('/advantages', advantagesRouter);
apiV1Router.use('/brands', brandsRouter);
apiV1Router.use('/regions', regionsRouter);
apiV1Router.use('/contact-persons', contactPersonsRouter)

app.use('/api/v1', apiV1Router);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    }),
);
