import { useState, useEffect } from 'react'

const useLocalStorage = (key, initialValue) => {
  const [ storedValue, setStoredValue ] = useState(() => {
    try {
        const item = window.localStorage.getitem(key) // Get from local storage by key

        return item ? JSON.parse(item) : initialValue // Parse stored json or if none, return initial value

    } catch(error) {
        console.log(error)
        return initialValue //If error return initial value
    }
  })

  // Update local storage when state changes
    useEffect(() => {
        try {
            const valueToStore = typeof storedValue === 'function' 
                ? storedValue(storedValue)
                : storedValue
            
            window.localStorage.setItem(key, JSON.stringify(valueToStore)) // Save state
        } catch(error) {
            console.log(error)
        }
    }, [key, storedValue])

    return [ storedValue, setStoredValue ]
}

export default useLocalStorage