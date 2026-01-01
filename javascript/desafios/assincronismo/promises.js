function randTempo(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function conectarBD(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

conectarBD('Conectando 1ª tentativa em 5s...', randTempo(1, 5))
    .then(res => {
        console.log(res);
        return conectarBD('Conectando 2ª tentativa em 2s...', randTempo(1, 2));
    })
    .then(res => {
        console.log(res);
        return conectarBD('Conectando 3ª tentativa em 3s...', randTempo(1, 3));
    })
    .then(res => {
        console.log(res);
    })
    .catch();