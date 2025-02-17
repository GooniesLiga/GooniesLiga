const participants = [
    {
        name: "Alberto",
        subtitle: "El terror de las abuelas",
        stats: { medallas: 0, premios: 0, semanales: 0, mensuales: 0, anuales: 0 },
        icon: "img/iconos/anciana.png",
        medals: ["img/Medalla1B.png", "img/Medalla2B.png", "img/Medalla3B.png", "img/Medalla4B.png", "img/Medalla5B.png", "img/Medalla6B.png", "img/Medalla7B.png"]
    },
    {
        name: "Arturitou",
        subtitle: "Chiquitito, el dictador",
        stats: { medallas: 0, premios: 0, semanales: 0, mensuales: 0, anuales: 0 },
        icon: "img/iconos/ancianos.png",
        medals: ["img/Medalla1B.png", "img/Medalla2B.png", "img/Medalla3B.png", "img/Medalla4B.png", "img/Medalla5B.png", "img/Medalla6B.png", "img/Medalla7B.png"]
    },
    {
        name: "Azkona",
        subtitle: "Tom Tucker",
        stats: { medallas: 0, premios: 0, semanales: 0, mensuales: 0, anuales: 0 },
        icon:  "img/iconos/clasificacion.png",
        medals: ["img/Medalla1B.png", "img/Medalla2B.png", "img/Medalla3B.png", "img/Medalla4B.png", "img/Medalla5B.png", "img/Medalla6B.png", "img/Medalla7B.png"]
    },
    {
        name: "DP",
        subtitle: "El cangrejo con las patas pas pas",
        stats: { medallas: 0, premios: 0, semanales: 0, mensuales: 0, anuales: 0 },
        icon: "img/iconos/enfermo.png",
        medals: ["img/Medalla1B.png", "img/Medalla2B.png", "img/Medalla3B.png", "img/Medalla4B.png", "img/Medalla5B.png", "img/Medalla6B.png", "img/Medalla7B.png"]
    },
    {
        name: "Dean",
        subtitle: "Mi madre es tu madre",
        stats: { medallas: 0, premios: 0, semanales: 0, mensuales: 0, anuales: 0 },
        icon:  "img/iconos/hombre (3).png",
        medals: ["img/Medalla1B.png", "img/Medalla2B.png", "img/Medalla3B.png", "img/Medalla4B.png", "img/Medalla5B.png", "img/Medalla6B.png", "img/Medalla7B.png"]
    },
    {
        name: "Edu",
        subtitle: "El nuevo Goonie",
        stats: { medallas: 0, premios: 0, semanales: 0, mensuales: 0, anuales: 0 },
        icon:  "img/iconos/mareado.png",
        medals: ["img/Medalla1B.png", "img/Medalla2B.png", "img/Medalla3B.png", "img/Medalla4B.png", "img/Medalla5B.png", "img/Medalla6B.png", "img/Medalla7B.png"]
    },
    {
        name: "Freire",
        subtitle: "El intrepido productor",
        stats: { medallas: 0, premios: 0, semanales: 0, mensuales: 0, anuales: 0 },
        icon:  "img/iconos/mujer.png",
        medals: ["img/Medalla1B.png", "img/Medalla2B.png", "img/Medalla3B.png", "img/Medalla4B.png", "img/Medalla5B.png", "img/Medalla6B.png", "img/Medalla7B.png"]
    },
    {
        name: "Maldo",
        subtitle: "Huele a coño, tiene pelos",
        stats: { medallas: 0, premios: 0, semanales: 0, mensuales: 0, anuales: 0 },
        icon:  "img/iconos/personas-mayores.png",
        medals: ["img/Medalla1B.png", "img/Medalla2B.png", "img/Medalla3B.png", "img/Medalla4B.png", "img/Medalla5B.png", "img/Medalla6B.png", "img/Medalla7B.png"]
    },
    {
        name: "Marin",
        subtitle: "Aventurero intrépido",
        stats: { medallas: 0, premios: 0, semanales: 0, mensuales: 0, anuales: 0 },
        icon:  "img/iconos/servicio-al-cliente.png",
        medals: ["img/Medalla1B.png", "img/Medalla2B.png", "img/Medalla3B.png", "img/Medalla4B.png", "img/Medalla5B.png", "img/Medalla6B.png", "img/Medalla7B.png"]
    },
    {
        name: "Sanans",
        subtitle: "DISFRUTEMOS LA VIIIIDA LOS DOS",
        stats: { medallas: 0, premios: 0, semanales: 0, mensuales: 0, anuales: 0 },
        icon: "img/iconos/icons8-me-58.png",
        medals: ["img/Medalla1B.png", "img/Medalla2B.png", "img/Medalla3B.png", "img/Medalla4B.png", "img/Medalla5B.png", "img/Medalla6B.png", "img/Medalla7B.png"]
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
}



const participantsTable = [
    { name: "Alberto", retosSemanales: 0, retosMensuales: 0, retoAnual: 0, medallas: 0, premios: 0, puntos: 0, icon: "img/iconos/anciana.png" },
    { name: "Arturitou", retosSemanales: 0, retosMensuales: 0, retoAnual: 0, medallas: 0, premios: 0, puntos: 0, icon: "img/iconos/ancianos.png" },
    { name: "Azcona", retosSemanales: 0, retosMensuales: 0, retoAnual: 0, medallas: 0, premios: 0, puntos: 0, icon: "img/iconos/clasificacion.png" },
    { name: "Dp", retosSemanales: 0, retosMensuales: 0, retoAnual: 0, medallas: 0, premios: 0, puntos: 0, icon: "img/iconos/enfermo.png" },
    { name: "Dean", retosSemanales: 0, retosMensuales: 0, retoAnual: 0, medallas: 0, premios: 0, puntos: 0, icon: "img/iconos/hombre (3).png" },
    { name: "Edu", retosSemanales: 0, retosMensuales: 0, retoAnual: 0, medallas: 0, premios: 0, puntos: 0, icon: "img/iconos/mareado.png" },
    { name: "Freire", retosSemanales: 0, retosMensuales: 0, retoAnual: 0, medallas: 0, premios: 0, puntos: 0, icon: "img/iconos/mujer.png" },
    { name: "Maldo", retosSemanales: 0, retosMensuales: 0, retoAnual: 0, medallas: 0, premios: 0, puntos: 0, icon: "img/iconos/personas-mayores.png" },
    { name: "Marin", retosSemanales: 0, retosMensuales: 0, retoAnual: 0, medallas: 0, premios: 0, puntos: 0, icon: "img/iconos/servicio-al-cliente.png" },
    { name: "Sanans", retosSemanales: 0, retosMensuales: 0, retoAnual: 0, medallas: 0, premios: 0, puntos: 0, icon: "img/iconos/icons8-me-58.png" }
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
