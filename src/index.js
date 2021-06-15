import "./index.scss";
import Music from "./sounds/spaceMusic.mp3";
import Image from "./images/play-button.png";
import Earthbasic from "./images/earthmap1k.jpg";
import Venusbasic from "./images/venusmap.jpg";
import Saturnbasic from "./images/saturnmap.jpg";
import Sunbasic from "./images/sunmap.jpg";
import Mercurybasic from "./images/mercurymap.jpg";

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

const texture = new THREE.TextureLoader().load(Earthbasic);
const material = new THREE.MeshBasicMaterial({
    map: texture
})
const geometry = new THREE.SphereGeometry(50, 32, 32);
const earthMesh = new THREE.Mesh(geometry, material);

earthMesh.position.z = -100;
earthMesh.position.x = 200;
earthMesh.position.y = 400;
scene.add(earthMesh)


const venusTexture = new THREE.TextureLoader().load(Venusbasic);
const venusMaterial = new THREE.MeshBasicMaterial({
    map: venusTexture
})
const venusGeometry = new THREE.SphereGeometry(50, 32, 16);
const venusMesh = new THREE.Mesh(venusGeometry, venusMaterial);

venusMesh.position.z = 100;
venusMesh.position.x = 400;
venusMesh.position.y = 600;
scene.add(venusMesh)


const saturnTexture = new THREE.TextureLoader().load(Saturnbasic);
const saturnMaterial = new THREE.MeshBasicMaterial({
    map: saturnTexture
})
const saturnGeometry = new THREE.SphereGeometry(25, 100, 100);
const saturnMesh = new THREE.Mesh(saturnGeometry, saturnMaterial);

saturnMesh.position.z = 0;
saturnMesh.position.x = 0;
saturnMesh.position.y = 500;
scene.add(saturnMesh)

const sunTexture = new THREE.TextureLoader().load(Sunbasic);
const sunMaterial = new THREE.MeshBasicMaterial({
    map: sunTexture
})
const sunGeometry = new THREE.SphereGeometry(400, 100, 100);
const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);

sunMesh.position.z = 200;
sunMesh.position.x = 1500;
sunMesh.position.y = 700;
scene.add(sunMesh)

const mercuryTexture = new THREE.TextureLoader().load(Mercurybasic);
const mercuryMaterial = new THREE.MeshBasicMaterial({
    map: mercuryTexture
})
const mercuryGeometry = new THREE.SphereGeometry(50, 100, 100);
const mercuryMesh = new THREE.Mesh(mercuryGeometry, mercuryMaterial);

mercuryMesh.position.z = -200;
mercuryMesh.position.x = 1100;
mercuryMesh.position.y = 500;
scene.add(mercuryMesh)

function randomX() {
    return Math.floor(Math.random() * 2000) + 1;
}
function randomZ() {
    let number = Math.floor(Math.random() * 2) + 1;
    return number <= 1 ? Math.floor(Math.random() * 500) + 500 : Math.floor(Math.random() * -500) + 1;
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
    earthMesh.rotation.y += 0.01;
    camera.rotation.y += 0.001;
    renderer.render(scene, camera);
    window.requestAnimationFrame(loop);
}
loop();