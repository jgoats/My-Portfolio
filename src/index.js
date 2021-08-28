import axios from "axios";
import "./index.scss";
import Music from "./sounds/spaceMusic.mp3";
import Image from "./images/play-button.png";
import Image2 from "./images/play-button.svg";
import Earthbasic from "./images/earthmap1k.jpg";
import Venusbasic from "./images/venusmap.jpg";
import Saturnbasic from "./images/saturnmap.jpg";
import Sunbasic from "./images/sunmap.jpg";
import Mercurybasic from "./images/mercurymap.jpg";
import AsteroidKillerMP4 from "./video/asteroidKiller_3.mp4";
import Github from "./images/github.svg";
import LinkedIn from "./images/linkedin.svg";
import Budget from "./video/Budget.mp4";



let app = (function () {
    let hamburger = document.getElementsByClassName("hamburger-content")[0];
    let hamburgerContainer = document.getElementsByClassName("hamburger-container")[0];
    let ele = document.getElementsByClassName("nav-ele");
    let navState = 0;
    document.getElementById("linkedin").src = LinkedIn;
    document.getElementById("github").src = Github;


    function translateHamburger() {
        ele[0].style.transform = "translateY(9px) rotate(135deg)";
        ele[1].style.transform = "scale(0)";
        ele[2].style.transform = "translateY(-9px) rotate(-135deg)";
        for (let i = 0; i < ele.length; i++) {
            ele[i].style.transition = "0.2s";
            ele[i].style.backgroundColor = "pink";
        }
        hamburger.style.display = "flex";
        hamburger.style.top = "calc(20vh - 1%)";
        navState = 1;
    }
    function undoTranslate() {
        for (let i = 0; i < ele.length; i++) {
            ele[i].style.transform = "none";
            ele[i].style.backgroundColor = "white";
        }
        hamburger.style.display = "none";
        navState = 0;
    }

    hamburgerContainer.addEventListener("click", function () {
        if (navState == 0) {
            translateHamburger.call(window);
        }
        else {
            undoTranslate.call(window);
        }
    }, false);



    function handleScroll(e) {
        let eTop = e.getBoundingClientRect().top;
        let top = window.innerHeight * .20;
        let distance = eTop - top;
        let difference = distance % 30;
        let total = distance - difference;
        console.log(difference);
        let counter = 0;
        if (Math.sign(distance) == 1) {
            let interval = setInterval(function () {
                document.getElementsByClassName("scroll-bar")[0].scrollBy(0, 30);
                if (counter >= total) {
                    window.clearInterval(interval);
                }
                else {
                    counter += 30;
                }
            }, 15);
        }
        if (Math.sign(distance) == -1) {
            let interval = setInterval(function () {
                document.getElementsByClassName("scroll-bar")[0].scrollBy(0, -30);
                if (counter <= total) {
                    window.clearInterval(interval);
                }
                else {
                    counter += -30;
                }

            }, 15);
        }
    }

    let burgerItem = document.getElementsByClassName("burger-item");
    for (let i = 0; i < burgerItem.length; i++) {
        burgerItem[i].addEventListener("click", (e) => {
            let string = e.target.id;
            let id = string.slice(1);
            let element = document.getElementById(`${id}`);
            undoTranslate.call(window);
            handleScroll(element);
        }, false);
    }
    let navItem = document.getElementsByClassName("nav-item");
    for (let i = 0; i < navItem.length; i++) {
        navItem[i].addEventListener("click", (e) => {
            let string = e.target.id;
            let id = string.slice(1);
            let element = document.getElementById(`${id}`);
            undoTranslate.call(window);
            handleScroll(element);
        }, false);
    }



    var audio = new Audio(Music);
    document.getElementById("img").src = Image;
    document.getElementById("asteroidkiller").src = AsteroidKillerMP4;
    document.getElementById("budgetapp").src = Budget;

    document.getElementById("img").addEventListener("click", function () {
        if (audio.paused) {
            document.getElementById("img").src = Image2;
            audio.play();
        }
        else {
            document.getElementById("img").src = Image;
            audio.pause();
        }
    }, false);

    let submit = document.getElementById("contact-button");
    submit.addEventListener("click", () => {

    }, false);


    let counter = 1;

    function animateSpinner() {
        if (counter <= 9) {
            for (let i = 1; i <= 9; i++) {
                if (counter === i) {
                    let e = document.getElementsByClassName(`c${counter}`)[0];
                    e.style.opacity = "1.0";
                }
                else if ((counter - 1) === i) {
                    let e2 = document.getElementsByClassName(`c${counter - 1}`)[0];
                    e2.style.opacity = "0.5";
                }
                else if ((counter - 2) === i) {
                    let e3 = document.getElementsByClassName(`c${counter - 2}`)[0];
                    e3.style.opacity = "0.3";
                }
                else if ((counter - 3) === i) {
                    let e4 = document.getElementsByClassName(`c${counter - 3}`)[0];
                    e4.style.opacity = "0.1";
                }

                else {
                    let e = document.getElementsByClassName(`c${i}`)[0];
                    e.style.opacity = "0";

                }
            }
            counter === 9 ? counter = 1 : counter++;
        }

    }
    function clearSpinner() {
        for (let i = 1; i <= 9; i++) {
            document.getElementsByClassName(`c${i}`)[0].style.opacity = "0";
        }
    }

    document.getElementById("contact-button").addEventListener("click", function (e) {
        e.preventDefault();
        let firstName = document.getElementById("firstname").value;
        let lastName = document.getElementById("lastname").value;
        let Email = document.getElementById("email").value;
        let Message = document.getElementById("message").value;
        let status = document.getElementById("status");

        let userData = {
            firstname: firstName,
            lastname: lastName,
            email: Email,
            message: Message
        }
        if (userData.firstname == "") {
            status.classList.add("error");
            status.innerHTML = "please fill out firstname"
            setTimeout(() => {
                status.classList.remove("error");
                status.innerHTML = "";
            }, 4000);
        }
        else if (userData.lastname == "") {
            status.classList.add("error");
            status.innerHTML = "please fill out lastname"
            setTimeout(() => {
                status.classList.remove("error");
                status.innerHTML = "";
            }, 4000);
        }
        else if (userData.email == "" || userData.email.indexOf("@") == -1) {
            if (userData.email == "") {
                status.classList.add("error")
                status.innerHTML = "please fill out email"
                setTimeout(() => {
                    status.classList.remove("error");
                    status.innerHTML = "";
                }, 4000)
            }
            else if (userData.email.indexOf("@") == -1) {
                status.classList.add("error")
                status.innerHTML = "please fill out valid email"
                setTimeout(() => {
                    status.classList.remove("error");
                    status.innerHTML = "";
                }, 4000)
            }
        }
        else if (userData.message == "") {
            status.classList.add("error");
            status.innerHTML = "please fill out message"
            setTimeout(() => {
                status.classList.remove("error");
                status.innerHTML = "";
            }, 4000);
        }
        else {
            let interval = window.setInterval(animateSpinner, 75);
            axios({
                method: "post",
                url: 'https://contact-form-backend-234.herokuapp.com/send',
                data: userData,
                headers: {
                    "content-type": "application/json"
                }
            }).then((response) => {
                window.clearInterval(interval);
                console.log(response);
                clearSpinner.call(window);
                if (response.data.emailSent) {
                    status.classList.add("success");
                    status.innerHTML = "email was successfully sent"
                    setTimeout(() => {
                        status.classList.remove("success");
                        status.innerHTML = "";
                    }, 4000);
                    document.getElementById("contact-form").reset();
                }
            }).catch((err) => {
                if (err) {
                    status.classList.add("error");
                    status.innerHTML = "email wasn't sent, please try again"
                    setTimeout(() => {
                        status.classList.remove("error");
                        status.innerHTML = "";
                    }, 4000);
                }
            });
        }

    }, false)


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
    earthMesh.position.y = 350;
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
    saturnMesh.position.y = 700;
    scene.add(saturnMesh)

    const sunTexture = new THREE.TextureLoader().load(Sunbasic);
    const sunMaterial = new THREE.MeshBasicMaterial({
        map: sunTexture
    })
    const sunGeometry = new THREE.SphereGeometry(400, 100, 100);
    const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);

    sunMesh.position.z = 200;
    sunMesh.position.x = 1500;
    sunMesh.position.y = 1350;
    scene.add(sunMesh)

    const mercuryTexture = new THREE.TextureLoader().load(Mercurybasic);
    const mercuryMaterial = new THREE.MeshBasicMaterial({
        map: mercuryTexture
    })
    const mercuryGeometry = new THREE.SphereGeometry(50, 100, 100);
    const mercuryMesh = new THREE.Mesh(mercuryGeometry, mercuryMaterial);

    mercuryMesh.position.z = -200;
    mercuryMesh.position.x = 1100;
    mercuryMesh.position.y = 300;
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
    window.requestAnimationFrame(loop);
    let options = {
        root: null,
        threshold: 0.35
    };
    let element = document.getElementsByClassName("softprogress")[0];
    let observer = new IntersectionObserver(function (entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) animate.call(window);
        })
    }, options);
    observer.observe(element);

    function animate() {
        if (
            document.querySelectorAll(".softprogress").length > 0 &&
            document.querySelectorAll(".softprogress [code-softprogress]").length > 0
        ) {
            document
                .querySelectorAll(".softprogress [code-softprogress]")
                .forEach((x) => runsoftprogress(x));
        }
    };
    function runsoftprogress(el) {
        el.className = "run-softprogress";
        el.setAttribute(
            "style",
            `--run-softprogress:${el.getAttribute("code-softprogress")}%;`
        );
    }
})();