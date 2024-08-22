import MenuItem from "./components/MenuItem"
import { menuItems } from "./data/db"

function App() {
  
  console.log(menuItems)

  return (
    <>
      <header className=" bg-teal-400 m-5">
        <h1 className=" text-center text-4xl font-black"> Calculadora de Propinas y Consumo </h1>
      </header>

      <main className="max-w-7xl mx-auto mt-3 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className=" text-4xl font-black"> Menú</h2>
         <div className="space-y-3 mt-5" >
         {menuItems.map(item => (
            <MenuItem 
              key={item.id}
              item = {item}
            />
          ))}
         </div>
        </div>
        <div>
          <h2>Consumo</h2>

        </div>
      </main>
    </>
  )
}

export default App
