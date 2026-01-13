export const notFound = (req, res, next) => {
    const error = new Error(`Route ${req.originalUrl} Not Found`)
    error.statusCode = 404
    next(error)
}