import { Router } from "express";
import { addAccountUser, deleteAccountUser, updateData } from "../controller/admin.controller";
const router = Router();

router.post("/add-account", addAccountUser);
router.put("/update-account/:id", updateData);
router.delete("/delete-account/:id", deleteAccountUser);

export default router;