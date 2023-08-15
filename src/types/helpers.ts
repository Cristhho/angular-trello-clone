export type Status = 'init' | 'loading' | 'error' | 'failed' | 'success'
export type Color = 'sky' | 'yellow' | 'green' | 'red' | 'violet' | 'gray' | 'success' | 'error' | 'warning' | 'gray-light' | 'primary'
export type ColorsMapKeys = Record<Color, string>
export const COLORS: ColorsMapKeys = {
  success: 'bg-success-500 hover:bg-success-700',
  error: 'bg-red-500 hover:bg-red-700',
  warning: 'bg-yellow-500 hover:bg-yellow-700',
  'gray-light': 'bg-gray-200 hover:bg-gray-400',
  primary: 'bg-primary-500 hover:bg-primary-700',
  sky: 'bg-sky-700 hover:bg-sky-800',
  yellow: 'bg-yellow-700 hover:bg-yellow-800',
  green: 'bg-green-700 hover:bg-green-800',
  red: 'bg-red-700 hover:bg-red-800',
  violet: 'bg-violet-700 hover:bg-violet-800',
  gray: 'bg-gray-700 hover:bg-gray-800'
}
