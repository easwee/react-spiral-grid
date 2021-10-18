import SpiralGrid from "./lib/components/SpiralGrid";

function App() {
  return (
    <div className="App">
      <div style={{ width: "400px", height: "400px" }} className="test">
        <SpiralGrid config={{ item: { width: 100, height: 100 } }}>
          <div>0</div>
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
          <div>16</div>
          <p>17</p>
          <h3>18</h3>
          <a href="#">19</a>
          <code>20</code>
          <div>21</div>
          <p>22</p>
          <h3>23</h3>
          <a href="#">24</a>
          <code>25</code>
        </SpiralGrid>
      </div>
    </div>
  );
}

export default App;
