import { useEffect } from 'react';
import { Home } from "./scenes/Home";
function App() {

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      <Home />
      <button
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }}
        className='
          z-99
          fixed
          bottom-3
          right-3
          p-4
          bg-amber-500 
          text-white 
          rounded-md
          transition ease-in-out delay-150 duration-300
          hover:-translate-y-2'
      >
        <svg xmlns="http://www.w3.org/2000/svg" height={18} width={18} viewBox="0 0 512 512"><path fill="#ffffff" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" /></svg>
      </button>
    </>
  )
}

export default App
