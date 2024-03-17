export default function Header({theme, setTheme}: { theme: string, setTheme: Function}) {
  function handleClick() {
    theme == 'dark' ? setTheme('light') : setTheme('dark');
  }

  return (
    <div className="flex flex-row w-full items-center">
      <h1 className="text-[48px] uppercase tracking-[0.3em]">todo</h1>
      <button className="ml-auto" onClick={() => handleClick()}><img src={theme == 'dark' ? '/icon-sun.svg' : 'icon-moon.svg' } /></button>
    </div>
  )
};