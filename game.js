const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const mapSize = {
  x: 10,
  y: 10
}

const sizeTile = 32;
const urlTile = "https://i.imgur.com/fqG34pO.png";
const urlCharacter = "https://i.imgur.com/ucwvhlh.png";
const urlCartel = "https://i.imgur.com/NXIjxr8.png";
const urlArbol = "https://i.imgur.com/wIK2b9P.png"

function loadImage(src) {
  return new Promise((res, rej) => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      res(image);
    };
    image.onerror = rej;
  });
}

renderMap();

async function renderMap() {
  const imageTile = await loadImage(urlTile);
  const imageCharacter = await loadImage(urlCharacter);
  const imageArbol = await loadImage(urlArbol);
  const imageCartel = await loadImage(urlCartel);

  for(let y = 0; y <= mapSize.y; y++){
    for(let x = 0; x <= mapSize.x; x++){
      context.drawImage(imageTile, x * sizeTile, y * sizeTile);
    }
  }

  context.drawImage(imageCharacter, 100, 200);
  context.drawImage(imageArbol, 150, 100);
  context.drawImage(imageCartel, 10, 20);
  context.font = "15pt Times New Roman";
  context.fillStyle = "white";
  context.fillText("Welcome!", 40, 60);
}
