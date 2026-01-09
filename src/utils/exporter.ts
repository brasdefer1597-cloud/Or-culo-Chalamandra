import { jsPDF } from "jspdf";
import { OracleData, QuestionTemplate } from "../types";

// Helper to map response to structured SRAP object if possible
// Or just dump sections. For now, we assume standard sections or mapped from AI.
export const descargarDossierMagistral = (analisisSRAP: Record<string, string>, situacion: string, metodo: string) => {
    const doc = new jsPDF();
    const fucsia: [number, number, number] = [213, 0, 108]; // #D5006C
    const azul: [number, number, number] = [26, 35, 126];   // #1A237E

    // Configuración de Identidad Visual
    doc.setFillColor(...azul);
    doc.rect(0, 0, 210, 40, 'F'); // Cabecera Magistral

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(22);
    doc.text("ORÁCULO CHALAMANDRA | DECOX", 10, 20);
    doc.setFontSize(12);
    doc.text(`DOSSIER ESTRATÉGICO: ${metodo.toUpperCase()}`, 10, 30);

    // Cuerpo del Reporte: SRAP
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(14);
    doc.text("SITUACIÓN (LA NETA):", 10, 55);
    doc.setFontSize(11);

    const splitSituacion = doc.splitTextToSize(situacion, 180);
    doc.text(splitSituacion, 10, 65);

    // Secciones del Método SRAP
    // If analisisSRAP keys are consistent (Sintetizar, Recomponer, Analizar, Proyectar)
    // we use them. Otherwise we iterate keys.
    let yPos = 80 + (splitSituacion.length * 5);

    Object.entries(analisisSRAP).forEach(([key, value]) => {
        if (yPos > 270) {
            doc.addPage();
            yPos = 20;
        }

        doc.setFontSize(14);
        doc.setTextColor(...fucsia);
        doc.text(`${key.toUpperCase()}:`, 10, yPos);

        doc.setFontSize(10);
        doc.setTextColor(50, 50, 50);

        const splitText = doc.splitTextToSize(value, 180);
        doc.text(splitText, 10, yPos + 7);

        yPos += 15 + (splitText.length * 4); // Espaciado dinámico
    });

    // Pie de Página
    const pageCount = doc.internal.pages.length - 1; // Correct method to get page count might differ in different jspdf versions, but internal.pages works often.
    // Or just put it on current page if space allows, or fixed bottom.
    // Let's put it at bottom of last page.
    if (yPos > 280) doc.addPage();

    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text("Generado por Gemini 3.0 Pro - Estrategia en la Calle.", 10, 285);

    doc.save(`Dossier_Chalamandra_${Date.now()}.pdf`);
};
