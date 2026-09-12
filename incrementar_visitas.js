/**
 * ==========================================================================
 * SCRIPT INDEPENDIENTE DE TEST PARA INCREMENTAR VISITAS EN COUNTERAPI V2
 * ==========================================================================
 * 
 * Descripción:
 *   Realiza N peticiones HTTP (100 por defecto) al endpoint CounterAPI v2
 *   configurado en la aplicación "Tutor - List Checker", incrementando
 *   el contador de visitas de forma automatizada.
 * 
 * Uso:
 *   node incrementar_visitas.js
 *   node incrementar_visitas.js 100
 */

const COUNTER_API_BASE_URL = "https://api.counterapi.dev/v2/andres-erazos-team-5506/count-listchecker";
const COUNTER_API_TOKEN = "hut_RgMiTYRz64ucJFkNESQwl7GLCPcbo7VEHPBCGuBM";

// Número de visitas enviadas por consola o 100 por defecto
const TARGET_VISITS = parseInt(process.argv[2], 10) || 100;
// Pausa en milisegundos entre cada petición (evita saturación)
const DELAY_BETWEEN_REQUESTS_MS = 150;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Consulta la cifra actual almacenada en CounterAPI
 */
async function fetchCurrentCount() {
    try {
        const url = `${COUNTER_API_BASE_URL}?token=${COUNTER_API_TOKEN}&_t=${Date.now()}_${Math.random()}`;
        const response = await fetch(url, {
            headers: { "Cache-Control": "no-cache, no-store, must-revalidate" }
        });
        if (response.ok) {
            const json = await response.json();
            if (json.data && typeof json.data.up_count === "number") {
                return json.data.up_count;
            }
        }
    } catch (err) {
        console.warn("⚠️ No se pudo consultar el contador actual:", err.message);
    }
    return null;
}

/**
 * Envía una petición para incrementar el contador (+1)
 */
async function sendIncrementRequest(index) {
    const url = `${COUNTER_API_BASE_URL}/up?token=${COUNTER_API_TOKEN}&_t=${Date.now()}_${index}_${Math.random()}`;
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Cache-Control": "no-cache, no-store, must-revalidate",
                "Pragma": "no-cache"
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status} ${response.statusText}`);
        }
        
        const json = await response.json();
        const currentCount = json.data?.up_count ?? "OK";
        return { success: true, count: currentCount };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

async function main() {
    console.log("==================================================");
    console.log("🚀 SIMULADOR DE VISITAS - TUTOR LIST CHECKER");
    console.log("==================================================");
    console.log(`📌 Objetivo: Incremento de ${TARGET_VISITS} visitas`);
    console.log(`🔗 Endpoint: ${COUNTER_API_BASE_URL}/up`);

    const initialCount = await fetchCurrentCount();
    if (initialCount !== null) {
        console.log(`📊 Contador inicial en API: ${initialCount} visitas`);
    } else {
        console.log("📊 Contador inicial: No disponible (verificando en proceso...)");
    }
    console.log("--------------------------------------------------\n");

    const startTime = Date.now();
    let successCount = 0;
    let failCount = 0;

    for (let i = 1; i <= TARGET_VISITS; i++) {
        const result = await sendIncrementRequest(i);

        if (result.success) {
            successCount++;
            const pct = ((i / TARGET_VISITS) * 100).toFixed(0).padStart(3, " ");
            const num = i.toString().padStart(TARGET_VISITS.toString().length, " ");
            console.log(`[${num}/${TARGET_VISITS}] (${pct}%) ✅ Petición ${i} enviada con éxito`);
        } else {
            failCount++;
            const num = i.toString().padStart(TARGET_VISITS.toString().length, " ");
            console.error(`[${num}/${TARGET_VISITS}] ❌ Error en petición: ${result.error}`);
        }

        if (i < TARGET_VISITS && DELAY_BETWEEN_REQUESTS_MS > 0) {
            await sleep(DELAY_BETWEEN_REQUESTS_MS);
        }
    }

    console.log("\n⏳ Esperando 2 segundos para sincronización con CounterAPI...");
    await sleep(2000);

    const finalCount = await fetchCurrentCount();
    const totalTimeSec = ((Date.now() - startTime) / 1000).toFixed(2);
    const netIncrease = (initialCount !== null && finalCount !== null) ? (finalCount - initialCount) : "N/A";

    console.log("\n==================================================");
    console.log("🎉 RESUMEN DE EXECUCIÓN");
    console.log("==================================================");
    console.log(`⏱️ Tiempo transcurrido: ${totalTimeSec} segundos`);
    console.log(`✅ Peticiones exitosas: ${successCount}`);
    console.log(`❌ Peticiones fallidas: ${failCount}`);
    console.log(`📈 Contador Inicial   : ${initialCount ?? "N/A"}`);
    console.log(`📈 Contador Final     : ${finalCount ?? "N/A"}`);
    console.log(`🚀 Incremento neto real: +${netIncrease}`);
    console.log("==================================================");
}

main().catch((err) => {
    console.error("💥 Error en ejecución:", err);
});
