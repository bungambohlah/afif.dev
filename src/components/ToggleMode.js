import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { HiMoon, HiSun } from 'react-icons/hi'

export default function ToggleMode() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

  return (
    <div className='transition duration-500 ease-in-out rounded-full p-2'>
      {theme === 'dark' ? (
        <HiSun
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className='text-gray-500 dark:text-gray-400 text-2xl cursor-pointer'
        />
      ) : (
        <HiMoon
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className='text-gray-500 dark:text-gray-400 text-2xl cursor-pointer'
        />
      )}
    </div>
  )
}
