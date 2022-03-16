const express = require('express');
const router = express.Router();
const car_controller = require('./controller/car');
const user_controller = require("./controller/user")

function middleware(req, res, next) {

    const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':')

    user_controller.get_user(login).exec(function(err, user) {
        if (login && password && login === user.name && password === user.password) {

            return next()
        }

        return next()
    })
}
router.get('/', middleware, function(req, res, next) {
    res.json({ express: 'Express connected to angular' });
});

router.post('/cars', middleware, car_controller.getAllCar);
router.get('/cars/:id', middleware, car_controller.carDetails);
router.post('/cars/add', middleware, car_controller.carCreate);
router.put('/cars/:id', middleware, car_controller.carUpdate);
router.post('/cars/delete/:id', middleware, car_controller.carDelete);

module.exports = router;