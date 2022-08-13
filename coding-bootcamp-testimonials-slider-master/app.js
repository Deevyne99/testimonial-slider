const data = [
  {
    quote: ` “ I’ve been interested in coding for a while but never taken the jump, until now. 
  I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
  excited about the future. ”`,
    name: 'Tanya Sinclair',
    work: 'UX Engineer',
    img: './images/image-tanya.jpg',
  },
  {
    quote: ` “ If you want to lay the best foundation possible I’d recommend taking this course. 
  The depth the instructors go into is incredible. I now feel so confident about 
  starting up as a professional developer. ”,
`,
    name: 'John Tarkpor',
    work: 'Junior Front-end Developer',
    img: './images/image-john.jpg',
  },
]

const nextBtn = document.getElementById('next-btn')
const prevBtn = document.getElementById('prev-btn')
const name = document.getElementById('name')
const quote = document.getElementById('quote')
const work = document.getElementById('work')
const image = document.getElementById('image')
let currentItem = 0

//load Dom content from browser
window.addEventListener('DOMContentLoaded', function () {
  showdata()
})

nextBtn.addEventListener('click', () => {
  currentItem++
  if (currentItem > data.length - 1) {
    currentItem = 0
  }
  showdata()
})

prevBtn.addEventListener('click', () => {
  currentItem--
  if (currentItem < 0) {
    currentItem = data.length - 1
  }
  showdata()
})

function showdata() {
  const item = data[currentItem]
  quote.textContent = item.quote
  name.textContent = item.name
  work.textContent = item.work
  image.src = item.img
}
