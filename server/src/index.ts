import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
// ROUTE IMPORTS
import dashboardRoutes from "./routes/dashboardRoutes";
import productRoutes from "./routes/productRoutes";
import userRoutes from "./routes/userRoutes";
import expenseRoutes from "./routes/expenseRoutes";

// CONFIGURATIONS
dotenv.config(); // загружает переменные из .env
const app = express(); // инициализирует app
app.use(express.json()); // делает доступными входящие json-запросы
app.use(helmet()); // добавляет заголовки безопасности к HTTP-ответам (защищает от распространенных уязвимостей)
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" })); // устанавливает политику CORP, разрешая доступ к ресурсам с разных источников
app.use(morgan("common")); // вводит логи HTTP-запросов (для отладки и запросов в консоль)
app.use(bodyParser.json()); // разбирает тела запросов в формате JSON
app.use(bodyParser.urlencoded({ extended: false })); // разбирает URL-кодированные данные с использованием библиотеки querystring
app.use(cors()); // включает поддержку CORS, позволяющую серверу обрабатывать щапросы с других доменов

// ROUTES
// app.get("/hello", (req, res) => {
//   res.send("hello world2");
// });

app.use("/dashboard", dashboardRoutes); // before i had "home" which is going to be app.use("/dashboard") http://localhost:8000/dashboard
app.use("/products", productRoutes); // http://localhost:8000/products
app.use("/users", userRoutes); // http://localhost:8000/users
app.use("/expenses", expenseRoutes);

// SERVER
const port = Number(process.env.PORT) || 3001;
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
