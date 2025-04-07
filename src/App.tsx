import Header from "./components/Header"
import Content from "./components/Content"
import { useState, useEffect } from "react"

function App() {
  const [darkMode, setDarkMode] = useState(false);
 



  // useEffect(() => {
  //      let savedMode = localStorage.getItem("displayMode")
  //      if(!savedMode){
  //           savedMode='light'
  //           setDarkMode(false)
  //           localStorage.setItem("displayMode", savedMode)
  //      }
  //      setDarkMode(savedMode === 'dark' ? true : false)
  // }, [])

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("bg-[#09153e]");
      document.body.classList.add("dark");
      document.body.classList.remove('bg-[#d6e2f5]')
    } else {
      document.body.classList.remove('bg-[#09153e]')
      document.body.classList.add('bg-[#d6e2f5]')
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
    <Header
      darkMode={darkMode}
      toggleDarkMode={toggleDarkMode}
    />
    <Content
      darkMode={darkMode}

    />
    </>
  )
}

export default App
