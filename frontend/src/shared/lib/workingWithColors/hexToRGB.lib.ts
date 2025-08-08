export const hexToRGB = (hex: `#${string}`) => {
    let hexConvertedString = hex.replace('#', '');
    if (hex.length - 1 === 3) {
        hexConvertedString = hexConvertedString
            .split('')
            .map((c) => c + c)
            .join('');
    }

    const bigint = parseInt(hexConvertedString, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return `rgb(${r}, ${g}, ${b})`;
};
