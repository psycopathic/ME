
import LetterGlitch from "./components/LetterGlitch";

function App() {
  return (
    <>
      <div style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 0, overflow: 'hidden' }}>
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
      </div>
      <section style={{ position: 'relative', zIndex: 1 }}>
        <h1>
          <span>P</span>
          <span>S</span>
          <span>Y</span>
          <span>C</span>
          <span>O</span>
          <span>P</span>
          <span>A</span>
          <span>T</span>
          <span>H</span>
          <span>I</span>
          <span>C</span>
        </h1>
        <div className="cta">
          <button onClick={() => window.location.href = 'https://myself2-y7n9.onrender.com'}>
            <span>Click here to know me!!</span>
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
