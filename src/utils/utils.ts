export const changeColor = (color: string) => {
  const body = document.querySelector('body')
  if (color === 'primary') {
    body.classList.add('bg-primary', 'text-white')
  } else {
    body.classList.remove('bg-primary', 'text-white')
  }
}
