/* ==========================================================================
   CHECKLIST DE OBSERVACIÓN DE CLASE - SCRIPT CON VISITAS REALES CON COUNTERAPI V2
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
                title: "Calentamiento y saludo",
                item_question: "¿El tutor saludó a los estudiantes e hizo al menos una pregunta amistosa de conversación informal o de chequeo personal?",
                comment: "El tutor saluda a los estudiantes y les pregunta cómo se encuentran antes de iniciar.",
                points: 10,
                targetMin: 2,
                isTransversal: false
            },
            {
                id: "item_3",
                number: 2,
                icon: "🔗",
                title: "Conexión con la lección anterior",
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
                title: "Revisión de la tarea en casa",
                item_question: "¿El tutor revisó o preguntó sobre una tarea que se esperaba que los estudiantes hicieran en casa?",
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
                item_question: "¿El tutor indicó qué aprenderán, practicarán, construirán, crearán, discutirán o serán capaces de hacer los estudiantes en esta lección?",
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
                title: "Segmentación clara de instrucciones",
                item_question: "¿El tutor dio instrucciones en pasos breves y manejables que los estudiantes pudieran seguir?",
                comment: "Dividir la explicación en pasos clave bien estructurados.",
                points: 1,
                targetMin: 20,
                isTransversal: false
            },
            {
                id: "item_18",
                number: 6,
                icon: "✏️",
                title: "Etapa de práctica presente",
                item_question: "¿La lección incluyó una etapa clara de práctica para los estudiantes?",
                comment: "Otorgar espacio dedicado para que los alumnos apliquen lo aprendido de forma práctica.",
                points: 1,
                targetMin: 45,
                isTransversal: false
            },
            {
                id: "item_19",
                number: 7,
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
                number: 8,
                icon: "👥",
                title: "Participación amplia",
                item_question: "¿El tutor involucró a múltiples estudiantes en lugar de depender principalmente de un estudiante activo?",
                comment: "Involucrar activamente a múltiples estudiantes durante toda la clase.",
                points: 1,
                targetMin: 60,
                isTransversal: true
            },
            {
                id: "item_8",
                number: 9,
                icon: "👤",
                title: "Dirigirse directamente a los estudiantes",
                item_question: "¿El tutor se dirigió directamente a los estudiantes por su nombre o mediante una referencia individual clara durante la interacción de aprendizaje?",
                comment: "Llamar a cada alumno directamente por su nombre propio.",
                points: 5,
                targetMin: 25,
                isTransversal: true
            },
            {
                id: "item_12",
                number: 10,
                icon: "👥",
                title: "Participación de múltiples estudiantes en el aprendizaje",
                item_question: "¿Participaron al menos dos estudiantes diferentes en la interacción de aprendizaje?",
                comment: "Asegurar que participen al menos 2 estudiantes distintos durante la clase.",
                points: 1,
                targetMin: 35,
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
                number: 11,
                icon: "⭐",
                title: "Retroalimentación pedagógicamente útil",
                item_question: "¿El tutor brindó retroalimentación que ayudó al estudiante a mejorar su trabajo o comprensión?",
                comment: "Proporcionar explicaciones constructivas al corregir errores de los alumnos.",
                points: 5,
                targetMin: 40,
                isTransversal: true
            },
            {
                id: "item_15",
                number: 12,
                icon: "❓",
                title: "Razonamiento del estudiante promovido",
                item_question: "¿El tutor hizo una pregunta de razonamiento/explicación y obtuvo una respuesta relevante del estudiante?",
                comment: "Formular preguntas de razonamiento ('¿por qué ocurre esto?') y permitir que expliquen.",
                points: 1,
                targetMin: 65,
                isTransversal: true
            },
            {
                id: "item_20",
                number: 13,
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
                number: 14,
                icon: "🔄",
                title: "Recapitulación o resumen de cierre",
                item_question: "¿La lección incluyó una recapitulación, repaso o reflexión hacia el final?",
                comment: "Dedicar los minutos finales a una recapitulación o repaso de lo aprendido.",
                points: 10,
                targetMin: 78,
                isTransversal: false
            },
            {
                id: "item_10",
                number: 15,
                icon: "🏠",
                title: "Tarea para la próxima clase",
                item_question: "¿El tutor explicó claramente qué debían hacer los estudiantes en casa antes de la próxima clase?",
                comment: "Explicar y asignar claramente la tarea para el hogar.",
                points: 10,
                targetMin: 83,
                isTransversal: false
            },
            {
                id: "item_11",
                number: 16,
                icon: "📅",
                title: "Continuidad con la siguiente lección",
                item_question: "¿El tutor indicó claramente qué aprenderán, construirán, practicarán o trabajarán los estudiantes en la siguiente lección?",
                comment: "Anticipar el tema o proyecto de la siguiente lección.",
                points: 10,
                targetMin: 87,
                isTransversal: false
            }
        ]
    }
];

// CLAVES DE STORAGE
const STORAGE_KEY_COMPLETED = "tutorChecklist_v5_completed";
const STORAGE_KEY_NOTES = "tutorChecklist_v5_notes";
const STORAGE_KEY_COLLAPSED = "tutorChecklist_v5_collapsed";
const STORAGE_KEY_THEME = "tutorChecklist_v5_theme";
const STORAGE_KEY_ASSISTANT_TIME = "tutorChecklist_v5_assistant_time";
const STORAGE_KEY_WELCOME_SHOWN = "tutorChecklist_v5_welcome_shown";
const STORAGE_KEY_CLASS_DURATION = "tutorChecklist_v5_class_duration";

// ==========================================================================
// CONTADOR DE VISITAS EN VIVO CON COUNTERAPI V2
// Workspace: andres-erazos-team-5506 | Slug: count-listchecker
// ==========================================================================
const COUNTER_API_BASE_URL = "https://api.counterapi.dev/v2/andres-erazos-team-5506/count-listchecker";
const COUNTER_API_TOKEN = "hut_RgMiTYRz64ucJFkNESQwl7GLCPcbo7VEHPBCGuBM";

// GESTIÓN DE ESTADO
let completedItems = [];
let itemNotes = {};
let collapsedCategories = [];
let activeStatusFilter = "all";
let activeCategoryFilter = "all";
let isExpandedAll = false;
let currentTheme = localStorage.getItem(STORAGE_KEY_THEME) || "light";
let classDurationMin = parseInt(localStorage.getItem(STORAGE_KEY_CLASS_DURATION)) || 90;

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
const visitCountText = document.getElementById("visitCountText");

const filterTabs = document.querySelectorAll(".filter-tab");
const durationBtns = document.querySelectorAll(".duration-btn");
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

const STORAGE_KEY_LAST_VISIT_TIME = "tutorChecklist_v5_last_visit_timestamp";
const ONE_HOUR_MS = 60 * 60 * 1000; // 1 hora (60 minutos)

const STORAGE_KEY_VISITS_CACHE = "tutor_count_listchecker_visits";

// CONEXIÓN DIRECTA A COUNTERAPI V2 (INCREMENTA Y CONECTA EN VIVO EN CADA RECARGA DE PÁGINA)
async function initVisitCounter() {
    if (!visitCountText) return;

    // Carga inicial desde caché local si existe
    let currentCount = parseInt(localStorage.getItem(STORAGE_KEY_VISITS_CACHE)) || 0;
    if (currentCount > 0) {
        visitCountText.textContent = `${currentCount.toLocaleString()} visitas`;
    } else {
        visitCountText.textContent = `... visitas`;
    }

    try {
        const targetUrl = `${COUNTER_API_BASE_URL}/up?token=${COUNTER_API_TOKEN}&_t=${Date.now()}`;
        const res = await fetch(targetUrl);

        if (res.ok) {
            const json = await res.json();
            if (json.data && typeof json.data.up_count === "number") {
                currentCount = json.data.up_count;
                localStorage.setItem(STORAGE_KEY_VISITS_CACHE, currentCount);
                console.log(`✅ Nueva visita contabilizada en CounterAPI v2 (Total Real: ${currentCount}).`);
                visitCountText.textContent = `${currentCount.toLocaleString()} visitas`;
            }
        }

    } catch (error) {
        console.warn("Error leyendo contador de visitas CounterAPI v2:", error);
        const cached = localStorage.getItem(STORAGE_KEY_VISITS_CACHE) || 0;
        visitCountText.textContent = `${Number(cached).toLocaleString()} visitas`;
    }
}

// CAMBIAR DURACIÓN DE CLASE (60 MIN O 90 MIN)
function setClassDuration(duration) {
    if (duration !== 60 && duration !== 90) return;
    classDurationMin = duration;
    localStorage.setItem(STORAGE_KEY_CLASS_DURATION, duration);

    const maxSec = classDurationMin * 60;
    if (assistantSeconds > maxSec) {
        assistantSeconds = maxSec;
        localStorage.setItem(STORAGE_KEY_ASSISTANT_TIME, assistantSeconds);
    }

    updatePhaseStepperLabels();
    if (isAssistantActive) updateAssistantUI();
}

// ACTUALIZAR ETIQUETAS E HITOS DE FASES SEGÚN DURACIÓN
function updatePhaseStepperLabels() {
    const is60 = classDurationMin === 60;
    const stepperNodes = document.querySelectorAll("#assistantPhaseStepper .step-node");
    
    if (stepperNodes.length >= 5) {
        stepperNodes[0].querySelector(".node-label").textContent = is60 ? "Inicio (0-10')" : "Inicio (0-15')";
        stepperNodes[1].querySelector(".node-label").textContent = is60 ? "Explicación (10-30')" : "Explicación (15-45')";
        stepperNodes[2].querySelector(".node-label").textContent = is60 ? "Práctica (30-50')" : "Práctica (45-75')";
        stepperNodes[3].querySelector(".node-label").textContent = is60 ? "Cierre (50-57')" : "Cierre (75-85')";
        stepperNodes[4].querySelector(".node-label").textContent = is60 ? "Final (57-60')" : "Final (85-90')";
    }

    const milestonesContainer = document.querySelector(".timeline-milestones");
    if (milestonesContainer) {
        milestonesContainer.innerHTML = is60
            ? `<span class="milestone-dot" style="left: 0%;">0'</span>
               <span class="milestone-dot" style="left: 16.6%;">10'</span>
               <span class="milestone-dot" style="left: 50%;">30'</span>
               <span class="milestone-dot" style="left: 83.3%;">50'</span>
               <span class="milestone-dot" style="left: 100%;">60'</span>`
            : `<span class="milestone-dot" style="left: 0%;">0'</span>
               <span class="milestone-dot" style="left: 16.6%;">15'</span>
               <span class="milestone-dot" style="left: 50%;">45'</span>
               <span class="milestone-dot" style="left: 83.3%;">75'</span>
               <span class="milestone-dot" style="left: 100%;">90'</span>`;
    }

    const headerDurationText = document.getElementById("headerDurationText");
    if (headerDurationText) headerDurationText.textContent = classDurationMin;

    const assistantLiveDurationText = document.getElementById("assistantLiveDurationText");
    if (assistantLiveDurationText) assistantLiveDurationText.textContent = classDurationMin;

    const dBtns = document.querySelectorAll(".duration-btn");
    dBtns.forEach(btn => {
        btn.classList.toggle("active", parseInt(btn.getAttribute("data-duration")) === classDurationMin);
    });
}

// EFECTO DE CONFETI LOCALIZADO
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
    localStorage.removeItem("tutorChecklist_v4_completed");

    const validIds = getAllItems().map(item => item.id);
    const rawCompleted = JSON.parse(localStorage.getItem(STORAGE_KEY_COMPLETED)) || [];

    completedItems = rawCompleted.filter(id => validIds.includes(id));
    localStorage.setItem(STORAGE_KEY_COMPLETED, JSON.stringify(completedItems));

    itemNotes = JSON.parse(localStorage.getItem(STORAGE_KEY_NOTES)) || {};
    collapsedCategories = JSON.parse(localStorage.getItem(STORAGE_KEY_COLLAPSED)) || [];
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

// INICIALIZACIÓN PRINCIPAL
function init() {
    loadAndSanitizeStorage();
    applyTheme(currentTheme);
    setupEventListeners();
    updatePhaseStepperLabels();
    checkWelcomeModal();
    render();
    initVisitCounter();
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
                    description: 'Esta es tu barra principal. Aquí verás tu puntaje acumulado en vivo (hasta 78 pts), el conteo de 16 criterios y las visitas reales en tiempo real.',
                    side: 'bottom',
                    align: 'start'
                }
            },
            {
                element: '#assistantToggleBtn',
                popover: {
                    title: '🤖 Modo Asistente / 🎮 Modo Manual',
                    description: 'Conmuta entre el Copiloto Inteligente (para clases de 60 o 90 min) y el Modo Manual Libre con animación orbital.',
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
                    title: '🏷️ Filtros de Estado',
                    description: 'Conmuta entre ver Todos, Pendientes o Cumplidos.',
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
function handleCategoryHeaderClick(catKey) {
    if (collapsedCategories.includes(catKey)) {
        collapsedCategories = collapsedCategories.filter(k => k !== catKey);
    } else {
        collapsedCategories.push(catKey);
    }
    localStorage.setItem(STORAGE_KEY_COLLAPSED, JSON.stringify(collapsedCategories));
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
        const maxSec = classDurationMin * 60;
        if (assistantSeconds < maxSec) {
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

// CÁLCULO DE RECOMENDACIÓN PEDAGÓGICA (DINÁMICO PARA 60 MIN O 90 MIN)
function updateAssistantUI() {
    if (!isAssistantActive) return;

    const maxSeconds = classDurationMin * 60;
    const minutes = Math.floor(assistantSeconds / 60);
    const secs = assistantSeconds % 60;
    const formatMin = String(minutes).padStart(2, '0');
    const formatSec = String(secs).padStart(2, '0');

    assistantTimerText.textContent = `${formatMin}:${formatSec} / ${classDurationMin}:00`;
    const timelinePct = Math.min((assistantSeconds / maxSeconds) * 100, 100);
    assistantTimelineProgress.style.width = `${timelinePct}%`;

    const allItems = getAllItems();
    const pendingItems = allItems.filter(item => !completedItems.includes(item.id));

    let phaseNum = 1;
    let phaseName = "";
    let phaseTag = "";
    let suggestedItem = null;
    let suggestionReasonText = "";
    let currentCategoryKey = "inicio";

    const p1Max = classDurationMin === 60 ? 10 : 15;
    const p2Max = classDurationMin === 60 ? 30 : 45;
    const p3Max = classDurationMin === 60 ? 50 : 75;
    const p4Max = classDurationMin === 60 ? 57 : 85;

    if (minutes < p1Max) {
        phaseNum = 1;
        currentCategoryKey = "inicio";
        phaseName = `🚀 Fase 1: Inicio (Min 0 - ${p1Max})`;
        phaseTag = `ETAPA DE INICIO`;

        const pendingInicio = pendingItems.filter(i => i.categoryKey === "inicio");
        if (pendingInicio.length > 0) {
            suggestedItem = pendingInicio.find(i => i.targetMin <= minutes + 2) || pendingInicio[0];
            suggestionReasonText = `Enfócate en el saludo cordial, conexión con la lección anterior, revisión de tareas y declaración del objetivo explícito.`;
        } else {
            const pendingTransversal = pendingItems.filter(i => i.isTransversal && i.number <= 10);
            if (pendingTransversal.length > 0) {
                suggestedItem = pendingTransversal[0];
                suggestionReasonText = `🔁 Criterio continuo: Dirígete directamente a los estudiantes por su nombre durante la clase.`;
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

    } else if (minutes < p2Max) {
        phaseNum = 2;
        currentCategoryKey = "instruccion";
        phaseName = `💡 Fase 2: Explicación y Práctica (Min ${p1Max} - ${p2Max})`;
        phaseTag = `INSTRUCCIÓN Y PRÁCTICA`;

        const pendingInstruccion = pendingItems.filter(i => i.categoryKey === "instruccion");
        if (pendingInstruccion.length > 0) {
            suggestedItem = pendingInstruccion[0];
            suggestionReasonText = `Proporciona instrucciones breves y claras por partes, y brinda espacio para la práctica del estudiante.`;
        } else {
            const pendingTransversal = pendingItems.filter(i => i.isTransversal && i.number <= 13);
            if (pendingTransversal.length > 0) {
                suggestedItem = pendingTransversal[0];
                suggestionReasonText = `🔁 Recordatorio continuo: Brinda retroalimentación pedagógicamente útil a los estudiantes.`;
            } else {
                suggestionIcon.textContent = "⏳";
                suggestionTag.textContent = `FASE 2 COMPLETADA`;
                suggestionTitle.textContent = "¡Etapa de Explicación Cumplida!";
                suggestionReason.textContent = "Has guiado la lección exitosamente. Acompaña la práctica independiente de los alumnos.";
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

    } else if (minutes < p3Max) {
        phaseNum = 3;
        currentCategoryKey = "participacion";
        phaseName = `✏️ Fase 3: Participación e Interacción (Min ${p2Max} - ${p3Max})`;
        phaseTag = `PARTICIPACIÓN Y PEDAGOGÍA`;

        const pendingPractica = pendingItems.filter(i => (i.categoryKey === "participacion" || i.categoryKey === "pedagogia") && i.categoryKey !== "cierre");
        if (pendingPractica.length > 0) {
            suggestedItem = pendingPractica.find(i => i.targetMin <= minutes + 5) || pendingPractica[0];
            const tagText = suggestedItem.isTransversal ? "🔁 Criterio continuo" : "Fase de participación";
            suggestionReasonText = `${tagText}: Promueve la participación amplia y formula preguntas de razonamiento.`;
        } else {
            suggestionIcon.textContent = "⏳";
            suggestionTag.textContent = `FASE 3 COMPLETADA`;
            suggestionTitle.textContent = "¡Participación e Interacción en Curso!";
            suggestionReason.textContent = "Los alumnos están interactuando de forma activa. El asistente te acompañará con el resumen y cierre al aproximarse el final de la lección.";
            suggestionCompleteBtn.classList.add("hidden");
            currentSuggestedItem = null;
            assistantPhaseBadge.textContent = phaseName;
            updatePhaseStepper(3);

            assistantPhaseCriteriaCount.textContent = `Etapa: Participación al 100% ✓`;
            return;
        }

    } else if (minutes < p4Max) {
        phaseNum = 4;
        currentCategoryKey = "cierre";
        phaseName = `🎯 Fase 4: Cierre de Clase (Min ${p3Max} - ${p4Max})`;

        const pendingCierre = pendingItems.filter(i => i.categoryKey === "cierre");

        if (minutes < (p3Max + 3)) {
            phaseTag = `REPASO Y RESUMEN`;
            suggestedItem = pendingCierre.find(i => i.number === 14) || pendingCierre[0] || pendingItems[0];
            suggestionReasonText = `Dedica este momento a realizar una recapitulación o resumen final de la lección.`;
        } else {
            phaseTag = `TAREA PARA EL HOGAR`;
            suggestedItem = pendingCierre.find(i => i.number === 15) || pendingCierre[0] || pendingItems[0];
            suggestionReasonText = `Explica con claridad la tarea asignada para realizar en el hogar.`;
        }

    } else {
        phaseNum = 5;
        currentCategoryKey = "cierre";
        phaseName = `🏁 Fase 5: Final de Lección (Min ${p4Max} - ${classDurationMin})`;
        phaseTag = `CONTINUIDAD Y DESPEDIDA`;
        const pendingCierre = pendingItems.filter(i => i.categoryKey === "cierre");
        suggestedItem = pendingCierre.find(i => i.number === 16) || pendingCierre[0] || pendingItems[0];
        suggestionReasonText = `Anticipa a los alumnos qué aprenderán o trabajarán en la siguiente lección.`;
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
        suggestionReason.textContent = "Has cumplido todos los 16 criterios pedagógicos alcanzando el máximo de 78 puntos.";
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

// EVENTOS DE LA APLICACIÓN
function setupEventListeners() {
    themeToggle.addEventListener("click", () => {
        applyTheme(currentTheme === "light" ? "dark" : "light");
    });

    assistantToggleBtn.addEventListener("click", toggleAssistantMode);

    assistantPlayPauseBtn.addEventListener("click", () => {
        if (isTimerRunning) pauseTimer();
        else startTimer();
    });

    assistantResetTimerBtn.addEventListener("click", resetTimer);

    durationBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const duration = parseInt(btn.getAttribute("data-duration"));
            setClassDuration(duration);
        });
    });

    suggestionCompleteBtn.addEventListener("click", (e) => {
        if (currentSuggestedItem) {
            triggerConfettiAtElement(suggestionCompleteBtn);
            toggleItem(currentSuggestedItem.id);
            expandCategory(currentSuggestedItem.categoryKey);
            updateAssistantUI();
        }
    });

    startTourBtn.addEventListener("click", launchGuidedTour);
    welcomeTourBtn.addEventListener("click", launchGuidedTour);

    infoModalBtn.addEventListener("click", openWelcomeModal);
    closeWelcomeModalBtn.addEventListener("click", closeWelcomeModal);
    startLessonBtn.addEventListener("click", closeWelcomeModal);
    welcomeModal.addEventListener("click", (e) => {
        if (e.target === welcomeModal) closeWelcomeModal();
    });


    filterTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            filterTabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            activeStatusFilter = tab.getAttribute("data-filter");
            render();
        });
    });


    toggleExpandBtn.addEventListener("click", () => {
        isExpandedAll = !isExpandedAll;
        expandIcon.textContent = isExpandedAll ? "📖" : "📘";
        expandText.textContent = isExpandedAll ? "Ocultar" : "Detalles";
        
        if (isExpandedAll) {
            collapsedCategories = [];
            localStorage.setItem(STORAGE_KEY_COLLAPSED, JSON.stringify(collapsedCategories));
        }
        render();
    });

    resetBtn.addEventListener("click", () => {
        if (confirm("¿Estás seguro de reiniciar a 0 toda la checklist y las notas de la lección?")) {
            completedItems = [];
            itemNotes = {};
            collapsedCategories = [];
            resetTimer();
            isAssistantActive = false;
            document.body.classList.remove("assistant-focus-active");
            assistantWidget.classList.add("hidden");
            assistantToggleBtn.classList.remove("active");
            
            if (assistantIcon) assistantIcon.textContent = "🤖";
            if (assistantBtnText) assistantBtnText.textContent = "Modo Asistente";

            localStorage.removeItem(STORAGE_KEY_COMPLETED);
            localStorage.removeItem(STORAGE_KEY_NOTES);
            localStorage.removeItem(STORAGE_KEY_COLLAPSED);
            render();
        }
    });

    exportBtn.addEventListener("click", openExportModal);
    closeModalBtn.addEventListener("click", closeModal);
    closeModalBottomBtn.addEventListener("click", closeModal);
    exportModal.addEventListener("click", (e) => {
        if (e.target === exportModal) closeModal();
    });
    copyModalBtn.addEventListener("click", copyReportToClipboard);
    downloadTxtBtn.addEventListener("click", downloadReportAsTxt);
}

function closeModal() {
    exportModal.classList.add("hidden");
}

function downloadReportAsTxt() {
    const reportText = reportTextarea.value;
    if (!reportText) return;

    const now = new Date();
    const dateStr = now.toISOString().split("T")[0];
    const filename = `Reporte_Observacion_Clase_${classDurationMin}min_${dateStr}.txt`;

    const blob = new Blob([reportText], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
}

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

function saveNote(id, noteContent) {
    itemNotes[id] = noteContent;
    localStorage.setItem(STORAGE_KEY_NOTES, JSON.stringify(itemNotes));
}

// RENDERIZADO PRINCIPAL DE CHECKLIST
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

function renderCategoryStrip() {
    categoryStatsGrid.innerHTML = "";

    const allChip = document.createElement("div");
    allChip.className = `cat-strip-badge ${activeCategoryFilter === "all" ? "active" : ""}`;
    allChip.innerHTML = `<span class="cat-dot" style="background:#64748b"></span> Todas (${completedItems.length}/${getAllItems().length})`;
    allChip.addEventListener("click", () => {
        activeCategoryFilter = "all";
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
            expandCategory(cat.categoryKey);
            render();
        });

        categoryStatsGrid.appendChild(chip);
    });
}

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
            return true;
        });

        if (filteredItems.length === 0) return;

        visibleItemsCount += filteredItems.length;

        const catDoneCount = category.items.filter(item => completedItems.includes(item.id)).length;
        const isAllCompleted = (catDoneCount === category.items.length) && (category.items.length > 0);
        
        const isCatCollapsed = collapsedCategories.includes(category.categoryKey);

        const categoryGroup = document.createElement("div");
        categoryGroup.className = `category-group ${isAllCompleted ? "category-completed" : ""}`;

        const categoryHeader = document.createElement("div");
        categoryHeader.className = `category-header ${isCatCollapsed ? "is-collapsed" : ""} ${isAllCompleted ? "is-completed-header" : ""}`;
        categoryHeader.setAttribute("title", isCatCollapsed ? "Haz clic para desplegar" : "Haz clic para colapsar");

        const statusBadgeHtml = isAllCompleted 
            ? `<span class="category-completed-badge">✓ Completada (${catDoneCount}/${category.items.length})</span>`
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
            handleCategoryHeaderClick(category.categoryKey);
        });

        categoryGroup.appendChild(categoryHeader);

        const itemsContainer = document.createElement("div");
        itemsContainer.className = `category-items ${isCatCollapsed ? "hidden" : ""}`;

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
                ? `<span class="transversal-badge" title="Criterio continuo: Se aplica durante toda la lección de ${classDurationMin} min">🔁 Toda la clase</span>`
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
    report += `CHECKLIST DE OBSERVACIÓN DE CLASE (${classDurationMin} MIN)\n`;
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
