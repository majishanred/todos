import { useEffect, useState } from "react";
import Header from "./components/Header";

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.classList.add(theme);

    return () => document.documentElement.classList.remove(theme);
  }, [theme]);

  return (
    <>
      <img className="fixed w-full h-auto -z-40" src={theme == 'dark' ? '/bg-desktop-dark.jpg' : '/bg-desktop-light.jpg'} />
      <div className="fixed w-full h-full bg-[hsl(237,14%,26%)] -z-50"></div>
      <div className="flex justify-center w-full text-white">
        <div className="grid grid-cols-[minmax(540px,640px)] mt-10">
          <Header theme={theme} setTheme={setTheme}></Header>
        </div>
      </div>
    </>
  )
}

export default App
