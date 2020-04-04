/* eslint-disable no-console, import/no-extraneous-dependencies */
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

//
// update readme
//

const fs = require('fs');
const nunjucks = require('nunjucks');
const numeral = require('numeral');

const numAdjectives = adjectives.length;
const numNouns = nouns.length;
const numGroupings = groupings.length;
const numCombinations = numAdjectives * (numAdjectives + numNouns) * numNouns * numGroupings;
const numCombosDisplay = numeral(numCombinations).format('0,0');

console.log('Rendering README file: %s combinations', numCombosDisplay);

const readme = nunjucks.render('src/README.tpl.md', {
    numAdjectives,
    numNouns,
    numGroupings,
    numCombos: numCombosDisplay,
});

fs.writeFile('README.md', readme, (err) => {
    if (err) throw err;
    console.log('README.md file rendered!');
});
