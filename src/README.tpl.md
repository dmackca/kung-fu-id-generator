# Kung-Fu ID Generator

Randomly generates human-readable ID strings with kung-fu words

This function returns a string in the format `<adjective>-<adjective|noun>-<noun>-<grouping noun>`, where all of the words are somewhat related to classic kung-fu movies. For example, `fearless-unstoppable-lotus-temple`

It uses lists of {{ numAdjectives }} adjectives, {{ numNouns }}, and {{ numGroupings }} grouping nouns, which provides **{{ numCombos }} possible combinations**.

## Usage

Run the function in Node or in the browser:

```javascript
import generateId from 'kung-fu-id-generator';

generateId(); // "jumping-legendary-centipede-technique"

generateId(); // "bloody-warrior-monkey-style"
```
