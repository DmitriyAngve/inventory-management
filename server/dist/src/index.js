"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
// ROUTE IMPORTS
const dashboardRoutes_1 = __importDefault(require("./routes/dashboardRoutes"));
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
// CONFIGURATIONS
dotenv_1.default.config(); // загружает переменные из .env
const app = (0, express_1.default)(); // инициализирует app
app.use(express_1.default.json()); // делает доступными входящие json-запросы
app.use((0, helmet_1.default)()); // добавляет заголовки безопасности к HTTP-ответам (защищает от распространенных уязвимостей)
app.use(helmet_1.default.crossOriginResourcePolicy({ policy: "cross-origin" })); // устанавливает политику CORP, разрешая доступ к ресурсам с разных источников
app.use((0, morgan_1.default)("common")); // вводит логи HTTP-запросов (для отладки и запросов в консоль)
app.use(body_parser_1.default.json()); // разбирает тела запросов в формате JSON
app.use(body_parser_1.default.urlencoded({ extended: false })); // разбирает URL-кодированные данные с использованием библиотеки querystring
app.use((0, cors_1.default)()); // включает поддержку CORS, позволяющую серверу обрабатывать щапросы с других доменов
// ROUTES
// app.get("/hello", (req, res) => {
//   res.send("hello world2");
// });
app.use("/dashboard", dashboardRoutes_1.default); // before i had "home" which is going to be app.use("/dashboard") http://localhost:8000/dashboard
app.use("/products", productRoutes_1.default); // http://localhost:8000/products
// SERVER
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
//
