global.express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
require('dotenv').config();
const PORT = process.env.PORT;

global.app = express();

const corsOptions = {
    origin: ['http://0.0.0.0:4200'],
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    credentials: true
}

app.use(cors(corsOptions));
app.use(helmet());
app.use(helmet.noCache());

app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'))

app.use(bodyParser.raw());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

require('./router');

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`)
});
