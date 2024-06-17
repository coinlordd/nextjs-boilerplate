'use client'

import { twMerge } from 'tailwind-merge'
import Moon from '@mui/icons-material/DarkMode'
import Sun from '@mui/icons-material/LightMode'

import { useCurrentTheme } from '@/hooks/useTheme'
import { useHasMounted } from '@/hooks/useHasMounted'
import { RadioButtons } from '../radio'

export default function ThemeSwitch({ className }: { className?: string }) {
  const mounted = useHasMounted()
  const { theme, setTheme } = useCurrentTheme()

  if (!mounted) {
    return null
  }

  return (
    <div className={twMerge('relative h-full hover:cursor-pointer', className)}>
      <RadioButtons
        selectedOption={theme}
        setSelectedOption={setTheme}
        options={[
          { value: 'light', label: <Sun className='text-yellow-600 dark:text-yellow-400' /> },
          { value: 'dark', label: <Moon className='text-blue-900 dark:text-blue-600' /> },
        ]}
      />
    </div>
  )
}
