// Cambios de pestañas fluidos
const tabs = document.querySelectorAll('.day-tab');
const panels = document.querySelectorAll('.day-panel');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));
    
    tab.classList.add('active');
    const target = document.querySelector(`.day-panel[data-day="${tab.dataset.day}"]`);
    if(target) target.classList.add('active');
  });
});

(function () {
  // Catálogo de siluetas de cuerpo completo con el mapa muscular iluminado en el tono naranja exacto de tu interfaz (#ff4500 / #f97316)
  const EXERCISE_SVG_ICON = {
    // ----------------- CORE / ABDOMINALES -----------------
    core: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2a2 2 0 100 4 2 2 0 000-4zM8 8h8l1 6H7l1-6zM9 14l1 7h4l1-7" stroke="#475569" fill="none"/>
        <path d="M9.5 9.5h5v4h-5z" fill="#ff4500" stroke="#ff4500"/>
      </svg>
    `,

    // ----------------- GLÚTEOS / CADERA -----------------
    gluteos: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2a2 2 0 100 4 2 2 0 000-4zM8 8h8l1 6H7l1-6zM9 14l1 7h4l1-7" stroke="#475569" fill="none"/>
        <path d="M8 11h8v3H8z" fill="#ff4500" stroke="#ff4500"/>
      </svg>
    `,

    // ----------------- PECHO -----------------
    pecho: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2a2 2 0 100 4 2 2 0 000-4zM8 8h8l1 6H7l1-6zM9 14l1 7h4l1-7" stroke="#475569" fill="none"/>
        <path d="M9 8.5h6v3H9z" fill="#ff4500" stroke="#ff4500"/>
      </svg>
    `,

    // ----------------- ESPALDA -----------------
    espalda: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2a2 2 0 100 4 2 2 0 000-4zM8 8h8l1 6H7l1-6zM9 14l1 7h4l1-7" stroke="#475569" fill="none"/>
        <path d="M8.5 8.5h7v5h-7z" fill="#ff4500" stroke="#ff4500"/>
      </svg>
    `,

    // ----------------- HOMBROS -----------------
    hombros: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2a2 2 0 100 4 2 2 0 000-4zM8 8h8l1 6H7l1-6zM9 14l1 7h4l1-7" stroke="#475569" fill="none"/>
        <path d="M7 8h2v2H7zM15 8h2v2h-2z" fill="#ff4500" stroke="#ff4500"/>
      </svg>
    `,

    // ----------------- BRAZOS (BÍCEPS / TRÍCEPS) -----------------
    brazos: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2a2 2 0 100 4 2 2 0 000-4zM8 8h8l1 6H7l1-6zM9 14l1 7h4l1-7" stroke="#475569" fill="none"/>
        <path d="M6.5 10h1.5v4H6.5zM16 10h1.5v4H16z" fill="#ff4500" stroke="#ff4500"/>
      </svg>
    `,

    // ----------------- PIERNAS -----------------
    piernas: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2a2 2 0 100 4 2 2 0 000-4zM8 8h8l1 6H7l1-6zM9 14l1 7h4l1-7" stroke="#475569" fill="none"/>
        <path d="M9.5 15h2v5h-2zM12.5 15h2v5h-2z" fill="#ff4500" stroke="#ff4500"/>
      </svg>
    `
  };

  const EXERCISE_ICON_MAP = {
    // Abdominales / Core
    "Abdominales en Máquina o Crunch en Polea": "core",
    "Crunch Abdominal en Polea Alta": "core",
    "Elevación de Piernas Colgado en Barra": "core",
    "Plancha Abdominal Isométrica": "core",

    // Glúteos / Cadera
    "Abducción de Cadera en Máquina": "gluteos",
    "Elevación de Cadera en Máquina (Hip Thrust)": "gluteos",
    "Elevación de Glúteos (Bridge) a una pierna": "gluteos",
    "Elevación de Glúteos (Bridge) con Peso": "gluteos",
    "Elevación de Glúteos a dos piernas (Bridge)": "gluteos",
    "Elevación de Glúteos a una pierna": "gluteos",
    "Hip Thrust con Barra": "gluteos",

    // Pecho / Press / Flexiones / Aperturas
    "Aperturas en Máquina (Pec Deck)": "pecho",
    "Aperturas en Polea Baja (Cables)": "pecho",
    "Aperturas o Press Inclinado con Mancuernas": "pecho",
    "Cruce de Poleas (Cable Crossover)": "pecho",
    "Flexiones Diamante": "pecho",
    "Flexiones Diamante (Énfasis Tríceps)": "pecho",
    "Flexiones Inclinadas (Pies elevados)": "pecho",
    "Flexiones con Declinación o Anchas": "pecho",
    "Flexiones de Pecho Libres": "pecho",
    "Flexiones de Pecho Tradicionales": "pecho",
    "Flexiones de Pecho con Pausa": "pecho",
    "Press Inclinado con Mancuernas": "pecho",
    "Press Inclinado en Máquina": "pecho",
    "Press Plano con Mancuernas": "pecho",
    "Press de Banca Plano": "pecho",
    "Press de Pecho en Máquina": "pecho",
    "Press de Pecho en Máquina Convergente": "pecho",

    // Espalda / Tracción
    "Dominadas Asistidas o Jalón Neutro": "espalda",
    "Dominadas Lastradas o Libres": "espalda",
    "Dominadas en Marco o Remo con Mochila": "espalda",
    "Jalón al Pecho Agarre Neutro": "espalda",
    "Jalón al Pecho en Polea": "espalda",
    "Jalón al Pecho en Polea (Agarre Ancho)": "espalda",
    "Pullover en Polea Alta": "espalda",
    "Remo Abierto en Mesa": "espalda",
    "Remo Unilateral con Mochila": "espalda",
    "Remo al Mentón en Polea": "espalda",
    "Remo con Barra Libre": "espalda",
    "Remo en Polea Baja (Seated Row)": "espalda",
    "Remo en Polea Baja Agarre Estrecho": "espalda",
    "Remo en Polea al Pecho (Agarre Neutro)": "espalda",
    "Remo invertido en Mesa": "espalda",
    "Remo invertido en Mesa (Agarre Supino)": "espalda",

    // Hombros
    "Elevaciones Laterales con Mancuerna": "hombros",
    "Elevaciones Laterales con Mancuernas": "hombros",
    "Elevaciones Laterales en Polea Baja": "hombros",
    "Elevaciones laterales con Mochila": "hombros",
    "Elevaciones laterales con Mochila (1 a 1)": "hombros",
    "Pike Push-ups (Flexiones Pica)": "hombros",
    "Pike Push-ups Lentas": "hombros",
    "Press Militar con Mancuernas Sentado": "hombros",
    "Press Militar de Pie con Barra": "hombros",
    "Press Militar en Máquina o Mancuernas": "hombros",
    "Pájaros con Mancuernas (Deltoides Posterior)": "hombros",
    "Pájaros en Máquina o Mancuernas (Deltoides Posterior)": "hombros",

    // Brazos (Bíceps / Tríceps)
    "Curl Concentrado con Mochila": "brazos",
    "Curl Concentrado con Mochila (1 a 1)": "brazos",
    "Curl Concentrado en Polea": "brazos",
    "Curl Concentrado en Polea (1 a 1)": "brazos",
    "Curl Martillo con Mancuernas": "brazos",
    "Curl Martillo con Mochila": "brazos",
    "Curl Martillo en Polea con Cuerda": "brazos",
    "Curl Secreto de Isquios Sentado": "piernas",
    "Curl de Bíceps con Barra W": "brazos",
    "Curl de Bíceps con Mancuernas": "brazos",
    "Curl de Bíceps con Mancuernas (Supinación)": "brazos",
    "Curl de Bíceps con Mancuernas Alterno": "brazos",
    "Curl de Bíceps con Mochila": "brazos",
    "Curl de Bíceps con Mochila con Peso": "brazos",
    "Curl de Bíceps en Banco Inclinado": "brazos",
    "Curl de Bíceps en Polea Baja": "brazos",
    "Extensiones de Tríceps en Polea": "brazos",
    "Extensiones de Tríceps en Polea (Barra)": "brazos",
    "Extensiones de Tríceps en Polea (Soga)": "brazos",
    "Extensiones de Tríceps en suelo (Flexión t-rex)": "brazos",
    "Extensiones de Tríceps por Encima de la Cabeza": "brazos",
    "Extensión de Tríceps Copa a dos manos": "brazos",
    "Extensión de Tríceps en Polea (Soga)": "brazos",
    "Extensión de Tríceps por Encima de la Cabeza": "brazos",
    "Dips (Fondos en Paralelas Asistidos o Libres)": "brazos",
    "Fondos en Paralelas": "brazos",
    "Fondos en Paralelas Asistidos": "brazos",
    "Fondos en Silla": "brazos",
    "Fondos en Silla o Sofá": "brazos",

    // Piernas (Cuádriceps, Isquios, Gemelos, Sentadillas, Zancadas, Prensa)
    "Curl Femoral Acostado en Máquina": "piernas",
    "Curl de Isquiotibiales Acostado en Máquina": "piernas",
    "Curl de Isquiotibiales Sentado o Acostado": "piernas",
    "Elevación de Talones (Gemelos) en Pared": "piernas",
    "Elevación de Talones a dos piernas": "piernas",
    "Elevación de Talones a una pierna (Gemelos)": "piernas",
    "Elevación de Talones de Pie (Gemelos)": "piernas",
    "Elevación de Talones en Máquina": "piernas",
    "Elevación de Talones en Máquina (Gemelos)": "piernas",
    "Elevación de Talones en Máquina Sentado": "piernas",
    "Extensiones de Cuádriceps": "piernas",
    "Extensiones de Cuádriceps en Máquina": "piernas",
    "Peso Muerto Rumano Unilateral sin Peso": "piernas",
    "Peso Muerto Rumano con Barra": "piernas",
    "Peso Muerto Rumano con Mancuernas": "piernas",
    "Prensa Inclinada a 45°": "piernas",
    "Prensa de Pierna (Leg Press) Controlada": "piernas",
    "Prensa de Pierna (Leg Press) Ágil": "piernas",
    "Prensa de Pierna (Pies altos y juntos)": "piernas",
    "Prensa de Pierna (Pies altos)": "piernas",
    "Sentadilla Búlgaras (Sin peso extra)": "piernas",
    "Sentadilla Búlgaras en Silla": "piernas",
    "Sentadilla Goblet Profunda": "piernas",
    "Sentadilla Hack o Hack Squat": "piernas",
    "Sentadilla Libre Rápida (Metabólica)": "piernas",
    "Sentadilla Libre con Barra": "piernas",
    "Sentadilla Libre con Pausa (Controlada)": "piernas",
    "Sentadilla Sumô con Peso (Mochila)": "piernas",
    "Sentadilla en Hack Machine": "piernas",
    "Sentadilla en Hack Machine Rápida": "piernas",
    "Sentadillas Búlgaras en Silla": "piernas",
    "Sentadillas Libres Profundas": "piernas",
    "Sentadillas Libres con Pausa": "piernas",
    "Sentadillas Sumô con Peso (Mochila)": "piernas",
    "Zancadas Búlgaras con Mancuernas": "piernas",
    "Zancadas Búlgaras en Silla": "piernas",
    "Zancadas con Mancuernas en Movimiento": "piernas",
    "Zancadas en Movimiento (Alternas)": "piernas",
    "Zancadas en Máquina Smith o Libres": "piernas",
    "Zancadas hacia Atrás (Reversas)": "piernas",
    "Zancadas hacia Delante (Lunges)": "piernas"
  };

  function injectSVGs() {
    var names = document.querySelectorAll(".ex-name");
    names.forEach(function (nameEl) {
      var text = nameEl.textContent.trim();
      var iconKey = EXERCISE_ICON_MAP[text] || "core";
      var svgContent = EXERCISE_SVG_ICON[iconKey] || EXERCISE_SVG_ICON["core"];

      var row = nameEl.closest("tr");
      if (!row) return;

      var box = row.querySelector(".video-thumb-box");
      if (!box || box.querySelector("svg")) return;

      box.innerHTML = "";

      var wrapper = document.createElement("div");
      wrapper.innerHTML = svgContent;
      
      var svg = wrapper.querySelector("svg");
      if (svg) {
        svg.style.width = "70%";
        svg.style.height = "70%";
        svg.style.display = "block";
        svg.style.margin = "auto";
      }

      box.style.display = "flex";
      box.style.alignItems = "center";
      box.style.justifyContent = "center";
      box.style.backgroundColor = "#000000";
      box.style.borderRadius = "12px";
      box.style.border = "1px solid #1e293b";

      box.appendChild(wrapper.firstElementChild);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injectSVGs);
  } else {
    injectSVGs();
  }
})();
