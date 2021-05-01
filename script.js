const canvas = document.getElementById('canvas');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
const colorel = document.getElementById('color');
const sizeel = document.getElementById('size');
const clear = document.getElementById('clear');
const ctx = canvas.getContext('2d');

let size =10;
let ispressed=false
let color = 'black' 
let x
let y  

canvas.addEventListener('mousedown', (e) => {
      ispressed = true
  
      x = e.offsetX
      y = e.offsetY
  })
  
  canvas.addEventListener('mouseup', (e) => {
      ispressed = false
  
      x = undefined
      y = undefined
  })
  
  canvas.addEventListener('mousemove', (e) => {
      if(ispressed) {
          const x2 = e.offsetX
          const y2 = e.offsetY
  
          drawcircle(x2, y2)
          drawline(x, y, x2, y2)
  
          x = x2
          y = y2
      }
  })
  
  function drawcircle(x, y) {
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2)
      ctx.fillStyle = color
      ctx.fill()
  }
  
  function drawline(x1, y1, x2, y2) {
      ctx.beginPath()
      ctx.moveTo(x1, y1)
      ctx.lineTo(x2, y2)
      ctx.strokeStyle = color
      ctx.lineWidth = size * 2
      ctx.stroke()
  }
function updatesizeonscreen()
{
      sizeel.innerText=size
}


colorel.addEventListener('change' , (e) => color=e.target.value)

increase.addEventListener('click',() => {
      size +=5
      if(size>50)
      {
            size=50
      }
updatesizeonscreen()

})
decrease.addEventListener('click',() => {
      size -=5
      if(size<5)
      {
            size=5
      }
updatesizeonscreen()

})

clear.addEventListener('click',()=>ctx.clearRect(0,0,canvas.width,canvas.height))