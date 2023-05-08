import Login from "./components/Login";

function App() {
  return (
    <>
      <div className="h-full">
        <div className="absolute h-screen w-80">
          <Login />
        </div>
        <div className="bg-[#373435]">
          <img src="/src/assets/bg5.png" alt="bg" className="h-screen w-screen object-cover pl-[180px]"/>
        </div>
      </div>
    </>
  );
}

export default App;
