import express from "express";
import { setupSwagger } from "../swagger";
import { db } from "./db/db";
import { getProductsRouter } from "./routes/products";
import cors from "cors";
import { getNewsRouter } from "./routes/news";
import { getPromotionsRouter } from "./routes/promotions";

export const app = express();

const jsonBodyMiddleware = express.json();
app.use(jsonBodyMiddleware);

app.use(
	cors({
		origin: "http://localhost:5173",
		// credentials: true,
	})
);

app.use("/products", getProductsRouter());
app.use("/news", getNewsRouter());
app.use("/promotions", getPromotionsRouter());

setupSwagger(app);
