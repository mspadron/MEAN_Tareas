import express from "express";
import { getTasks,getTask,createTask,updateTask,deleteTask} from "../controllers/TaskController.js";

const router = express.Router()
//Forma 1
/*
router.get("/", getProducts)
router.get("/:id", getProduct)
router.post("/", createProduct)
router.put("/:id", updateProduct)
router.delete("/:id", deleteProduct)*/
//Forma 2
router.route("/").get(getTasks).post(createTask)
router.route("/:id").get(getTask).put(updateTask).delete(deleteTask)

export default router