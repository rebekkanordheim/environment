/* import joker from "one-liner-joke";

console.log(joker.getRandomJoke().body); */

import joker from "give-me-a-joke";

export function dadJoke() {
    return new Promise(function (resolve, reject) {
        try {
            joker.getRandomDadJoke(function (joke) {
                resolve(joke);
            });
        } catch (error) {
            reject(error);
        }
    });
}

