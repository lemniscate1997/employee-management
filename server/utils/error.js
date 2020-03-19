app.use((error, request, response, next) => {
    if (error.isBoom) {
        return response.status(error.output.statusCode).json(error.output.payload);
    } else {
        return response.status(400).json({ message: error });
    }
});