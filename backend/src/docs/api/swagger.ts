import swaggerJSDoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Shop Everything For Repair API',
            version: '1.0.0',
            description: 'Документация API',
        },
        servers: [
            {
                url: 'http://localhost:8080',
            },
        ],
    },
    apis: ['../../../src/routes/*.ts', '../../../src/controllers/*.ts'],
};

export const swaggerSpec = swaggerJSDoc(options);
