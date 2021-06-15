import "./index.scss";
import Music from "./sounds/spaceMusic.mp3";
import Image from "./images/play-button.png";

document.getElementById("img").src = Image;
var audio = new Audio(Music);

document.getElementById("img").addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
    }
    else {
        console.log("ran");
        audio.pause();
    }
}, false);








let scene, camera, renderer;
let shapes = [];

scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.z = 0;
camera.position.x = 500;
camera.position.y = 500;
renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.domElement.style.width = "100vw";
renderer.domElement.style.height = "100vh";
renderer.domElement.style.position = "absolute";
renderer.domElement.style.backgroundColor = "black";
renderer.domElement.style.overflow = "hidden";
document.body.appendChild(renderer.domElement);

function randomX() {
    return Math.floor(Math.random() * 2000) + 1;
}
function randomZ() {
    let number = Math.floor(Math.random() * 2) + 1;
    return number <= 1 ? Math.floor(Math.random() * 500) + 1 : Math.floor(Math.random() * -500) + 1;
}
function randomY() {
    return Math.floor(Math.random() * 2000) + 1;
}
var creatingStars;
function createStar() {
    let color1 = "white";
    let color2 = "lightsteelblue";
    let color3 = "yellow";
    let number = Math.floor(Math.random() * 3) + 1;
    if (number == 1) {
        let geometry = new THREE.SphereGeometry(0.5, 10, 10);
        let material = new THREE.MeshBasicMaterial({
            color: color1,
            wireframe: true
        });
        let shape = new THREE.Mesh(geometry, material);
        shape.position.z = randomZ();
        shape.position.x = randomX();
        shape.position.y = randomY();
        scene.add(shape);
        shapes.push(shape);
    }
    else if (number == 2) {
        let geometry = new THREE.SphereGeometry(0.5, 10, 10);
        let material = new THREE.MeshBasicMaterial({
            color: color2,
            wireframe: true
        });
        let shape = new THREE.Mesh(geometry, material);
        shape.position.z = randomZ();
        shape.position.x = randomX();
        shape.position.y = randomY();
        scene.add(shape);
        shapes.push(shape);
    }
    else {
        let geometry = new THREE.SphereGeometry(0.5, 10, 10);
        let material = new THREE.MeshBasicMaterial({
            color: color3,
            wireframe: true
        });
        let shape = new THREE.Mesh(geometry, material);
        shape.position.z = randomZ();
        shape.position.x = randomX();
        shape.position.y = randomY();
        scene.add(shape);
        shapes.push(shape);
    }

    creatingStars = window.requestAnimationFrame(createStar);
    if (shapes.length > 1000) {
        cancelAnimationFrame(creatingStars);
    }
}

requestAnimationFrame(createStar);







let loop = function () {
    camera.rotation.y += 0.001;
    renderer.render(scene, camera);
    window.requestAnimationFrame(loop);
}
loop();