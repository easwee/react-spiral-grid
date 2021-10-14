import SpiralGrid from "./lib/components/SpiralGrid";

function App() {
  return (
    <div className="App">
      <SpiralGrid config={{ item: { width: 100, height: 100 } }}>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </SpiralGrid>
    </div>
  );
}

export default App;
