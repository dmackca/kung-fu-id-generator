/* eslint-disable no-console */
import adjectives from '../assets/adjectives';
import nouns from '../assets/nouns';
import groupings from '../assets/groupings';

const combinedArray = [
    adjectives,
    nouns,
    groupings,
];

//
// test for duplicates
//

const combinedSet = new Set(combinedArray);

if (combinedArray.length !== combinedSet.size) {
    console.log('not same length, duplicates found!');
    process.exit(1);
} else {
    console.log('no duplicates!');
}

console.log(adjectives.length);

//
// update readme
//

const fs = require('fs');

fs.writeFile('mynewfile3.txt', 'This is my text', (err) => {
    if (err) throw err;
    console.log('Replaced!');
});
