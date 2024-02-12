import { MovieModel } from "../models/movie.js";
import { validateMovie, validatePartialMovie } from "../schemas/movies.js";

export class MovieController {
    static async getAll(req, res) {
        const query = req.query

        const movies = await MovieModel.getAll( query )

        res.json(movies)
    }

    static async getByID(req, res) {
        const { id } = req.params
        const result = await MovieModel.getByID({ id })

        if (!result) return res.status(404).json({ err: "movie not found" })

        res.status(200).json(result)
    }

    static async createMovie(req, res) {
        const result = validateMovie(req.body)

        if (!result.success) {
            return res.status(404).json(result)
        }

        const movie = await MovieModel.createMovie({ input: result.data })

        res.status(200).json(movie)
    }

    static async updateAll(req, res) {
        const { id } = req.params
        const result = validateMovie(req.body)

        if (!result.success) return res.json(result.error)

        const movie = await MovieModel.updateAll({ id, input: result.data })

        if (!movie) return res.status(404).json({ err: "movie not found" })

        res.status(200).json(movie)
    }

    static async update(req, res) {
        const { id } = req.params
        const result = validatePartialMovie(req.body)

        if (!result.success) return res.json(result.error)

        const movie = await MovieModel.update({ id, input: result.data })

        if (!movie) return res.status(404).json({ err: "movie not found" })

        res.status(200).json(movie)
    }

    static async delete(req, res) {
        const { id } = req.params

        const result = await MovieModel.delete({ id })

        if (!result)  return res.status(404).json({ err: "movie not found" })

        res.status(200).json({ message: "movie deleted" })
    }
}

