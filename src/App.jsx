import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
     <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap 
      justify-center bottom-12 insert-x-0 px-2">
        <div className="flex flex-wrap justify-center
        gap-3 shadow-lg bg-white px-2 py-2" rounded-3xl>
<button 
onClick={()=>setColor("red")}
className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
 style={{backgroundColor:"red"}}>Red</button>
 <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
 style={{backgroundColor:"gray"}}>gray</button>
 <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
 style={{backgroundColor:"orange"}}>orange</button>
 <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
 style={{backgroundColor:"green"}}>green</button>
 <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
 style={{backgroundColor:"blue"}}>blue</button></div>


      </div>
     </div>
  
  )
}

export default App
