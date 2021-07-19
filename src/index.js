// Import functions from ./support as needed
import {
  split,
  filter,
  reduce,
  compose,
  curry,
  map,
  prop,
  add,
  append,
  match,
  concat,
  toString,
  id
} from './support'
const log = console.log
const grp = (lbl) => console.group(lbl)
const grpEnd = console.groupEnd
const trace = curry((tag, x) => {
  console.log(tag, x)
  return x
})
const moment = require('moment')

/*
    work with code below here
*/
