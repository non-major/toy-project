import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    components: {},
    info: {
      title: "북극곰",
      version: "1.0.0",
      description: "북극곰",
    },
    host: "localhost:3000",
    basePath: "/",
  },
  apis: ["src/routers/*", "./api/*", "src/model/*"],
};

const specs = swaggerJsdoc(options);

export { swaggerUi, specs };
