import moment from "moment";
import _ from "lodash";

console.log(moment().format('MMMM Do YYYY, hh:mm:ss a'));
console.log(moment().format('dddd'));
console.log(moment().format('MMM Do YY'));

console.log(moment('2020-01-01', 'YYYY-DD-MM', true).isValid());
console.log(moment('2020-14-01', 'YYYY-DD-MM', true).isValid());

console.log(moment().add( 7,'days').calendar());
console.log(moment().add( 7,'months').calendar());
console.log(moment().add( 7,'years').calendar());
console.log(moment().subtract( 7,'days').calendar());
console.log(moment().subtract( 7,'months').calendar());
console.log(moment().subtract( 7,'years').calendar());


function diff (a, b) {
    let d1 = moment(a);
    let d2 = moment(b);
    console.log(d2.diff(d1, "days"));
}

diff('2014-11-11', '2015-09-11');
diff('2014-11-27', '2015-09-16');

console.log (moment('2020-01-01').isAfter('2018-01-01'));
console.log (moment([2019]).isLeapYear());
console.log (moment([2020]).isLeapYear());