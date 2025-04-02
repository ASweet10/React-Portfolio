import React from 'react'
import { useState, useEffect } from 'react'

const useColorMode = () => {
    const [ colorMode, setColorMode ] = useState('dark')

    useEffect(() => {
        const theme = localStorage.getItem('theme')
        if (theme) {
          setColorMode(theme === 'dark' ? 'dark' : 'light')
        }
    }, [])

    return [ colorMode, setColorMode ]
}

export default useColorMode