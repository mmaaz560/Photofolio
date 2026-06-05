import React, { createContext, useContext, useState } from 'react';
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [theme , setTheme] = useState( true )
  const [showmodel , setShowmodel] = useState(false)
  const [image , setimage] = useState('')

   const colors = {
    text: theme ? 'dark' : 'light',
    bg: theme ? 'bg-black text-white' : 'bg-white text-black',
    border: theme ? 'border-white' : 'border-black',
    button: theme
      ? 'bg-gray-800 text-white hover:bg-gray-700'
      : 'bg-gray-200 text-black hover:bg-gray-300',
    card: theme
      ? 'bg-gray-900 shadow-lg'
      : 'bg-gray-100 shadow-md',
   }
    return <AppContext.Provider value={{theme, colors , setTheme ,showmodel , setShowmodel , image , setimage
    }}>
      {children}
    </AppContext.Provider>
}

export const useGlobal = () =>{
  return useContext(AppContext)
}