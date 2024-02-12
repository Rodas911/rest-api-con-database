import { z } from "zod";

const movieSchema = z.object({
  "title": z.string(),
  "year": z.number().int().min(1900).max(2024),
  "director": z.string(),
  "duration": z.number().int().min(1).max(1000),
  "poster": z.string().url(),
  "genre": z.array(
    z.enum(['Action', 'Adventure', 'Crime', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Thriller', 'Sci-Fi']),
    {
      required_error: 'Movie genre is required.',
      invalid_type_error: 'Movie genre must be an array of enum Genre'
    }
    ),
  "rate": z.number().min(4.0).max(10)
})

export function validateMovie(data) {
    return movieSchema.safeParse(data)
}

export function validatePartialMovie(data) {
    return movieSchema.partial().safeParse(data)
}