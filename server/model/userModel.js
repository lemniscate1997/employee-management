const { user } = require('../data/user');
const modelBaseClass = require('../base/modelBaseClass');

class User extends modelBaseClass {
    constructor() {
        super(user);
    }
}

const userModel = new User();
module.exports = userModel;