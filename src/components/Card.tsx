import Toggle from "./Toggle"
type CardProps={
     title:string
     description:string
     src:string
     darkMode:boolean
     isActive:boolean
     onToggle: () => void

}

function Card(props:CardProps) {
  return (
    <>
          <div className="card">
               <div className={`bg-white dark:bg-neutral-800 rounded-2xl p-6 flex flex-col justify-between h-full w-full ${props.darkMode ? 'dark' : ''}`}>
                    <div className="flex gap-4">
                         <div><img src={props.src} alt="" /></div>
                         <div>
                              <p className="font-semibold text-xl text-neutral-900 dark:text-neutral-100">{props.title}</p>
                              <p className="text-neutral-500 dark:text-neutral-300">{props.description}</p>
                         </div>
                    </div>
                    <div className="mt-10 flex items-center justify-between">
                         <button className="rounded-full px-4 py-2 border-2 border-neutral-300 dark:text-neutral-300">Remove</button>
                         <Toggle isActive={props.isActive} onToggle={props.onToggle}/>
                    </div>
               </div>
          </div>
    </>
  )
}

export default Card