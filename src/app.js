// First import is the default export
import subtract, { square, add } from './utils.js'
import validator from 'validator'
import React from 'react'
import ReactDOM from 'react-dom'

console.log(validator.isEmail('asdasdas'))
console.log(validator.isEmail('asdasdas@live.com'))