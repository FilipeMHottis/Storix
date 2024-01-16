import swaggerJSDoc from 'swagger-jsdoc';

const PORT = process.env.PORT || 3000;

const options: swaggerJSDoc.Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Storix API',
            version: '1.0.0',
            description: 'Swagger API for Storix, a simple file storage service',
        },
        host: `localhost:${PORT}`,
        basePath: '/',
        servers: [
            {
            url: `http://localhost:${PORT}`,
            description: 'Server local',
            },
        ],
        components: {
            securitySchemas: {
                bererAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        security: [
            {
                bererAuth: [],
            },
        ],
    },
    apis: ['src/router/*.router.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
