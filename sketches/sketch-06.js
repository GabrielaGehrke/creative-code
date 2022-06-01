const canvasSketch = require('canvas-sketch')
const math = require('canvas-sketch-util/math')
const random = require('canvas-sketch-util/random')
const { Pane } = require('tweakpane')

const settings = {
  dimensions: [1080, 1080]
}

const params = {
  redFilter: 0
}

let img

const typeCanvas = document.createElement('canvas')
const typeContext = typeCanvas.getContext('2d')

const sketch = ({ context, width, height }) => {
  const cell = 7
  const rows = Math.floor(width / cell)
  const cols = Math.floor(height / cell)
  const numCells = cols * rows

  typeCanvas.width = cols
  typeCanvas.height = rows
  typeContext.fillStyle = 'black'
  typeContext.fillRect = (0, 0, cols, rows)

  typeContext.drawImage(img, 0, 0, cols, rows)

  const typeData = typeContext.getImageData(0, 0, cols, rows).data

  context.fillStyle = 'black'
  context.fillRect = (0, 0, width, height)

  const agents = []

  for (let i = 0; i < numCells; i++) {
    const cols = i % cols
    const row = Math.floor(i / cols)

    const x = col * cell
    const y = row * cell

    const r = typeData[i * 4 + 0]
    const g = typeData[i * 4 + 1]
    const b = typeData[i * 4 + 2]

    if (r < 100) continue
  }
}

const url = 'https://picsum.photos/200/300'

const start = async () => {
  img = await loadImage(url)
  creatPAne()
  canvasSketch(sketch, settings, img)
}

start()

class Agent {
  constructor(x, y, radius, rgb, velx, vely) {
    this.pos = new Vector(x, y)
    this.vel = new Vector(velx, vely)
    this.rad = radius
    this.rgb = rgb
    this.initPos = new Vector(x, y)
  }
}
