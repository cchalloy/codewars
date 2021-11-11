// https://www.codewars.com/kata/605ae9e1d2be8a0023b494ed/train/javascript

const countSalutes = function(hallway) {
    let salutes = 0;

    Array.from(hallway).reduce((prev, curr) => {
        console.log('prev : ', prev);
        if (curr === '>') {
            prev[curr] = ++prev[curr] || 1;
        }
        if (curr === '<' && prev['>'] > 0) {
            salutes += prev['>'] * 2;
        }

        return prev;
    }, {});

    return salutes;
};
