const express = require('express');
const router = express.Router();
const passport = require('../config/passport-config');
const { User } = require('../models');

router.get('/signup', (req, res) => {
    res.render('auth/signup');
});

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.get('/logout', (req, res) => {
    req.logOut((error) => {
        if (error) {
            req.flash('error', 'Error logging out. Please try again');
            return next(error);
        }
        req.flash('success', 'Logging out... See you next time!');
        res.redirect('/');
    });
});

router.post('/signup', async (req, res) => {
    console.log('Signup POST request body:', req.body);
    try {
        const findUser = await User.findOne({ email: req.body.email });
        if (!findUser) {
            const newUser = await User.create({
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                password: req.body.password
            });
            console.log('----- NEW USER ----\n', newUser);
            req.flash('success', 'Account created successfully. Please log in.');
            res.redirect('/auth/login');
        } else {
            req.flash('error', 'Email already exists. Try another email');
            res.redirect('/auth/signup');
        }
    } catch (error) {
        console.log('----- ERROR IN SIGNUP POST ----', error);
        if (error.errors.phone && error.errors.phone.name === 'ValidatorError') {
            req.flash('error', 'Phone number needs to be in format XXX-XXX-XXXX');
        } else {
            req.flash('error', 'An error occurred. Please try again.');
        }
        res.redirect('/auth/signup');
    }
});


router.post('/login', passport.authenticate('local', {
    successRedirect: '/profile',
    failureRedirect: '/auth/login',
    successFlash: 'Welcome back to your account',
    failureFlash: 'Either email or password is incorrect. Please try again'
}));

module.exports = router;
