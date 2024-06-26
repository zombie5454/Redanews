const seed = ["Oliver", "Pepper", "Zoe", "Whiskers", "Tinkerbell",
 "Snickers", "Patches", "Princess", "Bailey", "Cookie",
  "Molly", "Jack", "Fluffy", "Sammy", "Sadie",
   "Boots", "Bella", "Tigger", "Misty", "Gracie"];

export function stringToColor(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i += 1) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = "";
  for (let i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  return color;
}

export function adjust(colorHex, amount) {
  return `${colorHex.replace(/../g, (colorHex) =>
    `0${Math.min(255, Math.max(0, parseInt(colorHex, 16) + amount)).toString(
      16
    )}`.substr(-2)
  )}`;
}
/*
export function userNameBG(str) {
  return adjust(stringToColor(str), 90);
}
*/
export function userNameBG(str) {
  return seed[str.charCodeAt() % 20];
}
/*
export function avatarSrc(str) {
  return `https://avatars.dicebear.com/api/croodles/:${str}.svg?background=%23${userNameBG(
    str
  )}`;
}*/
export function avatarSrc(str) {
  return `https://api.dicebear.com/7.x/adventurer/svg?seed=${userNameBG(str)}`;
}
