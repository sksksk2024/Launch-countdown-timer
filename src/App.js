import Clock from "./components/Clock";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <main className="flex flex-col justify-center items-center">
        <h1 className="text-lg sm:text-xl tracking-widest text-white mb-64M">
          We're launching soon
        </h1>
        <Clock />
      </main>
      <Footer />
    </>
  );
}

export default App;
