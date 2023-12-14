import { createSignal, onMount, Ref } from 'solid-js';
import { setupCubeDemo } from './components/cube.demo';

let canvasRef: Ref<HTMLCanvasElement> | undefined;

function App() {
    const [count, setCount] = createSignal(0);

    onMount(() => {
        if (canvasRef) {
            setupCubeDemo(canvasRef as HTMLCanvasElement);
        }
    });

    return (
        <div class="flex flex-col justify-center items-center gap-8 p-4 bg-slate-100 h-screen">
            <h1 class="text-3xl font-bold">Hello world!</h1>
            <button
                class="bg-blue-500 text-cyan-50 py-2 px-4 block rounded-md"
                onClick={() => setCount((count) => count + 1)}>
                count is {count()}
            </button>
            <canvas
                ref={canvasRef}
                style={{
                    width: '600px',
                    height: '400px',
                }}
            />
        </div>
    );
}

export default App;
