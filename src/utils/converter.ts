export function formatUangIndonesia(num: number, decimals = 1) {
    if (typeof num !== 'number' || !isFinite(num)) return '-';
    
    const abs = Math.abs(num);
    const sign = num < 0 ? '-' : '';
  
    let value, unit;
  
    if (abs >= 1e12) {          // Triliun
      value = abs / 1e12;
      unit = 'Triliun';
    } else if (abs >= 1e9) {    // Miliar
      value = abs / 1e9;
      unit = 'Miliar';
    } else if (abs >= 1e6) {    // Juta
      value = abs / 1e6;
      unit = 'Juta';
    } else if (abs >= 1e3) {    // Ribu
      value = abs / 1e3;
      unit = 'Ribu';
    } else {
      value = abs;
      unit = '';
    }
  
    // Format angka dan hilangkan ".0" jika tidak perlu
    const formatted = Number(value.toFixed(decimals)).toString().replace(/\.0$/, '');
    return `${sign}${formatted} ${unit}`.trim();
  }
  