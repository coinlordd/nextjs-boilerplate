import { twMerge } from 'tailwind-merge'

export function RadioButtons<TValue extends string | number>({
  selectedOption,
  setSelectedOption,
  options,
  className,
}: {
  selectedOption: TValue
  setSelectedOption: (option: TValue) => void
  options: Array<{
    value: TValue
    label: string | JSX.Element
  }>
  className?: string
}) {
  const selectedIndex = options.findIndex(option => option.value === selectedOption)

  if (!options.length) return null

  return (
    <div className={twMerge('row-start h-full !w-fit !gap-0 overflow-hidden', className)}>
      {options.map((option, index, arr) => (
        <div
          key={index}
          className={`row-center border h-full whitespace-nowrap px-3 w-full ${
            selectedOption === option.value
              ? 'bg-tertiary border-secondary hover:cursor-default'
              : 'bg-primary border-primary hover:cursor-pointer'
          } 
            ${index === 0 && 'rounded-l-xl'}
            ${index === arr.length - 1 && 'rounded-r-xl'}
            ${index > 0 && selectedOption !== option.value && 'border-l-0'}
            ${index === selectedIndex - 1 && 'border-r-0'}
            ${index === selectedIndex + 1 && 'border-l-0'}
          `}
          onClick={() => setSelectedOption(option.value)}
        >
          {option.label}
        </div>
      ))}
    </div>
  )
}

export function RadioTabs<TValue extends string | number>({
  selectedOption,
  setSelectedOption,
  options,
  className,
}: {
  selectedOption: TValue
  setSelectedOption: (option: TValue) => void
  options: Array<{
    value: TValue
    label: string | JSX.Element
  }>
  className?: string
}) {
  return (
    <div className={twMerge('row-between h-full !gap-0 overflow-hidden', className)}>
      {options.map((option, index) => (
        <div
          key={index}
          className={`row-center h-full w-full bg-secondary font-semibold whitespace-nowrap border-b-2 px-3 ${
            selectedOption === option.value
              ? 'text-blue-600 border-blue-300 dark:text-blue-600 dark:border-blue-800 hover:cursor-default'
              : 'text-gray-500 border-blue-100 dark:text-gray-500 dark:border-opacity-50 hover:cursor-pointer'
          }`}
          onClick={() => setSelectedOption(option.value)}
        >
          {option.label}
        </div>
      ))}
    </div>
  )
}
