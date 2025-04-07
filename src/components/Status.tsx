
type StatusProps = {
     active: boolean | null; // Can be true (active), false (inactive), or null (all)
     setActive: (active: boolean | null) => void; 
}

function Status(props:StatusProps) {
  return (
    <div  className="flex flex-col md:flex-row items-center justify-between md:py-3 md:px-0 w-full">
          <div>
               <p className="font-semibold text-neutral-900 dark:text-white mb-4 md:mb-0 text-4xl">Extention List</p>
          </div>

          <div className="flex items-center justify-between gap-4">
               <button className={`px-6 py-3 rounded-full ${props.active===null ? 'dark:text-neutral-800 text-white bg-red-500': 'bg-neutral-50 text-black dark:text-white dark:bg-neutral-700'} cursor-pointer  `} onClick={() => props.setActive(null)}>All</button>
               <button className={`px-6 py-4 rounded-full  cursor-pointer ${props.active===true ? 'dark:text-neutral-800 text-white bg-red-500': 'bg-neutral-50 text-black dark:text-white dark:bg-neutral-700'}`} onClick={() => props.setActive(true)}>Active</button>
               <button className={`px-6 py-4 rounded-full  cursor-pointer ${props.active===false ? 'dark:text-neutral-800 text-white bg-red-500': 'bg-neutral-50 text-black dark:text-white dark:bg-neutral-700'}`} onClick={() => props.setActive(false)}>Inactive</button>
          </div>
    </div>
  )
}

export default Status