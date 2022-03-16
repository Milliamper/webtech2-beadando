const Vehicle = require('../models/car');

exports.carCreate = function(req, res, next) {

    Vehicle.findOne({ name: req.body.brand }, function(err, p) {
        if (err) return err;
        return p;
    }).exec(function(err, existingCar) {
        if (existingCar && existingCar.brand === req.body.brand) {
            return next(err)
        } else {
            let car = new Vehicle({
                brand: req.body.brand,
                type: req.body.type,
                distance: req.body.distance,
                price: req.body.price,
            });
            console.log(req.body);
            car.save(function(err, object) {
                if (err) {
                    return next(err);
                }
                res.json({ id: object.id })
            })
        }
    })

};

exports.getAllCar = function(req, res, next) {
    Vehicle.find({}, function(err, car) {
        if (err) return next(err);
        res.json(car);
    })
};

exports.carDetails = function(req, res, next) {
    Vehicle.findById(req.params.id, function(err, car) {
        if (err) return next(err);
        res.json(car);
    })
};


exports.carUpdate = function(req, res, next) {
    Vehicle.findByIdAndUpdate(req.params.id, { $set: req.body }, function(err, car) {
        if (err) return next(err);
        res.json('Autó frissítve.');
    });
};

exports.carDelete = function(req, res, next) {
    Vehicle.findByIdAndRemove(req.params.id, function(err) {
        if (err) return next(err);
        res.json('Autó sikeresen törölve!');
    })
};