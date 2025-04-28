export const data = [
  {
    name: "rainy",
    iconPath: "./assets/icons/cloud-rain.svg", // путь к файлу
    bgImagePath: "./assets/images/rainy-bg.jpg",
    soundPath: "./assets/sounds/rain.mp3",
  },
  {
    name: "summer",
    iconPath: "./assets/icons/sun.svg",
    bgImagePath: "./assets/images/summer-bg.jpg",
    soundPath: "./assets/sounds/summer.mp3",
  },
  {
    name: "winter",
    iconPath: "./assets/icons/cloud-snow.svg",
    bgImagePath: "./assets/images/winter-bg.jpg",
    soundPath: "./assets/sounds/winter.mp3",
  },
];

export class Weather {
  constructor({ name, iconPath, bgImagePath, soundPath }) {
    this.name = name;
    this.iconPath = iconPath;
    this.bgImagePath = bgImagePath;
    this.soundPath = soundPath;
    this.sound = new Audio(soundPath);
  }

  installBg() {
    document.body.style.backgroundImage = `url(${this.bgImagePath})`;
  }
}

const rainObj = new Weather(data[0]);
const summerObj = new Weather(data[1]);
const winterObj = new Weather(data[2]);

export const dataArr = [rainObj, summerObj, winterObj];
