import { Router } from "express";
import { MovieController } from "../controllers/movie.js";

export const route = Router()

//route.get('/', (req, res) => {
//    res.json(movies)
//})
route.get('/', MovieController.getAll)

route.get('/:id', MovieController.getByID)

route.post('/', MovieController.createMovie)

route.put('/:id', MovieController.updateAll)

route.patch('/:id', MovieController.update)

route.delete('/:id', MovieController.delete)