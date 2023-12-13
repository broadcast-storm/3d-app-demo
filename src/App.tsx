import { createSignal, onMount, Ref } from 'solid-js'
import solidLogo from './assets/solid.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { setupCubeDemo } from './components/cube.demo';

let canvasRef: Ref<HTMLCanvasElement> | undefined;

function App() {
  const [count, setCount] = createSignal(0)

  onMount(() => {
    if(canvasRef){
      setupCubeDemo(canvasRef as HTMLCanvasElement)
    }
  })

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://solidjs.com" target="_blank">
          <img src={solidLogo} class="logo solid" alt="Solid logo" />
        </a>
      </div>
      <h1>Vite + Solid</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count()}
        </button>
      </div>
      <canvas ref={canvasRef} style={{width: '600px', height: '400px'}} />
    </>
  )
}

export default App
