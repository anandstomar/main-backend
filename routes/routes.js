import { Router } from "express";
const router = Router();

import AdminController from "../controllers/Admin.Controller.js";
import UserController from "../controllers/User.Controller.js";
import NotificationController from "../controllers/Notification.Controller.js";
import HealthDataController from "../controllers/Healthdata.Controller.js";
import DiagnosisController from "../controllers/Diagnosis.Controller.js";
import XRayDataController from "../controllers/XRayData.Controller.js";

const adminController = new AdminController();
const userController = new UserController();
const notificationController = new NotificationController();
const healthDataController = new HealthDataController();
const diagnosisController = new DiagnosisController();
const xrayDataController = new XRayDataController();

router.get("/admin/manage-users", (req, res) => adminController.manageUsers(req, res));
router.post("/admin/update-ai-model", (req, res) => adminController.updateAIModel(req, res));

router.post("/users/register", (req, res) => userController.registerUser(req, res));
router.put("/users/:userID/update-profile", (req, res) => userController.updateProfile(req, res));
router.get("/users/:userID/diagnosis-history", (req, res) => userController.viewDiagnosisHistory(req, res));

router.post("/notifications/send", (req, res) => notificationController.sendNotification(req, res));
router.put("/notifications/:notificationID/update-status", (req, res) => notificationController.updateStatus(req, res));

router.post("/health-data", (req, res) => healthDataController.recordData(req, res));
router.put("/health-data/:healthDataID", (req, res) => healthDataController.updateData(req, res));

router.post("/diagnosis", (req, res) => diagnosisController.saveDiagnosis(req, res));
router.get("/diagnosis/:userID/history", (req, res) => diagnosisController.getHistory(req, res));

router.post("/xray-data", (req, res) => xrayDataController.recordXRay(req, res));
router.put("/xray-data/:xrayDataID", (req, res) => xrayDataController.updateXRayData(req, res));

export default router;
