// グラデーション用の色のリスト
const colors = [
    "#FF5733",
    "#FFA233",
    "#FFD733",
    "#C7FF33",
    "#33FF57",
    "#33FFB6",
    "#33E5FF",
    "#3394FF",
    "#6141FF",
];

// アニメーションの間隔（ミリ秒）
const animationInterval = 2000;

const background = document.getElementById("background");
let currentColorIndex = 0;

function changeBackgroundColor() {
    background.style.backgroundColor = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
}

setInterval(changeBackgroundColor, animationInterval);
