import smokeVideo from "./assets/smoke.mp4";

function App() {
  return (
    <>
      <section>
        <video src={smokeVideo} autoPlay muted></video>
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
          <button>
            <span>Click here to know me!!</span>
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
