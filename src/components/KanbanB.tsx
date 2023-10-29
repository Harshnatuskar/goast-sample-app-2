import { useState } from "react";
import { Column, Id } from "../types";
import ColContainer from "./ColContainer";

function Kanban() {
  const [columns,setColumns] = useState<Column[]>([])

  console.log(columns)

  return (
    <div className="m-auto min-h-screen flex w-full items-center   overflow-x-auto overflow-y-hidden px-[40px]  ">
     <div className="m-auto flex gap-4"> 
     <button onClick={()=>{createNewCol()}}className="  h-[40px] w-[250px] min-w-[250px] rounded-lg bg-black   ring-rose-400 hover:ring-2">Add</button>
     <div className="flex gap-4">
        {columns.map((col)=>(<ColContainer  column={col} deleteCol={deleteCol}/>))}
      </div>
     </div>
      
     
    </div>
  );

  function createNewCol(){ 
      const columnToAdd:Column={
        id: generateId(),
        title: `column ${columns.length +1}`
      }

      setColumns([...columns,columnToAdd])
  }

  function generateId(){
    return Math.floor(Math.random() * 1001)
  }

  function deleteCol(id:Id){
    const filteredCol = columns.filter((col) =>col.id !==id)
    setColumns(filteredCol)
  }
}

export default Kanban;
