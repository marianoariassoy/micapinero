const body = document.querySelector('body')

export const changeColor = (color: string) => {
  const themeColor = document.querySelector('meta[name="theme-color"]')
  if (color === 'primary') {
    body.classList.add('bg-primary', 'text-white')
    themeColor.setAttribute('content', '#0047ab')
  } else {
    body.classList.remove('bg-primary', 'text-white')
    themeColor.setAttribute('content', '#FFFFFF')
  }
}
