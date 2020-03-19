const { User } = require('../../model/index');

class UserRepository {
    findUser(condition) {
        return User.findOne(condition);
    }

    createUser(user) {
        if(User.findOne({email: user.email}) == null) {
            return User.create(user);
        } else {
            throw new Error('User already exist with this emailId');
        }
    }
}

const userRepository = new UserRepository();
module.exports = userRepository;