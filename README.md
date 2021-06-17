# My-Portfolio
link to my portfolio can be found here: https://justinssoftware.com/Portfolio/dist/
This is my Portfolio website. I chose webpack as my bundler of choice due to webpack's excellent configuration options.
Three.js is used to create the 3d environment that serves as the background for my app. I chose to create a space theme for my portfolio due to my love of space and sci-fi.
1000 stars are generated and added to the scene with random x,y,z coordinates and the camera for the scene is positioned in the middle of everything to create the environment.
Only the camera and the "earth" planet are animated, every other asset is in a static position to keep an acceptable performance.
Each planet was created using the three.js "new THREE.SphereGeometry()" constructor along with adding a texture to create each unique planet.
The intersection observer api was used to run animations when a user scrolls to a specific part of the page which then fires a function that runs the animation.
I used OBS Studio to create an mp4 video for my project section to showcase that project. I used Adobe Premier Pro to trim the video as well as encode the video in H.264
so that my video would run inside the "video" html tag
