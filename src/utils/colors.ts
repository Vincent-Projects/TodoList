type AccessLevel = "FREE" | "PREMIUM" | "BELIEVER";

interface ColorObject {
  id: string;
  color: string;
  secondColor: string;
  accessLevel: AccessLevel;
}

function generateColorObject(
  number1: number,
  number2: number = number1,
  id = number1
): ColorObject {
  let accessLevel: AccessLevel = "FREE";

  if (id > 5) {
    accessLevel = "PREMIUM";
  }

  return {
    id: id.toString(),
    color: number1.toString().trim(),
    secondColor: number2?.toString().trim(),
    accessLevel: accessLevel,
  };
}

const COLORS: ColorObject[] = [
  generateColorObject(1),
  generateColorObject(2),
  generateColorObject(3),
  generateColorObject(4),
  generateColorObject(5),
  generateColorObject(6),
  generateColorObject(7),
  generateColorObject(8),
  generateColorObject(9),
  generateColorObject(10),
  generateColorObject(11),
  generateColorObject(12),
  generateColorObject(2, 3, 13),
  generateColorObject(1, 4, 14),
  generateColorObject(7, 5, 15),
  generateColorObject(8, 9, 16),
  generateColorObject(9, 7, 17),
  generateColorObject(10, 6, 18),
  generateColorObject(11, 1, 19),
  generateColorObject(6, 12, 20),
];

export default COLORS;
export type { AccessLevel, ColorObject };

export const sanitizeColorCSS = (color: string) => {
  return `rgb(var(--color-${color}))`;
};

const HEX_COLORS = [
  "00ffcc",
  "ff9cbf",
  "2bd632",
  "f2ff57",
  "c9b9f5",
  "ffa8a8",
  "a9d66d",
  "c6d0d6",
  "4acbf0",
  "c8cd28",
  "ffad34",
  "ffffff",
];

export const colorIdToHex = (colorId: string) => {
  return HEX_COLORS[+colorId];
};

export const hexToColorId = (hex: string) => {
  return HEX_COLORS.findIndex((hexColor) => hex === hexColor);
};
