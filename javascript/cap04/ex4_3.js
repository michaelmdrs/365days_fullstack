function updateHora() {
    const data = new Date();
    const hora = data.getHours();
    const minuto = data.getMinutes();
    const segundo = data.getSeconds();
    const horaFormatada = `${hora < 10 ? '0' + hora : hora}:${minuto < 10 ? '0' + minuto : minuto}:${segundo < 10 ? '0' + segundo : segundo}`;

    document.getElementById('hora').innerHTML = horaFormatada;
    
}

setInterval(updateHora, 1000);

const select = document.getElementById('timezone');
const buttonTime = document.getElementById('showTimeBtn');
const buttonClean = document.getElementById('showClean')
const showTime = document.getElementById('showTime');
let fusoInterval = null;

function updateFuso(timeZone) {
    const now = new Date();
    const options = {
        timeZone: timeZone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };

    const timeString = new Intl.DateTimeFormat('pt-BR', options).format(now);

    showTime.innerHTML = `
        <p class="text-lg font-semibold">
            Horário em <span class="text-sky-600">${timeZone}</span>: ${timeString}
        </p>
    `;
}

buttonTime.addEventListener('click', () => {
    const timeZone = select.value;

    if(!timeZone) {
        alert('Selecione um país!');
        return;
    }

    if(fusoInterval) {
        clearInterval(fusoInterval);
    }

    updateFuso(timeZone);

    fusoInterval = setInterval(() => {
        updateFuso(timeZone);
    }, 1000)

    
})

buttonClean.addEventListener('click', () => {
    select.value = '';
    showTime.innerHTML = '';

    if(fusoInterval) {
        clearInterval(fusoInterval);
        fusoInterval = null;
    }
})



