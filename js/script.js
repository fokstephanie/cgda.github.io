
var scene, camera, renderer;

var WIDTH  = Math.min(1000,window.innerWidth);
var HEIGHT = 400;

var SPEED = 0.01;

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xffffff );

    initCube();
    initCamera();
    initRenderer();

    $("#splash").append(renderer.domElement);
}

function initCamera() {
    camera = new THREE.PerspectiveCamera(50, WIDTH / HEIGHT, 1, 10);
    camera.position.set(0, 3.5, 5);
    camera.lookAt(scene.position);
}

function initRenderer() {
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(WIDTH, HEIGHT);
}

function initCube() {
    cube = new THREE.Mesh(new THREE.CubeGeometry(3, 3, 3), new THREE.MeshNormalMaterial());
    scene.add(cube);
}

function rotateCube() {
    cube.rotation.x -= SPEED * 2;
    cube.rotation.y -= SPEED;
    cube.rotation.z -= SPEED * 3;
}

function render() {
    requestAnimationFrame(render);
    rotateCube();
    renderer.render(scene, camera);
}

init();
render();