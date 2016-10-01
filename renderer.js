const exec = require('child_process').exec;

const cameraEl = document.getElementById('camera')
const keyFilters = {
  'q': 'grayscale',
  'w': 'sepia',
  'e': 'saturate',
  'r': 'hue-rotate',
  'a': 'invert',
  's': 'opacity',
  'd': 'brightness',
  'f': 'contrast',
  'z': 'blur',
  'x': 'tint',
  'c': 'multiple-filters',
  'v': 'inkwell'
}

navigator.webkitGetUserMedia({
    video: true
  },
  (stream) => {
    cameraEl.src = URL.createObjectURL(stream)
  },
  () => {
    alert('could not connect stream')
  }
)

document.addEventListener('keydown', event => {
  const filter = keyFilters[event.key]
  if (!filter) {
    cameraEl.className = ''
    return
  }
  cameraEl.className = filter
})
