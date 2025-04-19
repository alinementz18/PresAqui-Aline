import Header from "./components/Header";
import Item from "./components/item";




function App() {
  return (
    <>
     <Header/>


     <section>
      <div className="mx-auto grid max-w-7xl grid-cols-[repeat(auto-fit,minmax(225px,1fr))] gap-8 p-8">
      <Item/>
      <Item/>
      <Item/>
      <Item/>
      <Item/>
      <Item/>
      <Item/>
      <Item/>
     </div>
     </section>
    </>
  );
}

export default App;
