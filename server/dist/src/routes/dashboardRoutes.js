"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dashboardController_1 = require("../controllers/dashboardController");
// Создание самого маршрута
const router = (0, express_1.Router)();
router.get("/", dashboardController_1.getDashboardMetrics); // http://localhost:8000/dashboard
// router.get("/metrics", getDashboardMetrics); // http://localhost:8000/metrics
exports.default = router;
// тут я определяю маршрутизатор для обработки запросов и подключаю контроллер для обработки этих запросов
// Если приложение получит ГЕТ запрос на маршрут "/", который соответствует маршруту, определенному в этом файле, будет вызван контроллер getDashboardMetrics, который вернёт соотвествующий ответ
