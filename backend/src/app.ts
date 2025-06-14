import express from "express";
import { setupSwagger } from "../swagger";
import { db } from "./db/db";
import { getProductsRoute } from "./routes/products";
import cors from "cors";

export const app = express();

const jsonBodyMiddleware = express.json();
app.use(jsonBodyMiddleware);

app.use(
	cors({
		origin: "http://localhost:5173",
		// credentials: true,
	})
);

app.use("/products", getProductsRoute(db));


setupSwagger(app);
