// import word lists
import adjectives from '../assets/adjectives';
import nouns from '../assets/nouns';
import groupings from '../assets/groupings';
// combined adjectives and nouns
const adjNouns = [
    ...adjectives,
    ...nouns,
];

/**
 * return a random element from an array
 * @param  {Array} arr input array
 * @return {*}         a random element from the input array
 */
function sample(arr) {
    return arr[Math.floor((Math.random() * arr.length))];
}

/**
 * return a randomly generated ID string
 * @return {String} randomly-generated ID
 */
export default function getId() {
    // format: "adjective-adjective|noun-noun-grouping"
    return `${sample(adjectives)}-${sample(adjNouns)}-${sample(nouns)}-${sample(groupings)}`;
}
