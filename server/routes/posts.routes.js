import { Router } from "express";
import { getPosts } from "../controllers/postsControllers.js";
import { createPost } from "../controllers/postsControllers.js";
import { updatePost } from "../controllers/postsControllers.js";
import { deletePost } from "../controllers/postsControllers.js";
import { getPost } from "../controllers/postsControllers.js";

const router = Router();

router.get("/posts", getPosts);

router.post("/posts", createPost);

router.put("/posts", updatePost);

router.delete("/posts", deletePost);

router.get("/posts/:id", getPost);

export default router;
