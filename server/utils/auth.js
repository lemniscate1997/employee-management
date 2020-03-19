const userRepository = require('../features/user/userRepository');
const General = require('../utils/general');

app.post('/auth/login', (request, response, next) => {
    try {
        const data = request.body;
        const user = userRepository.findUser({ email: data.userName, password: data.password });
        if (user == null) {
            response.status(401).json({ message: 'Invalid username/password' });
        } else {
            const token = General.getToken(data);
            response.status(200).json({
                data: { ...user, password: undefined, token: token }
            });
        }
    } catch (error) {
        response.status(404).json({ message: error.error });
    }
});

app.post('/auth/signup', (request, response, next) => {
    try {
        let user = request.body;
        user = userRepository.createUser(user);
        const token = General.getToken(user);
        response.status(200).json({
            data: { ...user, password: undefined, token: token }
        });
    } catch (error) {
        response.status(404).json({ message: error.message });
    }
});