import SpiralGrid from "./lib/components/SpiralGrid";

function App() {
  return (
    <div className="App">
      <SpiralGrid config={{ item: { width: 100, height: 100 } }}>
        <div>1</div>
        <p>2</p>
        <h3>3</h3>
        <a href="#">4</a>
        <code>5</code>
        <div>6</div>
        <p>7</p>
        <h3>8</h3>
        <a href="#">9</a>
        <code>10</code>
        <div>11</div>
        <p>12</p>
        <h3>13</h3>
        <a href="#">14</a>
        <code>15</code>
      </SpiralGrid>
    </div>
  );
}

export default App;
