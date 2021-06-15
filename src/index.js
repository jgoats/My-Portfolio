import "./index.scss";

let scene, camera, renderer;
let shapes = [];

scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.z = 20;
renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.domElement.style.width = "100vw";
renderer.domElement.style.height = "100vh";
renderer.domElement.style.backgroundColor = "black";
renderer.domElement.style.position = "absolute";
renderer.domElement.style.overflow = "hidden";
document.body.appendChild(renderer.domElement);


let geometry = new THREE.BoxGeometry(1, 1, 1);
let material = new THREE.MeshBasicMaterial({ color: "red", wireframe: true });
let shape = new THREE.Mesh(geometry, material);
shape.position.z = 18;
shape.position.x = 0;
scene.add(shape);
shapes.push(shape);




let loop = function () {
    shapes.forEach(e => {
        e.rotation.x += 0.01;
        e.rotation.y += 0.01;
    });
    renderer.render(scene, camera);
    window.requestAnimationFrame(loop);
}
loop();
