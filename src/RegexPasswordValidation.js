"use strict";

// https://www.codewars.com/kata/52e1476c8147a7547a000811/train/javascript

function validate(password) {
    if (password.search(/((?=.*[a-z]+)(?=.*[A-Z]+)(?=.*\d+))(^\w{6,}$)/) === -1) {
        return false;
    } else {
        return true;
    }
}