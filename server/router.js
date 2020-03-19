const secret = process.env.TOKEN_SECRET;

require('./utils/auth');

app.all('*', async (request, response, next) => {
    try {
        const token = request.header('authorization');
        const decoded = jwt.verify(token, secret)
        request.decoded = decoded;
        next();
    } catch (error) {
        response.status(404).json({ message: 'Unauthorized request' });
    }
});

require('./utils/error');