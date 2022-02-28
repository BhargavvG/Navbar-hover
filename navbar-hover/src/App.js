import logo from "./logo.svg";
import Navbar from "./component/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <h2>Body Container</h2>
      <img
        src="https://ik.imagekit.io/2e5xfxvehcg/Myntra/Assets/img/carousel1_qD4cgmXKm.jpg"
        class="d-block w-100"
      ></img>
      <img
        src="https://ik.imagekit.io/2e5xfxvehcg/Myntra/Assets/img/carousel2_dL7cn7d9j.webp"
        class="d-block w-100"
      />
    </>
  );
}

export default App;
