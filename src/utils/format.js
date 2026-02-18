/**
 * Formats a number as Colombian Peso currency
 * @param {number} value
 * @returns {string}
 */
export const formatCurrency = (value) => {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(value);
};

/**
 * Formats a number with Colombian locale (dots for thousands, comma for decimals).
 * Used in inputs and table cells (e.g. 120000 → "120.000", 120000.5 → "120.000,50").
 * @param {number} value
 * @returns {string}
 */
export const formatCurrencyNumber = (value) => {
    const n = Number(value);
    if (isNaN(n)) return '';
    const hasDecimals = n % 1 !== 0;
    const fixed = hasDecimals ? n.toFixed(2) : n.toFixed(0);
    const [intPart, decPart] = fixed.split('.');
    const withDots = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    if (!hasDecimals || !decPart) return withDots;
    return withDots + ',' + decPart;
};

/**
 * Parses a string with Colombian number format (e.g. "120.000" or "120.000,50") to number.
 * @param {string} str
 * @returns {number}
 */
export const parseCurrencyNumber = (str) => {
    if (str === '' || str == null) return NaN;
    const cleaned = String(str).replace(/\s/g, '').replace(/\./g, '').replace(',', '.');
    return parseFloat(cleaned) || NaN;
};

/**
 * Returns today's date in YYYY-MM-DD format suitable for input[type="date"]
 * @returns {string}
 */
export const getTodayDate = () => {
    return new Date().toISOString().split('T')[0];
};

/**
 * Converts a number to its Spanish text representation (Colombian Pesos)
 * @param {number} value
 * @returns {string}
 */
export const numberToWords = (value) => {
    if (value === 0) return "Valor: CERO M/CTE";

    const Unidades = (num) => {
        switch (num) {
            case 1: return "UN";
            case 2: return "DOS";
            case 3: return "TRES";
            case 4: return "CUATRO";
            case 5: return "CINCO";
            case 6: return "SEIS";
            case 7: return "SIETE";
            case 8: return "OCHO";
            case 9: return "NUEVE";
            default: return "";
        }
    };

    const Decenas = (num) => {
        const decena = Math.floor(num / 10);
        const unidad = num - (decena * 10);

        switch (decena) {
            case 1:
                switch (unidad) {
                    case 0: return "DIEZ";
                    case 1: return "ONCE";
                    case 2: return "DOCE";
                    case 3: return "TRECE";
                    case 4: return "CATORCE";
                    case 5: return "QUINCE";
                    default: return "DIECI" + Unidades(unidad);
                }
            case 2:
                switch (unidad) {
                    case 0: return "VEINTE";
                    default: return "VEINTI" + Unidades(unidad);
                }
            case 3: return "TREINTA" + (unidad > 0 ? " Y " + Unidades(unidad) : "");
            case 4: return "CUARENTA" + (unidad > 0 ? " Y " + Unidades(unidad) : "");
            case 5: return "CINCUENTA" + (unidad > 0 ? " Y " + Unidades(unidad) : "");
            case 6: return "SESENTA" + (unidad > 0 ? " Y " + Unidades(unidad) : "");
            case 7: return "SETENTA" + (unidad > 0 ? " Y " + Unidades(unidad) : "");
            case 8: return "OCHENTA" + (unidad > 0 ? " Y " + Unidades(unidad) : "");
            case 9: return "NOVENTA" + (unidad > 0 ? " Y " + Unidades(unidad) : "");
            case 0: return Unidades(unidad);
            default: return "";
        }
    };

    const Centenas = (num) => {
        const centenas = Math.floor(num / 100);
        const decenas = num - (centenas * 100);

        switch (centenas) {
            case 1:
                if (decenas > 0) return "CIENTO " + Decenas(decenas);
                return "CIEN";
            case 2: return "DOSCIENTOS " + Decenas(decenas);
            case 3: return "TRESCIENTOS " + Decenas(decenas);
            case 4: return "CUATROCIENTOS " + Decenas(decenas);
            case 5: return "QUINIENTOS " + Decenas(decenas);
            case 6: return "SEISCIENTOS " + Decenas(decenas);
            case 7: return "SETECIENTOS " + Decenas(decenas);
            case 8: return "OCHOCIENTOS " + Decenas(decenas);
            case 9: return "NOVECIENTOS " + Decenas(decenas);
            default: return Decenas(decenas);
        }
    };

    const Seccion = (num, divisor, strSingular, strPlural) => {
        const cientos = Math.floor(num / divisor);
        const resto = num - (cientos * divisor);

        let letras = "";

        if (cientos > 0) {
            if (cientos > 1) {
                letras = Centenas(cientos) + " " + strPlural;
            } else {
                letras = strSingular;
            }
        }

        if (resto > 0) {
            letras += "";
        }

        return letras;
    };

    const Miles = (num) => {
        const divisor = 1000;
        const cientos = Math.floor(num / divisor);
        const resto = num - (cientos * divisor);

        const strMiles = Seccion(num, divisor, "UN MIL", "MIL");
        const strCentenas = Centenas(resto);

        if (strMiles === "")
            return strCentenas;

        return strMiles + " " + strCentenas;
    };

    const Millones = (num) => {
        const divisor = 1000000;
        const cientos = Math.floor(num / divisor);
        const resto = num - (cientos * divisor);

        let strMillones = Seccion(num, divisor, "UN MILLON", "MILLONES");
        let strMiles = Miles(resto);

        if (strMillones === "")
            return strMiles;

        return strMillones + " " + strMiles;
    };

    // Main logic for numbers under 1000 billion
    let data = {
        entero: Math.floor(value),
        decimal: Math.round((value - Math.floor(value)) * 100),
    };

    // For simplicity, let's use a chunk approach similar to the previous attempt but cleaner.
    // However, the recursive approach above is partly defined. Let's stick to the chunk approach which is easier to debug.

    // Reset helper to ensure correct "UN" vs "UNO" if needed (usually UN is fine for currency)
    const getCentenas = (n) => Centenas(n);

    let letras = "";
    let entero = data.entero;

    if (entero === 0) return "Valor: CERO M/CTE";

    // Billions
    const milesMillones = Math.floor(entero / 1000000000);
    entero = entero % 1000000000;

    if (milesMillones > 0) {
        if (milesMillones === 1) letras += "UN MIL MILLONES ";
        else letras += getCentenas(milesMillones) + " MIL MILLONES ";
    }

    // Millions
    const millones = Math.floor(entero / 1000000);
    entero = entero % 1000000;

    if (millones > 0) {
        if (millones === 1) letras += "UN MILLON ";
        else letras += getCentenas(millones) + " MILLONES ";
    }

    // Thousands
    const miles = Math.floor(entero / 1000);
    entero = entero % 1000;

    if (miles > 0) {
        if (miles === 1) letras += "MIL ";
        else letras += getCentenas(miles) + " MIL ";
    }

    // Hundreds/Units
    if (entero > 0) {
        letras += getCentenas(entero);
    }

    // Capitalize first letter logic is handled by UPPERCASE output of functions
    letras = letras.trim();

    // Normalize spaces
    letras = letras.replace(/\s+/g, ' ');

    if (letras.endsWith("MILLON") || letras.endsWith("MILLONES")) {
        letras += " DE";
    }
    return `Valor: ${letras} M/CTE`;
};
