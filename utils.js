import { readFileSync } from 'node:fs';

function getJSON(route) {
    const file = JSON.parse(readFileSync(route, 'utf-8'))

    console.log(file)
}

getJSON('./movies.json')