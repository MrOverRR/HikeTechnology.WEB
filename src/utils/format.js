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
 * Returns today's date in YYYY-MM-DD format suitable for input[type="date"]
 * @returns {string}
 */
export const getTodayDate = () => {
    return new Date().toISOString().split('T')[0];
};
