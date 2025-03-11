
const participants = [
    {
        name: "Alberto",
        subtitle: "El terror de las abuelas",
        stats: { medallas: 0, premios: 0, semanales: 0, mensuales: 0, anuales: 0 },
        icon: "iconos/Famelico.jpeg",
        medals: ["img/Medalla1B.png", "img/Medalla2B.png", "img/Medalla3B.png", "img/Medalla4B.png", "img/Medalla5B.png", "img/Medalla6B.png", "img/Medalla7B.png"],
        goal__month: "Volver a programar 💻",
        goal__year: "Aplicación web con abejorro 💻",
        level: 1
    },
    {
        name: "Arturitou",
        subtitle: "Chiquitito, el dictador",
        stats: { medallas: 0, premios: 0, semanales: 0, mensuales: 0, anuales: 0 },
        icon: "iconos/Arturo 1.jpeg",
        medals: ["img/Medalla1B.png", "img/Medalla2B.png", "img/Medalla3B.png", "img/Medalla4B.png", "img/Medalla5B.png", "img/Medalla6B.png", "img/Medalla7B.png"],
        goal__month: "15 días de deporte en Marzo 💪",
        goal__year: "3 hábitos nuevos para una vida mejor 💪📖",
        level: 1
    },
    {
        name: "Azkona",
        subtitle: "Tom Tucker",
        stats: { medallas: 0, premios: 0, semanales: 0, mensuales: 0, anuales: 0 },
        icon:  "iconos/Azko 1.jpeg",
        medals: ["img/Medalla1B.png", "img/Medalla2B.png", "img/Medalla3B.png", "img/Medalla4B.png", "img/Medalla5B.png", "img/Medalla6B.png", "img/Medalla7B.png"],
        goal__month: "Hábito de leer. Mínimo 1 libro en el mes de marzo 📖",
        goal__year: "Prime físico (teniendo en cuent la operación de hombro) y nuevas habilidades culinarias 💪🧑‍🍳 ",
        level: 1
    },
    {
        name: "DP",
        subtitle: "El cangrejo con las patas pas pas",
        stats: { medallas: 0, premios: 0, semanales: 0, mensuales: 0, anuales: 0 },
        icon: "iconos/Guille 1.jpeg",
        medals: ["img/Medalla1B.png", "img/Medalla2B.png", "img/Medalla3B.png", "img/Medalla4B.png", "img/Medalla5B.png", "img/Medalla6B.png", "img/Medalla7B.png"],
        goal__month: "15 días de deporte en Marzo 💪",
        goal__year: "Prime físico y aprender inglés 💪🧑‍🏫",
        level: 1
    },
    {
        name: "Dean",
        subtitle: "Mi madre es tu madre",
        stats: { medallas: 0, premios: 0, semanales: 0, mensuales: 0, anuales: 0 },
        icon:  "iconos/Dean 1.jpeg",
        medals: ["img/Medalla1B.png", "img/Medalla2B.png", "img/Medalla3B.png", "img/Medalla4B.png", "img/Medalla5B.png", "img/Medalla6B.png", "img/Medalla7B.png"],
        goal__month: "Maqueta de 6 temas 🎶",
        goal__year: "Aplicación web 💻",
        level: 1
    },
    {
        name: "Freire",
        subtitle: "El intrepido productor",
        stats: { medallas: 0, premios: 0, semanales: 0, mensuales: 0, anuales: 0 },
        icon:  "iconos/Frei 1 .jpeg",
        medals: ["img/Medalla1B.png", "img/Medalla2B.png", "img/Medalla3B.png", "img/Medalla4B.png", "img/Medalla5B.png", "img/Medalla6B.png", "img/Medalla7B.png"],
        goal__month: "Hábito de leer. Mínimo 2 libros en el mes 📖",
        goal__year: "Prime físico 💪",
        level: 1
    },
    {
        name: "Maldo",
        subtitle: "Huele a coño, tiene pelos",
        stats: { medallas: 0, premios: 0, semanales: 0, mensuales: 0, anuales: 0 },
        icon:  "iconos/Maldo 1.jpeg",
        medals: ["img/Medalla1B.png", "img/Medalla2B.png", "img/Medalla3B.png", "img/Medalla4B.png", "img/Medalla5B.png", "img/Medalla6B.png", "img/Medalla7B.png"],
        goal__month: "15 días de deporte en marzo 💪",
        goal__year: "Encontrar trabajo 🧑‍🏫",
        level: 1
    },
    {
        name: "Marin",
        subtitle: "Aventurero intrépido",
        stats: { medallas: 0, premios: 0, semanales: 0, mensuales: 0, anuales: 0 },
        icon:  "iconos/Marin 1.jpeg",
        medals: ["img/Medalla1B.png", "img/Medalla2B.png", "img/Medalla3B.png", "img/Medalla4B.png", "img/Medalla5B.png", "img/Medalla6B.png", "img/Medalla7B.png"],
        goal__month: "Marzo sin ninguna borrachera 🍸❌",
        goal__year: "Adquirir un activo grande (5k - 10k) 🤑",
        level: 1
    },
    {
        name: "Sanans",
        subtitle: "DISFRUTEMOS LA VIIIIDA LOS DOS",
        stats: { medallas: 0, premios: 0, semanales: 0, mensuales: 0, anuales: 0 },
        icon: "iconos/Famelico.jpeg",
        medals: ["img/Medalla1B.png", "img/Medalla2B.png", "img/Medalla3B.png", "img/Medalla4B.png", "img/Medalla5B.png", "img/Medalla6B.png", "img/Medalla7B.png"],
        goal__month: "140kg de haka 💪",
        goal__year: "Carnet de conducir 🚗",
        level: 1
    },
];

document.querySelectorAll(".participant__item").forEach((button, index) => {
    button.addEventListener("click", () => {
        updateParticipantInfo(participants[index % participants.length]);
    });
});

function updateParticipantInfo(participant) {
    document.getElementById("participant__icon").src = participant.icon;
    document.getElementById("participant__title").textContent = participant.name;
    document.getElementById("participant__subtitle").textContent = participant.subtitle;
    
    const statsNumbers = document.querySelectorAll(".stats__number");
    statsNumbers[0].textContent = participant.stats.medallas;
    statsNumbers[1].textContent = participant.stats.premios;
    statsNumbers[2].textContent = participant.stats.semanales;
    statsNumbers[3].textContent = participant.stats.mensuales;
    statsNumbers[4].textContent = participant.stats.anuales;
    
    const medalsContainer = document.querySelector(".participant__medals");
    medalsContainer.innerHTML = "";
    participant.medals.forEach(medal => {
        const img = document.createElement("img");
        img.src = medal;
        img.classList.add("participant__medal");
        medalsContainer.appendChild(img);
    });

    const goals = document.querySelectorAll(".goals__text");
    goals[0].textContent = participant.goal__month;
    goals[1].textContent = participant.goal__year; 

    // Buscar el participante en la tabla
    const tableParticipant = participantsTable.find(p => p.name === participant.name);

    if (tableParticipant) {
        const puntos = tableParticipant.puntos;

        // Definir niveles y calcular progreso dentro del nivel
        let nivel = 1;
        let puntosMin = 0;
        let puntosMax = 33;

        if (puntos > 32) {
            nivel = 2;
            puntosMin = 33;
            puntosMax = 66;
        }
        if (puntos > 65) {
            nivel = 3;
            puntosMin = 66;
            puntosMax = 100; // Último nivel antes de PRIME
        }

        // Calcular progreso dentro del nivel
        let progreso = ((puntos - puntosMin) / (puntosMax - puntosMin)) * 100;
        let puntosRestantes = puntosMax - puntos;

        // Actualizar nivel en la UI
        document.querySelector(".goals__level").textContent = `Nivel ${nivel}`;

        // Obtener elementos de la barra de progreso
        const progressBar = document.querySelector(".goals__progress");
        const progressText = document.querySelector(".goals__progress-text");
        const progressContainer = document.querySelector(".goals__progress-container");

        if (puntos >= 100) {
            // Si el usuario llega a 100 puntos, se muestra PRIME
            document.querySelector(".goals__level").textContent = "🎉 PRIME ALCANZADO 🎉";
            progressBar.style.width = "100%";
            progressText.textContent = "PRIME ALCANZADO";
        } else if (nivel === 3) {
            // Si está en nivel 3 pero no ha alcanzado 100 puntos
            progressContainer.style.display = "block";
            progressBar.style.width = `${Math.max(progreso, 0)}%`;
            progressText.textContent = `${puntosRestantes} pts para PRIME`;
        } else {
            // Niveles normales (1 y 2)
            progressContainer.style.display = "block";
            progressBar.style.width = `${Math.max(progreso, 0)}%`;
            progressText.textContent = `${puntosRestantes} pts para Nivel ${nivel + 1}`;
        }
    }
}




const participantsTable = [
    { name: "Alberto", retosSemanales: 0, retosMensuales: 0, retoAnual: 0, medallas: 0, premios: 0, puntos: 0, icon: "iconos/Famelico.jpeg" },
    { name: "Arturitou", retosSemanales: 1, retosMensuales: 0, retoAnual: 0, medallas: 0, premios: 0, puntos: 1, icon: "iconos/Arturo 1.jpeg" },
    { name: "Azkona", retosSemanales: 1, retosMensuales: 0, retoAnual: 0, medallas: 0, premios: 0, puntos: 3, icon: "iconos/Azko 1.jpeg" },
    { name: "DP", retosSemanales: 1, retosMensuales: 0, retoAnual: 0, medallas: 0, premios: 0, puntos: 1, icon: "iconos/Guille 1.jpeg" },
    { name: "Dean", retosSemanales: 1, retosMensuales: 0, retoAnual: 0, medallas: 0, premios: 0, puntos: 1, icon: "iconos/Dean 1.jpeg" },
    { name: "Freire", retosSemanales: 1, retosMensuales: 0, retoAnual: 0, medallas: 0, premios: 0, puntos: 1, icon: "iconos/Frei 1 .jpeg" },
    { name: "Maldo", retosSemanales: 1, retosMensuales: 0, retoAnual: 0, medallas: 0, premios: 0, puntos: 1, icon: "iconos/Maldo 1.jpeg" },
    { name: "Marin", retosSemanales: 1, retosMensuales: 0, retoAnual: 0, medallas: 0, premios: 0, puntos: 1, icon: "iconos/Marin 1.jpeg" },
    { name: "Sanans", retosSemanales: 0, retosMensuales: 0, retoAnual: 0, medallas: 0, premios: 0, puntos: 0, icon: "iconos/Famelico.jpeg" }
];

function renderTable() {
    const tableBody = document.querySelector(".rating__table tbody");
    tableBody.innerHTML = "";

    const sortedParticipants = participantsTable.sort((a, b) => b.puntos - a.puntos);
    
    sortedParticipants.forEach(participant => {
        const row = `<tr>
            <td><img src="${participant.icon}" alt="" class="table__img"></td>
            <td class="table__name">${participant.name}</td>
            <td>${participant.retosSemanales}</td>
            <td>${participant.retosMensuales}</td>
            <td>${participant.retoAnual}</td>
            <td>${participant.medallas}</td>
            <td>${participant.premios}</td>
            <td>${participant.puntos}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

document.addEventListener("DOMContentLoaded", renderTable);


document.querySelectorAll(".participant__item").forEach((button, index) => {
    button.addEventListener("click", () => {
        // Remover la clase 'active' de todos los botones
        document.querySelectorAll(".participant__item").forEach(btn => btn.classList.remove("active"));

        // Agregar la clase 'active' solo al botón seleccionado
        button.classList.add("active");

        // Actualizar la información del participante
        updateParticipantInfo(participants[index % participants.length]);
    });
});
