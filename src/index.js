import "./index.scss";

let scene, camera, renderer;
let shapes = [];

scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.z = 1000;
camera.position.x = 2000;
camera.position.y = 2000;
renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.domElement.style.width = "100vw";
renderer.domElement.style.height = "100vh";
renderer.domElement.style.backgroundColor = "black";
renderer.domElement.style.position = "absolute";
renderer.domElement.style.overflow = "hidden";
document.body.appendChild(renderer.domElement);

function randomX() {
    return Math.floor(Math.random() * 4000) + 1;
}
function randomZ() {
    return Math.floor(Math.random() * 250) + 1;
}
function randomY() {
    return Math.floor(Math.random() * 4000) + 1;
}
var creatingStars;
function createStar() {
    let color1 = "white";
    let color2 = "blue";
    let color3 = "yellow";
    let number = Math.floor(Math.random() * 3) + 1;
    if (number == 1) {
        let geometry = new THREE.SphereGeometry(100, 25, 25);
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
        let geometry = new THREE.SphereGeometry(100, 25, 25);
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
        let geometry = new THREE.SphereGeometry(100, 25, 25);
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

    console.log(shapes.length);
    creatingStars = window.requestAnimationFrame(createStar);
    if (shapes.length > 100) {
        cancelAnimationFrame(creatingStars);
    }
}

requestAnimationFrame(createStar);







let loop = function () {
    shapes.forEach(e => {
        e.rotation.x += 0.01;
        e.rotation.y += 0.01;
        // e.position.z += 0.1;
    });
    renderer.render(scene, camera);
    window.requestAnimationFrame(loop);
}
loop();