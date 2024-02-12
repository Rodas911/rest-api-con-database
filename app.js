import express from "express";
import cors from "cors";
import { route } from "./routes/movies.js";

const app = express()
const port = process.argv[2] ?? 3000

app.use(cors({
    origin: (origin, callback) => {
        const ALLOWLIST = ['http://localhost:8080', 'https://webdeproduccion.com', 'http://127.0.0.1:5500']

        if ((!origin) || ALLOWLIST.includes(origin)) {
            return callback(null, true)
        }

        return callback(new Error('Not allowed by CORS'))
    }
})) //cors recibe como parametro un objeto {origin: function (origin, callback)}

app.use(express.json())

app.use('/movies', route)

app.listen(port, () => {
    console.log("listening on http://localhost:3000")
})