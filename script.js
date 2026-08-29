/* ==========================================================================
   CHECKLIST DE OBSERVACIÓN DE CLASE - SCRIPT CON HERRAMIENTA DE RECORTADO,
   REDIMENSIÓN Y PREVISUALIZACIÓN DE SPRITES EN FONDO DE JUEGO
   ========================================================================== */

const CRITERIA_DATA = [
    {
        categoryKey: "inicio",
        categoryTitle: "1. Inicio de la Clase (Saludo y Conexión)",
        shortTitle: "1. Inicio",
        tagClass: "cat-inicio-tag",
        dotColor: "#2563eb",
        items: [
            {
                id: "item_1",
                number: 1,
                icon: "🖐️",
                title: "Saludo y calentamiento",
                item_question: "¿El tutor saludó a los estudiantes y hizo al menos una pregunta amable de conversación o de interés personal?",
                comment: "El tutor saluda a los estudiantes y les pregunta cómo se encuentran antes de iniciar.",
                points: 10,
                targetMin: 2,
                isTransversal: false
            },
            {
                id: "item_3",
                number: 2,
                icon: "🔗",
                title: "Conexión con la clase anterior",
                item_question: "¿El tutor conectó la lección con la clase anterior pidiendo a los estudiantes que recordaran o comentaran lo que hicieron o aprendieron antes?",
                comment: "Pedir a los alumnos recordar o resumir lo trabajado en la sesión previa.",
                points: 10,
                targetMin: 5,
                isTransversal: false
            },
            {
                id: "item_4",
                number: 3,
                icon: "📋",
                title: "Revisión de tarea en casa",
                item_question: "¿El tutor revisó o preguntó sobre una tarea que los estudiantes debían hacer en casa?",
                comment: "Revisar o consultar por la tarea pendiente asignada para el hogar.",
                points: 10,
                targetMin: 8,
                isTransversal: false
            },
            {
                id: "item_2",
                number: 4,
                icon: "💡",
                title: "Objetivo de la lección",
                item_question: "¿El tutor expresó qué aprenderán, practicarán, construirán, crearán, discutirán o serán capaces de hacer en esta lección?",
                comment: "El tutor declara el objetivo explícito de aprendizaje de la sesión al finalizar la etapa inicial.",
                points: 1,
                targetMin: 12,
                isTransversal: false
            }
        ]
    },
    {
        categoryKey: "instruccion",
        categoryTitle: "2. Instrucción y Modelado (Explicación y Práctica)",
        shortTitle: "2. Instrucción",
        tagClass: "cat-instruccion-tag",
        dotColor: "#7c3aed",
        items: [
            {
                id: "item_5",
                number: 5,
                icon: "🧱",
                title: "Instrucciones claras y por partes",
                item_question: "¿El tutor dio instrucciones en pasos pequeños y manejables que los estudiantes pudieran seguir?",
                comment: "Dividir la explicación en pasos clave bien estructurados.",
                points: 1,
                targetMin: 20,
                isTransversal: false
            },
            {
                id: "item_6",
                number: 6,
                icon: "💻",
                title: "Modelado antes del trabajo independiente",
                item_question: "¿El tutor demostró, modeló o explicó la tarea antes de pedir que los estudiantes trabajaran de forma independiente?",
                comment: "Demostrar y explicar el procedimiento en pantalla antes del trabajo autónomo.",
                points: 1,
                targetMin: 30,
                isTransversal: false
            },
            {
                id: "item_18",
                number: 7,
                icon: "✏️",
                title: "Etapa de práctica presente",
                item_question: "¿La lección incluyó una etapa clara de práctica del estudiante?",
                comment: "Otorgar espacio dedicado para que los alumnos apliquen lo aprendido de forma práctica.",
                points: 1,
                targetMin: 45,
                isTransversal: false
            },
            {
                id: "item_19",
                number: 8,
                icon: "🎯",
                title: "Desafío apropiado",
                item_question: "¿Las actividades estuvieron en un nivel de dificultad apropiado para los estudiantes?",
                comment: "Adaptar el nivel de dificultad al ritmo y nivel de los estudiantes.",
                points: 1,
                targetMin: 55,
                isTransversal: true
            }
        ]
    },
    {
        categoryKey: "participacion",
        categoryTitle: "3. Participación e Interacción (Dinámica de Grupo)",
        shortTitle: "3. Participación",
        tagClass: "cat-participacion-tag",
        dotColor: "#059669",
        items: [
            {
                id: "item_7",
                number: 9,
                icon: "👥",
                title: "Participación amplia",
                item_question: "¿El tutor involucró a varios estudiantes en lugar de depender principalmente de uno solo?",
                comment: "Involucrar activamente a múltiples estudiantes durante toda la clase.",
                points: 1,
                targetMin: 60,
                isTransversal: true
            },
            {
                id: "item_8",
                number: 10,
                icon: "👤",
                title: "Trato directo al estudiante",
                item_question: "¿El tutor se dirigió a los estudiantes por su nombre o con una referencia individual clara durante la interacción de aprendizaje?",
                comment: "Llamar a cada alumno directamente por su nombre propio.",
                points: 5,
                targetMin: 25,
                isTransversal: true
            },
            {
                id: "item_12",
                number: 11,
                icon: "👥",
                title: "Participación de al menos dos estudiantes",
                item_question: "¿Al menos dos estudiantes diferentes participaron en la interacción de aprendizaje?",
                comment: "Asegurar que participen al menos 2 estudiantes distintos durante la clase.",
                points: 1,
                targetMin: 35,
                isTransversal: true
            },
            {
                id: "item_13",
                number: 12,
                icon: "🔁",
                title: "Interacción de aprendizaje repetida",
                item_question: "¿El tutor generó interacción de aprendizaje repetida durante la lección?",
                comment: "Múltiples momentos de interacción distribuidos a lo largo de toda la lección.",
                points: 1,
                targetMin: 50,
                isTransversal: true
            }
        ]
    },
    {
        categoryKey: "pedagogia",
        categoryTitle: "4. Pedagogía y Clima del Aula (Retroalimentación)",
        shortTitle: "4. Pedagogía",
        tagClass: "cat-pedagogia-tag",
        dotColor: "#d97706",
        items: [
            {
                id: "item_14",
                number: 13,
                icon: "⭐",
                title: "Retroalimentación útil y formativa",
                item_question: "¿El tutor dio retroalimentación que ayudó a un estudiante a mejorar su trabajo o comprensión?",
                comment: "Proporcionar explicaciones constructivas al corregir errores de los alumnos.",
                points: 5,
                targetMin: 40,
                isTransversal: true
            },
            {
                id: "item_15",
                number: 14,
                icon: "❓",
                title: "Razonamiento del estudiante",
                item_question: "¿El tutor hizo una pregunta de razonamiento/explicación y obtuvo una respuesta relevante del estudiante?",
                comment: "Formular preguntas de razonamiento ('¿por qué ocurre esto?') y permitir que expliquen.",
                points: 1,
                targetMin: 65,
                isTransversal: true
            },
            {
                id: "item_16",
                number: 15,
                icon: "🙂",
                title: "Poca confusión repetida",
                item_question: "¿La lección evitó confusión explícita o estancamiento repetido del estudiante?",
                comment: "Resolver dudas a tiempo para evitar bloqueos persistentes en el aprendizaje.",
                points: 1,
                targetMin: 68,
                isTransversal: true
            },
            {
                id: "item_17",
                number: 16,
                icon: "😐",
                title: "Sin rechazo o aburrimiento explícito",
                item_question: "¿La lección evitó rechazo explícito, aburrimiento o insatisfacción del estudiante?",
                comment: "Mantener el dinamismo y compromiso de los alumnos durante la lección.",
                points: 1,
                targetMin: 70,
                isTransversal: true
            },
            {
                id: "item_20",
                number: 17,
                icon: "🛡️",
                title: "Ambiente de aprendizaje positivo",
                item_question: "¿La lección mantuvo un ambiente de aprendizaje positivo y de apoyo?",
                comment: "Fomentar un clima positivo, de respeto y constante motivación.",
                points: 1,
                targetMin: 72,
                isTransversal: true
            }
        ]
    },
    {
        categoryKey: "cierre",
        categoryTitle: "5. Cierre y Continuidad (Resumen y Próxima Clase)",
        shortTitle: "5. Cierre",
        tagClass: "cat-cierre-tag",
        dotColor: "#e11d48",
        items: [
            {
                id: "item_9",
                number: 18,
                icon: "🔄",
                title: "Resumen o repaso final",
                item_question: "¿La lección incluyó un resumen, repaso o reflexión al final?",
                comment: "Dedicar los minutos finales a una recapitulación o repaso de lo aprendido.",
                points: 10,
                targetMin: 78,
                isTransversal: false
            },
            {
                id: "item_10",
                number: 19,
                icon: "🏠",
                title: "Tarea para la próxima clase",
                item_question: "¿El tutor explicó claramente qué deben hacer los estudiantes en casa antes de la próxima clase?",
                comment: "Explicar y asignar claramente la tarea para el hogar.",
                points: 10,
                targetMin: 83,
                isTransversal: false
            },
            {
                id: "item_11",
                number: 20,
                icon: "📅",
                title: "Continuidad de la próxima lección",
                item_question: "¿El tutor explicó claramente qué aprenderán, construirán, practicarán o trabajarán en la próxima clase?",
                comment: "Anticipar el tema o proyecto de la siguiente lección.",
                points: 10,
                targetMin: 87,
                isTransversal: false
            }
        ]
    }
];

// CLAVES DE STORAGE
const STORAGE_KEY_COMPLETED = "tutorChecklist_v4_completed";
const STORAGE_KEY_NOTES = "tutorChecklist_v4_notes";
const STORAGE_KEY_COLLAPSED = "tutorChecklist_v4_collapsed";
const STORAGE_KEY_THEME = "tutorChecklist_v4_theme";
const STORAGE_KEY_ASSISTANT_TIME = "tutorChecklist_v4_assistant_time";
const STORAGE_KEY_WELCOME_SHOWN = "tutorChecklist_v4_welcome_shown";
const STORAGE_KEY_MANUAL_EXPANDED = "tutorChecklist_v4_manual_expanded";

// GESTIÓN DE ESTADO
let completedItems = [];
let itemNotes = {};
let collapsedCategories = [];
let manualExpandedCategories = [];
let activeStatusFilter = "all";
let activeCategoryFilter = "all";
let searchQuery = "";
let isExpandedAll = false;
let currentTheme = localStorage.getItem(STORAGE_KEY_THEME) || "light";

// ESTADO DEL MODO ASISTENTE
let isAssistantActive = false;
let assistantSeconds = parseInt(localStorage.getItem(STORAGE_KEY_ASSISTANT_TIME)) || 0;
let assistantInterval = null;
let isTimerRunning = false;
let currentSuggestedItem = null;

// ELEMENTOS DEL DOM
const checklistContainer = document.getElementById("checklist");
const progressFill = document.getElementById("progressFill");
const progressPercentageText = document.getElementById("progressPercentage");
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("scoreText");
const footerScoreText = document.getElementById("footerScoreText");
const progressMessage = document.getElementById("progressMessage");
const completedText = document.getElementById("completedText");
const categoryStatsGrid = document.getElementById("categoryStatsGrid");

const searchInput = document.getElementById("searchInput");
const clearSearchBtn = document.getElementById("clearSearch");
const filterTabs = document.querySelectorAll(".filter-tab");
const categoryFilterSelect = document.getElementById("categoryFilter");
const toggleExpandBtn = document.getElementById("toggleExpandBtn");
const expandIcon = document.getElementById("expandIcon");
const expandText = document.getElementById("expandText");

const resetBtn = document.getElementById("resetBtn");
const exportBtn = document.getElementById("exportBtn");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

// MODO ASISTENTE DOM
const assistantToggleBtn = document.getElementById("assistantToggleBtn");
const assistantIcon = document.getElementById("assistantIcon");
const assistantBtnText = document.getElementById("assistantBtnText");

const assistantWidget = document.getElementById("assistantWidget");
const assistantTimerText = document.getElementById("assistantTimerText");
const assistantPlayPauseBtn = document.getElementById("assistantPlayPauseBtn");
const assistantResetTimerBtn = document.getElementById("assistantResetTimerBtn");
const assistantPhaseBadge = document.getElementById("assistantPhaseBadge");
const assistantTimelineProgress = document.getElementById("assistantTimelineProgress");
const assistantPhaseCriteriaCount = document.getElementById("assistantPhaseCriteriaCount");

const suggestionIcon = document.getElementById("suggestionIcon");
const suggestionTag = document.getElementById("suggestionTag");
const suggestionTitle = document.getElementById("suggestionTitle");
const suggestionReason = document.getElementById("suggestionReason");
const suggestionCompleteBtn = document.getElementById("suggestionCompleteBtn");

// MODAL DE BIENVENIDA & TOUR DOM
const welcomeModal = document.getElementById("welcomeModal");
const closeWelcomeModalBtn = document.getElementById("closeWelcomeModalBtn");
const startLessonBtn = document.getElementById("startLessonBtn");
const infoModalBtn = document.getElementById("infoModalBtn");
const startTourBtn = document.getElementById("startTourBtn");
const welcomeTourBtn = document.getElementById("welcomeTourBtn");

const countAllEl = document.getElementById("countAll");
const countPendingEl = document.getElementById("countPending");
const countCompletedEl = document.getElementById("countCompleted");

const exportModal = document.getElementById("exportModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const closeModalBottomBtn = document.getElementById("closeModalBottomBtn");
const reportTextarea = document.getElementById("reportTextarea");
const copyModalBtn = document.getElementById("copyModalBtn");
const downloadTxtBtn = document.getElementById("downloadTxtBtn");

// HERRAMIENTA DE RECORTADO & REDIMENSIÓN DE SPRITE
const spriteToolBtn = document.getElementById("spriteToolBtn");
const spriteToolModal = document.getElementById("spriteToolModal");
const closeSpriteModalBtn = document.getElementById("closeSpriteModalBtn");
const step1Tab = document.getElementById("step1Tab");
const step2Tab = document.getElementById("step2Tab");
const spriteStep1Content = document.getElementById("spriteStep1Content");
const spriteStep2Content = document.getElementById("spriteStep2Content");

const dropzoneBox = document.getElementById("dropzoneBox");
const spriteFileInput = document.getElementById("spriteFileInput");
const cropAreaWrapper = document.getElementById("cropAreaWrapper");
const cropCanvas = document.getElementById("cropCanvas");
const executeCropBtn = document.getElementById("executeCropBtn");

const gameStageCanvas = document.getElementById("gameStageCanvas");
const presetBgButtons = document.querySelectorAll(".bg-preset-btn");
const customBgInput = document.getElementById("customBgInput");

const spriteDimensionsText = document.getElementById("spriteDimensionsText");
const stageDimensionsText = document.getElementById("stageDimensionsText");
const spritePercentageText = document.getElementById("spritePercentageText");

const scaleSlider = document.getElementById("scaleSlider");
const scaleValText = document.getElementById("scaleValText");
const spriteWidthInput = document.getElementById("spriteWidthInput");
const spriteHeightInput = document.getElementById("spriteHeightInput");
const aspectRatioCheck = document.getElementById("aspectRatioCheck");
const resetSizeBtn = document.getElementById("resetSizeBtn");
const backToCropBtn = document.getElementById("backToCropBtn");
const downloadSpriteBtn = document.getElementById("downloadSpriteBtn");

// ESTADO INTERACTIVO DE RECORTADO & ESCALA
let spriteCropState = {
    originalImage: null,
    cropBox: { x: 50, y: 50, width: 200, height: 200 },
    isDragging: false,
    isResizingHandle: null,
    dragStart: { x: 0, y: 0 }
};

let spriteResizeState = {
    croppedImage: null,
    bgType: "space", // space, platform, scratch, grid, custom
    customBgImage: null,
    spritePos: { x: 300, y: 200, width: 120, height: 120 },
    baseWidth: 120,
    baseHeight: 120,
    stageWidth: 800,
    stageHeight: 600,
    isDragging: false,
    isResizingHandle: null,
    dragStart: { x: 0, y: 0 }
};

// EFECTO DE CONFETI LOCALIZADO EN EL ELEMENTO PRESIONADO
function triggerConfettiAtElement(element) {
    if (typeof window.confetti !== 'function') return;

    let x = 0.5;
    let y = 0.5;

    if (element && element.getBoundingClientRect) {
        const rect = element.getBoundingClientRect();
        x = (rect.left + rect.width / 2) / window.innerWidth;
        y = (rect.top + rect.height / 2) / window.innerHeight;
    }

    window.confetti({
        particleCount: 35,
        spread: 60,
        startVelocity: 25,
        origin: { x, y },
        colors: ['#2563eb', '#0d9488', '#059669', '#fbbf24', '#7c3aed', '#ec4899'],
        disableForReducedMotion: true
    });
}

// OBTENER TODOS LOS ELEMENTOS PLANOS
function getAllItems() {
    const list = [];
    CRITERIA_DATA.forEach(cat => {
        cat.items.forEach(item => {
            list.push({ ...item, categoryKey: cat.categoryKey, categoryTitle: cat.categoryTitle });
        });
    });
    return list.sort((a, b) => a.number - b.number);
}

// DEPURAR Y SANITIZAR DATOS DE STORAGE
function loadAndSanitizeStorage() {
    localStorage.removeItem("teacherChecklist");
    localStorage.removeItem("tutorChecklist_completed");
    localStorage.removeItem("tutorChecklist_notes");
    localStorage.removeItem("tutorChecklist_collapsed_cats");
    localStorage.removeItem("kodlandChecklist_v3_completed");
    localStorage.removeItem("kodlandChecklist_v3_notes");
    localStorage.removeItem("kodlandChecklist_v3_collapsed");

    const validIds = getAllItems().map(item => item.id);
    const rawCompleted = JSON.parse(localStorage.getItem(STORAGE_KEY_COMPLETED)) || [];

    completedItems = rawCompleted.filter(id => validIds.includes(id));
    localStorage.setItem(STORAGE_KEY_COMPLETED, JSON.stringify(completedItems));

    itemNotes = JSON.parse(localStorage.getItem(STORAGE_KEY_NOTES)) || {};
    collapsedCategories = JSON.parse(localStorage.getItem(STORAGE_KEY_COLLAPSED)) || [];
    manualExpandedCategories = JSON.parse(localStorage.getItem(STORAGE_KEY_MANUAL_EXPANDED)) || [];
}

// CALCULAR PUNTAJE TOTAL MÁXIMO Y OBTENIDO
function calculateScores() {
    const allItems = getAllItems();
    const maxScore = allItems.reduce((sum, item) => sum + item.points, 0);
    const earnedScore = allItems
        .filter(item => completedItems.includes(item.id))
        .reduce((sum, item) => sum + item.points, 0);

    return { maxScore, earnedScore };
}

// INICIALIZACIÓN
function init() {
    loadAndSanitizeStorage();
    applyTheme(currentTheme);
    setupEventListeners();
    setupSpriteTool();
    checkWelcomeModal();
    render();
}

// COMPROBAR Y MOSTRAR MODAL DE BIENVENIDA
function checkWelcomeModal() {
    const hasSeenWelcome = localStorage.getItem(STORAGE_KEY_WELCOME_SHOWN);
    if (!hasSeenWelcome) {
        welcomeModal.classList.remove("hidden");
    }
}

function openWelcomeModal() {
    welcomeModal.classList.remove("hidden");
}

function closeWelcomeModal() {
    welcomeModal.classList.add("hidden");
    localStorage.setItem(STORAGE_KEY_WELCOME_SHOWN, "true");
}

// TOUR GUIADO CON DRIVER.JS
function launchGuidedTour() {
    closeWelcomeModal();

    if (typeof window.driver === "undefined" || !window.driver.js) {
        alert("El tour guiado está cargando... Por favor, intenta de nuevo en unos segundos.");
        return;
    }

    const driverObj = window.driver.js.driver({
        showProgress: true,
        animate: true,
        allowClose: true,
        doneBtnText: '¡Entendido! 🚀',
        nextBtnText: 'Siguiente →',
        prevBtnText: '← Anterior',
        progressText: 'Paso {{current}} de {{total}}',
        steps: [
            {
                element: '.app-header',
                popover: {
                    title: '👋 ¡Bienvenido a Tutor List Checker!',
                    description: 'Esta es tu barra principal. Aquí verás tu puntaje acumulado en vivo (hasta 79 pts) y el conteo de criterios cumplidos.',
                    side: 'bottom',
                    align: 'start'
                }
            },
            {
                element: '#assistantToggleBtn',
                popover: {
                    title: '🤖 Modo Asistente / 🎮 Modo Manual',
                    description: 'Conmuta entre el Copiloto Inteligente de 90 min y el Modo Manual Libre con animación de giro orbital.',
                    side: 'bottom',
                    align: 'center'
                }
            },
            {
                element: '#spriteToolBtn',
                popover: {
                    title: '🖼️ Herramienta de Sprites para Juegos',
                    description: 'Recorta, redimensiona y visualiza gráficamente la escala exacta de los personajes en relación al fondo del juego.',
                    side: 'bottom',
                    align: 'center'
                }
            },
            {
                element: '#exportBtn',
                popover: {
                    title: '📋 Generador de Reportes',
                    description: 'Al terminar la clase, genera tu informe completo. Podrás copiarlo al portapapeles o descargarlo como archivo .txt con un solo clic.',
                    side: 'bottom',
                    align: 'center'
                }
            },
            {
                element: '#categoryStatsGrid',
                popover: {
                    title: '📂 Filtros por Etapa de Clase',
                    description: 'Filtra rápidamente por Inicio, Instrucción, Participación, Pedagogía o Cierre de la clase.',
                    side: 'bottom',
                    align: 'start'
                }
            },
            {
                element: '.toolbar',
                popover: {
                    title: '🔍 Buscador y Filtros de Estado',
                    description: 'Encuentra criterios por número o palabra clave, y conmuta entre ver Todos, Pendientes o Cumplidos.',
                    side: 'bottom',
                    align: 'center'
                }
            },
            {
                element: '#checklist',
                popover: {
                    title: '✅ Criterios Pedagógicos & Estrellas Doradas',
                    description: 'Haz clic en cualquier criterio para marcarlo como cumplido. ¡Los ítems con estrella ⭐ valen 10 puntos! Y las etiquetas 🔁 son prácticas continuas para toda la clase.',
                    side: 'top',
                    align: 'center'
                }
            }
        ]
    });

    driverObj.drive();
}

// APLICAR TEMA
function applyTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY_THEME, theme);
    themeIcon.textContent = theme === "dark" ? "☀️" : "🌙";
}

// ASEGURAR QUE UNA CATEGORÍA ESTÉ EXPANDIDA
function expandCategory(catKey) {
    if (collapsedCategories.includes(catKey)) {
        collapsedCategories = collapsedCategories.filter(k => k !== catKey);
        localStorage.setItem(STORAGE_KEY_COLLAPSED, JSON.stringify(collapsedCategories));
    }
}

// TOGGLE COLAPSO EN CATEGORÍA
function handleCategoryHeaderClick(catKey, isAllCompleted) {
    if (isAllCompleted) {
        if (manualExpandedCategories.includes(catKey)) {
            manualExpandedCategories = manualExpandedCategories.filter(k => k !== catKey);
        } else {
            manualExpandedCategories.push(catKey);
        }
        localStorage.setItem(STORAGE_KEY_MANUAL_EXPANDED, JSON.stringify(manualExpandedCategories));
    } else {
        if (collapsedCategories.includes(catKey)) {
            collapsedCategories = collapsedCategories.filter(k => k !== catKey);
        } else {
            collapsedCategories.push(catKey);
        }
        localStorage.setItem(STORAGE_KEY_COLLAPSED, JSON.stringify(collapsedCategories));
    }
    render();
}

// LÓGICA DE TIMER Y MODO ASISTENTE / MODO MANUAL CON ANIMACIÓN ORBITAL
function toggleAssistantMode() {
    isAssistantActive = !isAssistantActive;

    if (assistantIcon) {
        assistantIcon.classList.remove("mode-orbiting");
        void assistantIcon.offsetWidth;
        assistantIcon.classList.add("mode-orbiting");

        setTimeout(() => {
            assistantIcon.textContent = isAssistantActive ? "🎮" : "🤖";
        }, 250);
    }

    if (assistantBtnText) {
        assistantBtnText.textContent = isAssistantActive ? "Modo Manual" : "Modo Asistente";
    }

    assistantToggleBtn.classList.toggle("active", isAssistantActive);
    assistantWidget.classList.toggle("hidden", !isAssistantActive);
    document.body.classList.toggle("assistant-focus-active", isAssistantActive);

    if (isAssistantActive && !isTimerRunning) {
        startTimer();
    }
    updateAssistantUI();
}

function startTimer() {
    if (isTimerRunning) return;
    isTimerRunning = true;
    assistantPlayPauseBtn.textContent = "⏸️";
    assistantInterval = setInterval(() => {
        if (assistantSeconds < 5400) {
            assistantSeconds++;
            localStorage.setItem(STORAGE_KEY_ASSISTANT_TIME, assistantSeconds);
            updateAssistantUI();
        } else {
            pauseTimer();
        }
    }, 1000);
}

function pauseTimer() {
    isTimerRunning = false;
    assistantPlayPauseBtn.textContent = "▶️";
    if (assistantInterval) {
        clearInterval(assistantInterval);
        assistantInterval = null;
    }
}

function resetTimer() {
    pauseTimer();
    assistantSeconds = 0;
    localStorage.setItem(STORAGE_KEY_ASSISTANT_TIME, 0);
    updateAssistantUI();
}

// ACTUALIZAR EL STEPPER VISUAL DE 5 FASES
function updatePhaseStepper(activePhaseNum) {
    const nodes = document.querySelectorAll(".step-node");
    nodes.forEach(node => {
        const pNum = parseInt(node.getAttribute("data-phase"));
        const circle = node.querySelector(".node-circle");

        node.classList.remove("completed", "active");

        if (pNum < activePhaseNum) {
            node.classList.add("completed");
            circle.textContent = "✓";
        } else if (pNum === activePhaseNum) {
            node.classList.add("active");
            circle.textContent = pNum;
        } else {
            circle.textContent = pNum;
        }
    });
}

// CÁLCULO DE RECOMENDACIÓN PEDAGÓGICA EN VIVO
function updateAssistantUI() {
    if (!isAssistantActive) return;

    const minutes = Math.floor(assistantSeconds / 60);
    const secs = assistantSeconds % 60;
    const formatMin = String(minutes).padStart(2, '0');
    const formatSec = String(secs).padStart(2, '0');

    assistantTimerText.textContent = `${formatMin}:${formatSec} / 90:00`;
    const timelinePct = Math.min((assistantSeconds / 5400) * 100, 100);
    assistantTimelineProgress.style.width = `${timelinePct}%`;

    const allItems = getAllItems();
    const pendingItems = allItems.filter(item => !completedItems.includes(item.id));

    let phaseNum = 1;
    let phaseName = "";
    let phaseTag = "";
    let suggestedItem = null;
    let suggestionReasonText = "";
    let currentCategoryKey = "inicio";

    if (minutes < 15) {
        phaseNum = 1;
        currentCategoryKey = "inicio";
        phaseName = "🚀 Fase 1: Inicio (Min 0 - 15)";
        phaseTag = `ETAPA DE INICIO`;

        const pendingInicio = pendingItems.filter(i => i.categoryKey === "inicio");
        if (pendingInicio.length > 0) {
            suggestedItem = pendingInicio.find(i => i.targetMin <= minutes + 2) || pendingInicio[0];
            suggestionReasonText = `Enfócate en la bienvenida amable, conexión con la clase anterior, revisión de tareas y declaración del objetivo explícito.`;
        } else {
            const pendingTransversal = pendingItems.filter(i => i.isTransversal && i.number <= 10);
            if (pendingTransversal.length > 0) {
                suggestedItem = pendingTransversal[0];
                suggestionReasonText = `🔁 Criterio continuo: Llama a cada alumno directamente por su nombre durante las interacciones.`;
            } else {
                suggestionIcon.textContent = "⏳";
                suggestionTag.textContent = `FASE 1 COMPLETADA`;
                suggestionTitle.textContent = "¡Etapa Inicial Cumplida!";
                suggestionReason.textContent = "Excelente avance. Tómate este tiempo tranquilo para dar tu explicación. El asistente te acompañará en la siguiente fase.";
                suggestionCompleteBtn.classList.add("hidden");
                currentSuggestedItem = null;
                assistantPhaseBadge.textContent = phaseName;
                updatePhaseStepper(1);
                
                const catObject = CRITERIA_DATA.find(c => c.categoryKey === "inicio");
                assistantPhaseCriteriaCount.textContent = `Etapa: 4/4 cumplidos ✓`;
                return;
            }
        }

    } else if (minutes < 45) {
        phaseNum = 2;
        currentCategoryKey = "instruccion";
        phaseName = "💡 Fase 2: Explicación y Modelado (Min 15 - 45)";
        phaseTag = `DEMOSTRACIÓN Y MODELADO`;

        const pendingInstruccion = pendingItems.filter(i => i.categoryKey === "instruccion" && i.number <= 8);
        if (pendingInstruccion.length > 0) {
            suggestedItem = pendingInstruccion[0];
            suggestionReasonText = `Explica las instrucciones en pasos pequeños y demuestra el procedimiento en pantalla.`;
        } else {
            const pendingTransversal = pendingItems.filter(i => i.isTransversal && i.number <= 13);
            if (pendingTransversal.length > 0) {
                suggestedItem = pendingTransversal[0];
                suggestionReasonText = `🔁 Recordatorio continuo: Proporciona retroalimentación útil y explicaciones claras cuando revises trabajos.`;
            } else {
                suggestionIcon.textContent = "⏳";
                suggestionTag.textContent = `FASE 2 COMPLETADA`;
                suggestionTitle.textContent = "¡Etapa de Explicación Cumplida!";
                suggestionReason.textContent = "Has modelado la clase exitosamente. Acompaña el trabajo independiente de los alumnos.";
                suggestionCompleteBtn.classList.add("hidden");
                currentSuggestedItem = null;
                assistantPhaseBadge.textContent = phaseName;
                updatePhaseStepper(2);

                const catObject = CRITERIA_DATA.find(c => c.categoryKey === "instruccion");
                const doneCatItems = catObject.items.filter(i => completedItems.includes(i.id)).length;
                assistantPhaseCriteriaCount.textContent = `Etapa: ${doneCatItems}/${catObject.items.length} cumplidos`;
                return;
            }
        }

    } else if (minutes < 75) {
        phaseNum = 3;
        currentCategoryKey = "participacion";
        phaseName = "✏️ Fase 3: Práctica e Interacción (Min 45 - 75)";
        phaseTag = `PRÁCTICA DEL ALUMNO`;

        const pendingPractica = pendingItems.filter(i => (i.categoryKey === "instruccion" || i.categoryKey === "participacion" || i.categoryKey === "pedagogia") && i.categoryKey !== "cierre");
        if (pendingPractica.length > 0) {
            suggestedItem = pendingPractica.find(i => i.targetMin <= minutes + 5) || pendingPractica[0];
            const tagText = suggestedItem.isTransversal ? "🔁 Criterio continuo" : "Fase de práctica";
            suggestionReasonText = `${tagText}: Promueve la participación activa y realiza preguntas de razonamiento para guiar a los alumnos.`;
        } else {
            suggestionIcon.textContent = "⏳";
            suggestionTag.textContent = `FASE 3 COMPLETADA`;
            suggestionTitle.textContent = "¡Práctica e Interacción en Curso!";
            suggestionReason.textContent = "Los alumnos están practicando de forma autónoma. El asistente te acompañará con el resumen y cierre al aproximarse el final de la lección.";
            suggestionCompleteBtn.classList.add("hidden");
            currentSuggestedItem = null;
            assistantPhaseBadge.textContent = phaseName;
            updatePhaseStepper(3);

            assistantPhaseCriteriaCount.textContent = `Etapa: Práctica al 100% ✓`;
            return;
        }

    } else if (minutes < 85) {
        phaseNum = 4;
        currentCategoryKey = "cierre";
        phaseName = `🎯 Fase 4: Cierre de Clase (Min 75 - 85)`;

        const pendingCierre = pendingItems.filter(i => i.categoryKey === "cierre");

        if (minutes < 80) {
            phaseTag = `REPASO Y RESUMEN`;
            suggestedItem = pendingCierre.find(i => i.number === 18) || pendingCierre[0] || pendingItems[0];
            suggestionReasonText = `Dedica este momento a realizar un resumen y repaso final de los conocimientos aprendidos.`;
        } else {
            phaseTag = `TAREA PARA EL HOGAR`;
            suggestedItem = pendingCierre.find(i => i.number === 19) || pendingCierre[0] || pendingItems[0];
            suggestionReasonText = `Explica con claridad la tarea asignada para realizar en el hogar.`;
        }

    } else {
        phaseNum = 5;
        currentCategoryKey = "cierre";
        phaseName = `🏁 Fase 5: Final de Lección (Min 85 - 90)`;
        phaseTag = `CONTINUIDAD Y DESPEDIDA`;
        const pendingCierre = pendingItems.filter(i => i.categoryKey === "cierre");
        suggestedItem = pendingCierre.find(i => i.number === 20) || pendingCierre[0] || pendingItems[0];
        suggestionReasonText = `Anticipa a los alumnos qué aprenderán o construirán en la siguiente clase.`;
    }

    assistantPhaseBadge.textContent = phaseName;
    updatePhaseStepper(phaseNum);

    const catObject = CRITERIA_DATA.find(c => c.categoryKey === currentCategoryKey);
    if (catObject) {
        const totalCatItems = catObject.items.length;
        const doneCatItems = catObject.items.filter(i => completedItems.includes(i.id)).length;
        assistantPhaseCriteriaCount.textContent = `Etapa: ${doneCatItems}/${totalCatItems} cumplidos`;
    }

    if (pendingItems.length === 0) {
        suggestionIcon.textContent = "🏆";
        suggestionTag.textContent = "¡CLASE PERFECTA!";
        suggestionTitle.textContent = "¡100% Excelente!";
        suggestionReason.textContent = "Has cumplido todos los 20 criterios pedagógicos respetando la experiencia de aprendizaje.";
        suggestionCompleteBtn.classList.add("hidden");
        currentSuggestedItem = null;
    } else if (suggestedItem) {
        currentSuggestedItem = suggestedItem;
        suggestionIcon.textContent = suggestedItem.icon;
        suggestionTag.textContent = phaseTag;
        suggestionTitle.textContent = `#${suggestedItem.number} ${suggestedItem.title}`;
        suggestionReason.textContent = suggestionReasonText;
        suggestionCompleteBtn.classList.remove("hidden");
    }
}

// ==========================================================================
// LÓGICA INTERACTIVA DE RECORTADO, REDIMENSIÓN Y DIBUJO DE SPRITE EN FONDO DE JUEGO
// ==========================================================================

function setupSpriteTool() {
    spriteToolBtn.addEventListener("click", () => {
        spriteToolModal.classList.remove("hidden");
        switchSpriteStep(1);
    });

    closeSpriteModalBtn.addEventListener("click", () => {
        spriteToolModal.classList.add("hidden");
    });

    step1Tab.addEventListener("click", () => switchSpriteStep(1));
    step2Tab.addEventListener("click", () => switchSpriteStep(2));

    dropzoneBox.addEventListener("click", () => spriteFileInput.click());

    dropzoneBox.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropzoneBox.style.borderColor = "#2563eb";
        dropzoneBox.style.background = "#dbeafe";
    });

    dropzoneBox.addEventListener("dragleave", () => {
        dropzoneBox.style.borderColor = "";
        dropzoneBox.style.background = "";
    });

    dropzoneBox.addEventListener("drop", (e) => {
        e.preventDefault();
        dropzoneBox.style.borderColor = "";
        dropzoneBox.style.background = "";
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleImageUpload(e.dataTransfer.files[0]);
        }
    });

    spriteFileInput.addEventListener("change", (e) => {
        if (e.target.files && e.target.files[0]) {
            handleImageUpload(e.target.files[0]);
        }
    });

    executeCropBtn.addEventListener("click", executeCropAndProceed);

    // Eventos de control de Redimensión en Paso 2
    presetBgButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            presetBgButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            spriteResizeState.bgType = btn.getAttribute("data-bg");
            if (spriteResizeState.bgType === "scratch") {
                spriteResizeState.stageWidth = 480;
                spriteResizeState.stageHeight = 360;
            } else {
                spriteResizeState.stageWidth = 800;
                spriteResizeState.stageHeight = 600;
            }
            renderGameStage();
        });
    });

    customBgInput.addEventListener("change", (e) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const img = new Image();
                img.onload = () => {
                    spriteResizeState.bgType = "custom";
                    spriteResizeState.customBgImage = img;
                    spriteResizeState.stageWidth = img.width || 800;
                    spriteResizeState.stageHeight = img.height || 600;
                    presetBgButtons.forEach(b => b.classList.remove("active"));
                    renderGameStage();
                };
                img.src = event.target.result;
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    });

    scaleSlider.addEventListener("input", (e) => {
        const scalePct = parseInt(e.target.value);
        scaleValText.textContent = `${scalePct}%`;
        
        const newW = Math.round(spriteResizeState.baseWidth * (scalePct / 100));
        const newH = Math.round(spriteResizeState.baseHeight * (scalePct / 100));
        
        spriteResizeState.spritePos.width = Math.max(10, newW);
        spriteResizeState.spritePos.height = Math.max(10, newH);
        
        spriteWidthInput.value = spriteResizeState.spritePos.width;
        spriteHeightInput.value = spriteResizeState.spritePos.height;
        
        renderGameStage();
    });

    spriteWidthInput.addEventListener("input", (e) => {
        const val = parseInt(e.target.value) || 10;
        spriteResizeState.spritePos.width = val;
        if (aspectRatioCheck.checked && spriteResizeState.baseWidth > 0) {
            const ratio = spriteResizeState.baseHeight / spriteResizeState.baseWidth;
            spriteResizeState.spritePos.height = Math.round(val * ratio);
            spriteHeightInput.value = spriteResizeState.spritePos.height;
        }
        updateScaleSliderFromDimensions();
        renderGameStage();
    });

    spriteHeightInput.addEventListener("input", (e) => {
        const val = parseInt(e.target.value) || 10;
        spriteResizeState.spritePos.height = val;
        if (aspectRatioCheck.checked && spriteResizeState.baseHeight > 0) {
            const ratio = spriteResizeState.baseWidth / spriteResizeState.baseHeight;
            spriteResizeState.spritePos.width = Math.round(val * ratio);
            spriteWidthInput.value = spriteResizeState.spritePos.width;
        }
        updateScaleSliderFromDimensions();
        renderGameStage();
    });

    resetSizeBtn.addEventListener("click", () => {
        spriteResizeState.spritePos.width = spriteResizeState.baseWidth;
        spriteResizeState.spritePos.height = spriteResizeState.baseHeight;
        scaleSlider.value = 100;
        scaleValText.textContent = "100%";
        spriteWidthInput.value = spriteResizeState.baseWidth;
        spriteHeightInput.value = spriteResizeState.baseHeight;
        renderGameStage();
    });

    backToCropBtn.addEventListener("click", () => switchSpriteStep(1));
    downloadSpriteBtn.addEventListener("click", downloadAdjustedSpritePNG);

    setupCropCanvasMouseEvents();
    setupGameStageMouseEvents();
}

function switchSpriteStep(stepNum) {
    if (stepNum === 1) {
        step1Tab.classList.add("active");
        step2Tab.classList.remove("active");
        spriteStep1Content.classList.remove("hidden");
        spriteStep2Content.classList.add("hidden");
    } else {
        if (!spriteResizeState.croppedImage) {
            alert("Primero carga y recorta una imagen en el Paso 1.");
            return;
        }
        step1Tab.classList.remove("active");
        step2Tab.classList.add("active");
        spriteStep1Content.classList.add("hidden");
        spriteStep2Content.classList.remove("hidden");
        renderGameStage();
    }
}

function handleImageUpload(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
            spriteCropState.originalImage = img;
            cropAreaWrapper.classList.remove("hidden");
            dropzoneBox.classList.add("hidden");
            initCropCanvas();
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

function initCropCanvas() {
    const img = spriteCropState.originalImage;
    if (!img) return;

    cropCanvas.width = img.width;
    cropCanvas.height = img.height;

    // Inicializar rectángulo de recorte al 80% centrado
    const marginW = Math.round(img.width * 0.1);
    const marginH = Math.round(img.height * 0.1);
    spriteCropState.cropBox = {
        x: marginW,
        y: marginH,
        width: Math.max(40, img.width - marginW * 2),
        height: Math.max(40, img.height - marginH * 2)
    };

    drawCropCanvas();
}

function drawCropCanvas() {
    const img = spriteCropState.originalImage;
    const ctx = cropCanvas.getContext("2d");
    if (!img || !ctx) return;

    ctx.clearRect(0, 0, cropCanvas.width, cropCanvas.height);
    ctx.drawImage(img, 0, 0);

    const cb = spriteCropState.cropBox;

    // Fondo semitransparente oscuro fuera del crop
    ctx.fillStyle = "rgba(15, 23, 42, 0.65)";
    ctx.fillRect(0, 0, cropCanvas.width, cb.y);
    ctx.fillRect(0, cb.y + cb.height, cropCanvas.width, cropCanvas.height - (cb.y + cb.height));
    ctx.fillRect(0, cb.y, cb.x, cb.height);
    ctx.fillRect(cb.x + cb.width, cb.y, cropCanvas.width - (cb.x + cb.width), cb.height);

    // Borde brillante del recuadro
    ctx.strokeStyle = "#38bdf8";
    ctx.lineWidth = 3;
    ctx.strokeRect(cb.x, cb.y, cb.width, cb.height);

    // Esquinas ajustables de arrastre
    const handleSize = 10;
    ctx.fillStyle = "#fbbf24";
    ctx.strokeStyle = "#0f172a";
    ctx.lineWidth = 2;

    const handles = [
        { x: cb.x, y: cb.y },
        { x: cb.x + cb.width, y: cb.y },
        { x: cb.x, y: cb.y + cb.height },
        { x: cb.x + cb.width, y: cb.y + cb.height }
    ];

    handles.forEach(h => {
        ctx.beginPath();
        ctx.arc(h.x, h.y, handleSize / 2 + 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    });
}

function setupCropCanvasMouseEvents() {
    let isDown = false;
    let activeCorner = null;

    function getCanvasCoords(e) {
        const rect = cropCanvas.getBoundingClientRect();
        const scaleX = cropCanvas.width / rect.width;
        const scaleY = cropCanvas.height / rect.height;
        return {
            x: (e.clientX - rect.left) * scaleX,
            y: (e.clientY - rect.top) * scaleY
        };
    }

    cropCanvas.addEventListener("mousedown", (e) => {
        const pt = getCanvasCoords(e);
        const cb = spriteCropState.cropBox;
        const radius = 20;

        // Comprobar esquinas
        if (Math.hypot(pt.x - cb.x, pt.y - cb.y) < radius) activeCorner = "tl";
        else if (Math.hypot(pt.x - (cb.x + cb.width), pt.y - cb.y) < radius) activeCorner = "tr";
        else if (Math.hypot(pt.x - cb.x, pt.y - (cb.y + cb.height)) < radius) activeCorner = "bl";
        else if (Math.hypot(pt.x - (cb.x + cb.width), pt.y - (cb.y + cb.height)) < radius) activeCorner = "br";
        else if (pt.x >= cb.x && pt.x <= cb.x + cb.width && pt.y >= cb.y && pt.y <= cb.y + cb.height) {
            activeCorner = "move";
            spriteCropState.dragStart = { x: pt.x - cb.x, y: pt.y - cb.y };
        } else {
            activeCorner = null;
        }

        if (activeCorner) isDown = true;
    });

    cropCanvas.addEventListener("mousemove", (e) => {
        if (!isDown || !activeCorner) return;
        const pt = getCanvasCoords(e);
        const cb = spriteCropState.cropBox;

        if (activeCorner === "move") {
            cb.x = Math.max(0, Math.min(cropCanvas.width - cb.width, pt.x - spriteCropState.dragStart.x));
            cb.y = Math.max(0, Math.min(cropCanvas.height - cb.height, pt.y - spriteCropState.dragStart.y));
        } else if (activeCorner === "br") {
            cb.width = Math.max(30, Math.min(cropCanvas.width - cb.x, pt.x - cb.x));
            cb.height = Math.max(30, Math.min(cropCanvas.height - cb.y, pt.y - cb.y));
        } else if (activeCorner === "tl") {
            const newW = cb.x + cb.width - pt.x;
            const newH = cb.y + cb.height - pt.y;
            if (newW > 30 && pt.x >= 0) { cb.width = newW; cb.x = pt.x; }
            if (newH > 30 && pt.y >= 0) { cb.height = newH; cb.y = pt.y; }
        }

        drawCropCanvas();
    });

    window.addEventListener("mouseup", () => {
        isDown = false;
        activeCorner = null;
    });
}

function executeCropAndProceed() {
    const cb = spriteCropState.cropBox;
    const offCanvas = document.createElement("canvas");
    offCanvas.width = cb.width;
    offCanvas.height = cb.height;
    const ctx = offCanvas.getContext("2d");

    ctx.drawImage(spriteCropState.originalImage, cb.x, cb.y, cb.width, cb.height, 0, 0, cb.width, cb.height);

    const croppedImg = new Image();
    croppedImg.onload = () => {
        spriteResizeState.croppedImage = croppedImg;
        spriteResizeState.baseWidth = cb.width;
        spriteResizeState.baseHeight = cb.height;
        spriteResizeState.spritePos = {
            x: Math.round((spriteResizeState.stageWidth - cb.width) / 2),
            y: Math.round((spriteResizeState.stageHeight - cb.height) / 2),
            width: cb.width,
            height: cb.height
        };

        scaleSlider.value = 100;
        scaleValText.textContent = "100%";
        spriteWidthInput.value = cb.width;
        spriteHeightInput.value = cb.height;

        triggerConfettiAtElement(executeCropBtn);
        switchSpriteStep(2);
    };
    croppedImg.src = offCanvas.toDataURL("image/png");
}

function updateScaleSliderFromDimensions() {
    if (spriteResizeState.baseWidth > 0) {
        const pct = Math.round((spriteResizeState.spritePos.width / spriteResizeState.baseWidth) * 100);
        scaleSlider.value = pct;
        scaleValText.textContent = `${pct}%`;
    }
}

// RENDERING DEL FONDO DEL JUEGO Y EL SPRITE SOBREPUESTO CON ASISTENCIA VISUAL
function renderGameStage() {
    gameStageCanvas.width = spriteResizeState.stageWidth;
    gameStageCanvas.height = spriteResizeState.stageHeight;
    const ctx = gameStageCanvas.getContext("2d");
    if (!ctx) return;

    // 1. Dibujar el Fondo de Juego Seleccionado
    const w = gameStageCanvas.width;
    const h = gameStageCanvas.height;

    if (spriteResizeState.bgType === "custom" && spriteResizeState.customBgImage) {
        ctx.drawImage(spriteResizeState.customBgImage, 0, 0, w, h);
    } else if (spriteResizeState.bgType === "space") {
        const grad = ctx.createLinearGradient(0, 0, 0, h);
        grad.addColorStop(0, "#0b0f19");
        grad.addColorStop(1, "#1e1b4b");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);

        ctx.fillStyle = "#ffffff";
        for (let i = 0; i < 60; i++) {
            const sx = (Math.sin(i * 99) * 0.5 + 0.5) * w;
            const sy = (Math.cos(i * 33) * 0.5 + 0.5) * h;
            const sr = (i % 3 === 0) ? 2 : 1;
            ctx.beginPath();
            ctx.arc(sx, sy, sr, 0, Math.PI * 2);
            ctx.fill();
        }
    } else if (spriteResizeState.bgType === "platform") {
        ctx.fillStyle = "#38bdf8";
        ctx.fillRect(0, 0, w, h);

        ctx.fillStyle = "#059669";
        ctx.fillRect(0, h - 80, w, 80);
        ctx.fillStyle = "#d97706";
        ctx.fillRect(0, h - 60, w, 60);
    } else if (spriteResizeState.bgType === "scratch") {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, w, h);

        ctx.strokeStyle = "#e2e8f0";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(w / 2, 0); ctx.lineTo(w / 2, h);
        ctx.moveTo(0, h / 2); ctx.lineTo(w, h / 2);
        ctx.stroke();

        ctx.fillStyle = "#64748b";
        ctx.font = "12px sans-serif";
        ctx.fillText("Escenario Scratch (480 x 360 px)", 10, 20);
    } else {
        // Cuadrícula Píxel Grid
        ctx.fillStyle = "#1e293b";
        ctx.fillRect(0, 0, w, h);

        ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
        ctx.lineWidth = 1;
        for (let x = 0; x < w; x += 32) {
            ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
        }
        for (let y = 0; y < h; y += 32) {
            ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
        }
    }

    // 2. Dibujar el Sprite Recortado sobre el Fondo
    const sp = spriteResizeState.spritePos;
    if (spriteResizeState.croppedImage) {
        ctx.drawImage(spriteResizeState.croppedImage, sp.x, sp.y, sp.width, sp.height);
    }

    // 3. Dibujar Guías Visuales y Manijas de Redimensión en Esquinas
    ctx.strokeStyle = "#38bdf8";
    ctx.lineWidth = 2;
    ctx.setLineDash([4, 4]);
    ctx.strokeRect(sp.x, sp.y, sp.width, sp.height);
    ctx.setLineDash([]);

    const handleSize = 8;
    ctx.fillStyle = "#fbbf24";
    ctx.strokeStyle = "#0f172a";
    ctx.lineWidth = 1.5;

    const corners = [
        { x: sp.x, y: sp.y },
        { x: sp.x + sp.width, y: sp.y },
        { x: sp.x, y: sp.y + sp.height },
        { x: sp.x + sp.width, y: sp.y + sp.height }
    ];

    corners.forEach(c => {
        ctx.beginPath();
        ctx.arc(c.x, c.y, handleSize / 2 + 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    });

    // 4. Actualizar Estadísticas Gráficas de Proporción
    spriteDimensionsText.textContent = `${sp.width} px × ${sp.height} px`;
    stageDimensionsText.textContent = `${w} px × ${h} px`;
    const widthRatioPct = ((sp.width / w) * 100).toFixed(1);
    spritePercentageText.textContent = `${widthRatioPct}% del ancho del juego`;
}

function setupGameStageMouseEvents() {
    let isDown = false;
    let activeCorner = null;

    function getStageCoords(e) {
        const rect = gameStageCanvas.getBoundingClientRect();
        const scaleX = gameStageCanvas.width / rect.width;
        const scaleY = gameStageCanvas.height / rect.height;
        return {
            x: (e.clientX - rect.left) * scaleX,
            y: (e.clientY - rect.top) * scaleY
        };
    }

    gameStageCanvas.addEventListener("mousedown", (e) => {
        const pt = getStageCoords(e);
        const sp = spriteResizeState.spritePos;
        const radius = 20;

        if (Math.hypot(pt.x - (sp.x + sp.width), pt.y - (sp.y + sp.height)) < radius) activeCorner = "br";
        else if (Math.hypot(pt.x - sp.x, pt.y - sp.y) < radius) activeCorner = "tl";
        else if (pt.x >= sp.x && pt.x <= sp.x + sp.width && pt.y >= sp.y && pt.y <= sp.y + sp.height) {
            activeCorner = "move";
            spriteResizeState.dragStart = { x: pt.x - sp.x, y: pt.y - sp.y };
        } else {
            activeCorner = null;
        }

        if (activeCorner) isDown = true;
    });

    gameStageCanvas.addEventListener("mousemove", (e) => {
        if (!isDown || !activeCorner) return;
        const pt = getStageCoords(e);
        const sp = spriteResizeState.spritePos;

        if (activeCorner === "move") {
            sp.x = pt.x - spriteResizeState.dragStart.x;
            sp.y = pt.y - spriteResizeState.dragStart.y;
        } else if (activeCorner === "br") {
            const newW = Math.max(10, pt.x - sp.x);
            const newH = Math.max(10, pt.y - sp.y);
            sp.width = Math.round(newW);
            sp.height = Math.round(newH);
            spriteWidthInput.value = sp.width;
            spriteHeightInput.value = sp.height;
            updateScaleSliderFromDimensions();
        }

        renderGameStage();
    });

    window.addEventListener("mouseup", () => {
        isDown = false;
        activeCorner = null;
    });
}

function downloadAdjustedSpritePNG() {
    if (!spriteResizeState.croppedImage) return;

    const sp = spriteResizeState.spritePos;
    const exportCanvas = document.createElement("canvas");
    exportCanvas.width = sp.width;
    exportCanvas.height = sp.height;

    const ctx = exportCanvas.getContext("2d");
    ctx.drawImage(spriteResizeState.croppedImage, 0, 0, sp.width, sp.height);

    const link = document.createElement("a");
    link.download = `sprite_ajustado_${sp.width}x${sp.height}.png`;
    link.href = exportCanvas.toDataURL("image/png");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    triggerConfettiAtElement(downloadSpriteBtn);
}

// TOGGLE ITEM CHECK CON CONFETI
function toggleItem(id, event) {
    const isNowCompleted = !completedItems.includes(id);
    
    if (isNowCompleted) {
        completedItems.push(id);
        if (event && event.currentTarget) {
            triggerConfettiAtElement(event.currentTarget);
        }
    } else {
        completedItems = completedItems.filter(itemId => itemId !== id);
    }
    
    localStorage.setItem(STORAGE_KEY_COMPLETED, JSON.stringify(completedItems));
    render();
    if (isAssistantActive) updateAssistantUI();
}

// SAVE NOTE
function saveNote(id, noteContent) {
    itemNotes[id] = noteContent;
    localStorage.setItem(STORAGE_KEY_NOTES, JSON.stringify(itemNotes));
}

// RENDERIZADO PRINCIPAL
function render() {
    const allItems = getAllItems();
    const totalCount = allItems.length;
    const completedCount = completedItems.length;
    const pendingCount = totalCount - completedCount;

    countAllEl.textContent = totalCount;
    countPendingEl.textContent = pendingCount;
    countCompletedEl.textContent = completedCount;

    updateProgressUI(totalCount, completedCount);
    renderCategoryStrip();
    renderChecklistCategories();
    if (isAssistantActive) updateAssistantUI();
}

// ACTUALIZAR PUNTAJE Y BARRA DE PROGRESO
function updateProgressUI(total, completed) {
    const { maxScore, earnedScore } = calculateScores();

    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    progressFill.style.width = `${percentage}%`;
    progressPercentageText.textContent = `${percentage}%`;
    progressText.textContent = `${completed} / ${total}`;
    scoreText.textContent = `${earnedScore} / ${maxScore} pts`;
    footerScoreText.textContent = `${earnedScore} / ${maxScore} Puntos`;
    completedText.textContent = `${completed} de ${total} criterios completados`;

    if (percentage === 0) progressMessage.textContent = "¡Cada detalle cuenta para crear experiencias de aprendizaje increíbles!";
    else if (percentage < 40) progressMessage.textContent = "¡Buen inicio! Asegura los criterios de 10 puntos clave.";
    else if (percentage < 80) progressMessage.textContent = "¡Excelente avance! Promueve la participación y el razonamiento.";
    else if (percentage < 100) progressMessage.textContent = "¡Casi listo! No olvides la recapitulación, tarea y continuidad.";
    else progressMessage.textContent = "🎉 ¡100% Excelente lección! Puntaje máximo alcanzado.";
}

// RENDERIZAR TIRA DE CATEGORÍAS
function renderCategoryStrip() {
    categoryStatsGrid.innerHTML = "";

    const allChip = document.createElement("div");
    allChip.className = `cat-strip-badge ${activeCategoryFilter === "all" ? "active" : ""}`;
    allChip.innerHTML = `<span class="cat-dot" style="background:#64748b"></span> Todas (${completedItems.length}/${getAllItems().length})`;
    allChip.addEventListener("click", () => {
        activeCategoryFilter = "all";
        categoryFilterSelect.value = "all";
        collapsedCategories = [];
        localStorage.setItem(STORAGE_KEY_COLLAPSED, JSON.stringify(collapsedCategories));
        render();
    });
    categoryStatsGrid.appendChild(allChip);

    CRITERIA_DATA.forEach(cat => {
        const catTotal = cat.items.length;
        const catDone = cat.items.filter(item => completedItems.includes(item.id)).length;
        const isActive = activeCategoryFilter === cat.categoryKey;
        const isAllDone = catDone === catTotal && catTotal > 0;

        const chip = document.createElement("div");
        chip.className = `cat-strip-badge ${isActive ? "active" : ""} ${isAllDone ? "strip-completed" : ""}`;
        chip.innerHTML = `
            <span class="cat-dot" style="background:${cat.dotColor}"></span>
            ${cat.shortTitle}
            <span class="cat-num-tag">${isAllDone ? "✓" : `(${catDone}/${catTotal})`}</span>
        `;

        chip.addEventListener("click", () => {
            activeCategoryFilter = cat.categoryKey;
            categoryFilterSelect.value = cat.categoryKey;
            expandCategory(cat.categoryKey);
            render();
        });

        categoryStatsGrid.appendChild(chip);
    });
}

// RENDERIZAR CHECKLIST CON OCULTAMIENTO AUTOMÁTICO DE CATEGORÍAS COMPLETADAS
function renderChecklistCategories() {
    checklistContainer.innerHTML = "";
    let visibleItemsCount = 0;

    CRITERIA_DATA.forEach(category => {
        if (activeCategoryFilter !== "all" && category.categoryKey !== activeCategoryFilter) {
            return;
        }

        const filteredItems = category.items.filter(item => {
            const isCompleted = completedItems.includes(item.id);
            if (activeStatusFilter === "pending" && isCompleted) return false;
            if (activeStatusFilter === "completed" && !isCompleted) return false;

            if (searchQuery.length > 0) {
                const matchNumber = item.number.toString() === searchQuery;
                const matchTitle = item.title.toLowerCase().includes(searchQuery);
                const matchQuestion = item.item_question.toLowerCase().includes(searchQuery);
                return matchNumber || matchTitle || matchQuestion;
            }
            return true;
        });

        if (filteredItems.length === 0) return;

        visibleItemsCount += filteredItems.length;

        const catDoneCount = category.items.filter(item => completedItems.includes(item.id)).length;
        const isAllCompleted = (catDoneCount === category.items.length) && (category.items.length > 0);
        
        const isManuallyExpanded = manualExpandedCategories.includes(category.categoryKey);
        const isCatCollapsed = isAllCompleted ? !isManuallyExpanded : collapsedCategories.includes(category.categoryKey);

        const categoryGroup = document.createElement("div");
        categoryGroup.className = `category-group ${isAllCompleted ? "category-completed" : ""}`;

        const categoryHeader = document.createElement("div");
        categoryHeader.className = `category-header ${isCatCollapsed ? "is-collapsed" : ""} ${isAllCompleted ? "is-completed-header" : ""}`;
        categoryHeader.setAttribute("title", isCatCollapsed ? "Haz clic para desplegar" : "Haz clic para colapsar");

        const statusBadgeHtml = isAllCompleted 
            ? `<span class="category-completed-badge">✓ Completada</span>`
            : `<span class="category-count">${catDoneCount} / ${category.items.length}</span>`;

        categoryHeader.innerHTML = `
            <div class="category-title-badge">
                <span class="cat-dot" style="background:${category.dotColor}"></span>
                <h3>${category.categoryTitle}</h3>
            </div>
            <div class="category-header-right">
                ${statusBadgeHtml}
                <span class="cat-collapse-arrow">▼</span>
            </div>
        `;

        categoryHeader.addEventListener("click", () => {
            handleCategoryHeaderClick(category.categoryKey, isAllCompleted);
        });

        categoryGroup.appendChild(categoryHeader);

        const itemsContainer = document.createElement("div");
        itemsContainer.className = `category-items ${isCatCollapsed ? "auto-collapsed hidden" : ""}`;

        filteredItems.forEach(item => {
            const isChecked = completedItems.includes(item.id);
            const userNote = itemNotes[item.id] || "";
            const isHighPriority = item.points === 10;
            const isTransversal = item.isTransversal;

            const itemCard = document.createElement("div");
            itemCard.className = `check-item ${isChecked ? "completed" : ""} ${isHighPriority ? "high-priority" : ""}`;

            let ptsBadgeHtml = "";
            if (isHighPriority) {
                ptsBadgeHtml = `<span class="pts-badge high-priority-pts" title="¡Criterio de alto valor (10 pts)!"><span class="gold-star-icon">⭐</span> +10 pts</span>`;
            } else {
                ptsBadgeHtml = `<span class="pts-badge">+${item.points} pts</span>`;
            }

            const transversalBadgeHtml = isTransversal 
                ? `<span class="transversal-badge" title="Criterio continuo: Se aplica durante toda la lección de 90 min">🔁 Toda la clase</span>`
                : "";

            itemCard.innerHTML = `
                <div class="item-main">
                    <div class="item-left">
                        <span class="item-number-badge">#${item.number}</span>
                        <div class="checkbox-custom">
                            <svg viewBox="0 0 24 24">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </div>
                        <span class="item-icon">${item.icon}</span>
                        <div class="item-text-wrap">
                            <span class="item-title">${item.title}</span>
                            ${ptsBadgeHtml}
                            ${transversalBadgeHtml}
                        </div>
                    </div>

                    <div class="item-right-actions">
                        <button class="toggle-details-btn" title="Ver pregunta y evidencia">
                            ${isExpandedAll ? "🔼" : "ℹ️"}
                        </button>
                    </div>
                </div>

                <div class="item-details-accordion ${isExpandedAll ? "" : "hidden"}">
                    <div class="detail-box">
                        <span class="detail-label">❓ Pregunta Evaluada</span>
                        <div class="detail-text">${item.item_question}</div>
                    </div>
                    <div class="detail-box evidence">
                        <span class="detail-label">📌 Evidencia de Referencia (Comentario)</span>
                        <div class="detail-text">${item.comment}</div>
                    </div>
                    <div class="notes-input-box">
                        <span class="detail-label">✏️ Nota de la Lección</span>
                        <textarea placeholder="Apuntar notas de la clase..." data-id="${item.id}">${userNote}</textarea>
                    </div>
                </div>
            `;

            const mainArea = itemCard.querySelector(".item-main");
            const toggleBtn = itemCard.querySelector(".toggle-details-btn");
            const detailsAccordion = itemCard.querySelector(".item-details-accordion");
            const notesTextarea = itemCard.querySelector("textarea");

            mainArea.addEventListener("click", (e) => {
                if (e.target.closest(".toggle-details-btn")) {
                    e.stopPropagation();
                    detailsAccordion.classList.toggle("hidden");
                    toggleBtn.textContent = detailsAccordion.classList.contains("hidden") ? "ℹ️" : "🔼";
                    return;
                }
                toggleItem(item.id, e);
            });

            notesTextarea.addEventListener("click", (e) => e.stopPropagation());
            notesTextarea.addEventListener("input", (e) => {
                saveNote(item.id, e.target.value);
            });

            itemsContainer.appendChild(itemCard);
        });

        categoryGroup.appendChild(itemsContainer);
        checklistContainer.appendChild(categoryGroup);
    });

    if (visibleItemsCount === 0) {
        checklistContainer.innerHTML = `
            <div class="empty-state">
                <p>🔍 No se encontraron criterios con estos filtros.</p>
            </div>
        `;
    }
}

// EXPORTAR REPORTE
function openExportModal() {
    const { maxScore, earnedScore } = calculateScores();
    const allItems = getAllItems();
    const completedCount = completedItems.length;
    const totalCount = allItems.length;
    const percentage = Math.round((completedCount / totalCount) * 100);

    const now = new Date();
    const dateStr = now.toLocaleDateString("es-ES", { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });

    let report = `====================================\n`;
    report += `CHECKLIST DE OBSERVACIÓN DE CLASE\n`;
    report += `Fecha: ${dateStr}\n`;
    report += `Criterios Cumplidos: ${completedCount} / ${totalCount} (${percentage}%)\n`;
    report += `PUNTAJE TOTAL: ${earnedScore} / ${maxScore} PUNTOS\n`;
    report += `====================================\n\n`;

    CRITERIA_DATA.forEach(cat => {
        report += `[ ${cat.categoryTitle.toUpperCase()} ]\n`;
        cat.items.forEach(item => {
            const isDone = completedItems.includes(item.id);
            const status = isDone ? "[✓]" : "[ ]";
            const star = item.points === 10 ? "⭐ " : "";
            const continuousTag = item.isTransversal ? " [🔁 Toda la clase]" : "";
            const note = itemNotes[item.id] ? ` (Nota: ${itemNotes[item.id]})` : "";
            report += `${status} #${item.number} ${star}${item.title} (+${item.points} pts)${continuousTag}${note}\n`;
        });
        report += `\n`;
    });

    reportTextarea.value = report;
    exportModal.classList.remove("hidden");
}

function copyReportToClipboard() {
    reportTextarea.select();
    navigator.clipboard.writeText(reportTextarea.value).then(() => {
        const originalText = copyModalBtn.innerHTML;
        copyModalBtn.innerHTML = `<span>✅</span> ¡Copiado!`;
        setTimeout(() => { copyModalBtn.innerHTML = originalText; }, 1800);
    });
}

document.addEventListener("DOMContentLoaded", init);
