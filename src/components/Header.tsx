import Sun from '/assets/images/icon-sun.svg'
import Moon from '/assets/images/icon-moon.svg'
import Logo from '/assets/images/logo.svg'

type HeaderProps={
     darkMode:boolean
     toggleDarkMode:()=>void
}

function Header(props:HeaderProps) {

  return (
    <header>
          <div className={`container mx-auto px-4 py-6 md:px-0 ${props.darkMode ? 'dark' : ''}`}>
               <div className="flex items-center justify-between bg-neutral-0 dark:bg-neutral-700 p-4 rounded-lg shadow-2xl">
                    <img src={Logo} alt="logo" />
                    <button className="bg-neutral-300 dark:bg-neutral-500 p-2 rounded-lg cursor-pointer" onClick={props.toggleDarkMode}><img src={props.darkMode ? Sun: Moon} alt="switch to dark mode" /></button>
               </div>
          </div>
    </header>
  )
}

export default Header