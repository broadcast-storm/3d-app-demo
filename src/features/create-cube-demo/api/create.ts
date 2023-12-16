import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

function createPanel() {
    const panel = new GUI({
        width: 310,
        container: document.getElementById('canvas-container') || undefined,
    });

    const folder1 = panel.addFolder('Visibility');
    const folder2 = panel.addFolder('Activation/Deactivation');

    const settings = {
        'show model': true,
        'show skeleton': false,
        'deactivate all': function () {},
    };

    folder1.add(settings, 'show model').onChange(() => {});
    folder1.add(settings, 'show skeleton').onChange(() => {});
    folder2.add(settings, 'deactivate all');
}

export const setupCubeDemo = (canvas: HTMLCanvasElement) => {
    if (WebGL.isWebGL2Available() === false) {
        document.body.appendChild(WebGL.getWebGL2ErrorMessage());
        return;
    }

    createPanel();

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 600 / 400, 0.1, 1000);
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });

    function animate() {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);
    }

    animate();
};
