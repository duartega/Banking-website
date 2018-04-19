var express = require('express');
var router = express.Router();
var account_dal = require('../dal/account_dal');


router.get('/all', function(req, res, next) {
    account_dal.getAll(function (err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('account/my_account', {customer: result[0]});
        }
    })
});

router.get('/add', function(req, res, next) {
    account_dal.getAll(function (err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('account/account_add',{customer: result});
        }

    })

});

router.get('/insert', function(req, res) {
    account_dal.insert(req.query, function (err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.redirect(302, '/address/add?customer_id=' + result.insertId);
        }
    });
});

router.get('/update', function (req, res) {
    account_dal.update(req.query, function(err, result) {
        if (err) {
            res.send(err);
        }
        else {
            res.redirect(302, '/address/add');
        }
    });
});

router.get('/account', function(req, res, next) {
    account_dal.getAll(function (err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('account/my_account');
        }

    })

});

module.exports = router;