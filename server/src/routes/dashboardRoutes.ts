import { Router } from "express";
import { getDashboardMetrics } from "../controllers/dashboardController";

// Создание самого маршрута
const router = Router();
router.get("/", getDashboardMetrics); // http://localhost:8000/dashboard
// router.get("/metrics", getDashboardMetrics); // http://localhost:8000/metrics

export default router;

// тут я определяю маршрутизатор для обработки запросов и подключаю контроллер для обработки этих запросов
// Если приложение получит ГЕТ запрос на маршрут "/", который соответствует маршруту, определенному в этом файле, будет вызван контроллер getDashboardMetrics, который вернёт соотвествующий ответ
