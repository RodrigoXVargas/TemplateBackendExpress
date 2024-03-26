import "reflect-metadata";
import express from "express";
import cors from "cors";

const app = express();
app.disable("x-powered-by");
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () => {
	console.log(`server running on http://localhost:${PORT}`);
});
