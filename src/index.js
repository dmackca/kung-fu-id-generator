// import word lists
import adjectives from '../assets/adjectives';
import nouns from '../assets/nouns';
import groupings from '../assets/groupings';
// combined adjectives and nouns
const adjNouns = [
    ...adjectives,
    ...nouns,
];

function sample(arr) {
    return arr[Math.floor((Math.random() * arr.length))];
}

export default function getId() {
    // format: "adjective-adjective|noun-noun-grouping"
    return `${sample(adjectives)}-${sample(adjNouns)}-${sample(nouns)}-${sample(groupings)}`;
}
