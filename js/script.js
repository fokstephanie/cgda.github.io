
var scene, camera, renderer;

var WIDTH  = Math.min(1000,window.innerWidth);
var HEIGHT = 400;

var SPEED = 0.01;

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xffffff );

    initMesh();
    initCamera();
    initRenderer();

    document.getElementById("splash").appendChild(renderer.domElement);(renderer.domElement);
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

function initMesh() {
    mesh = new THREE.Mesh(new THREE.IcosahedronGeometry(2.5, 0), new THREE.MeshBasicMaterial({
    	color: 0xff8800,
    	wireframe: true
    }));
    scene.add(mesh);
}

function rotateMesh() {
    mesh.rotation.x -= SPEED;
    mesh.rotation.y -= SPEED * 2;
    mesh.rotation.z -= SPEED * 3;
}

function render() {
    requestAnimationFrame(render);
    rotateMesh();
    renderer.render(scene, camera);
}

init();
render();