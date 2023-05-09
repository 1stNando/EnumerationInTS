import './style.css'
//ALWAYS RUN NPM INSTALL to have the vite be able to launch the browser
const colors = ['red', 'green', 'blue']

function logSomeColor(color: string, index: number) {
  console.log(`The color at position ${index} is ${color}`)
}

colors.forEach(logSomeColor)
