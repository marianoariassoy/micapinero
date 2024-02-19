import { useState, createContext } from 'react'

export const Context = createContext(null)

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [lan, setLan] = useState<string>('en')

  const toggleLanguage = () => {
    setLan(prevLanguage => (prevLanguage === 'en' ? 'es' : 'en'))
  }

  return <Context.Provider value={{ lan, toggleLanguage }}>{children}</Context.Provider>
}
