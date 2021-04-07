type AccessLevel = "FREE" | "PREMIUM" | "BELIEVER";

interface ColorObject {
  id: string;
  color: string;
  secondColor: string;
  accessLevel: AccessLevel;
}

function generateColorObject(number1: number, number2: number = number1, id = number1): ColorObject {
  let accessLevel: AccessLevel = "FREE";

  if (id > 5) {
    accessLevel = "PREMIUM";
  }

  return {
    id: id.toString(),
    color: number1.toString(),
    secondColor: number2?.toString(),
    accessLevel: accessLevel
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
export type {
  AccessLevel,
  ColorObject
}