import { Column ,Id} from "../types" 
import Trash from "./Trash"

interface Props{
    column: Column
    deleteCol : (id: Id) => void
}

function ColContainer(porps:Props) {
    const { column , deleteCol} = porps
  return (
    <div className="h-[500px] w-[250px] min-h-[400px] rounded-lg bg-black flex flex-col  ">
      <div className=" bg-gray-700 text-md h-[60px] cursor-grab rounded-md rounded-b-none p-4 font-bold border-4 border-black flex items-center justify-between  ">
        {column.title} 
        <button onClick={()=>{
            deleteCol(column.id)
        }}>
            <Trash />
        </button> 
      </div>
      <div className="px-5 flex flex-grow">
        Data
      </div>

       
      <div>
         
      </div>
    </div>
  )
}

export default ColContainer
