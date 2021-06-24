// Links
const allQuotesUrl = 'http://localhost:3000/quotes?_embed=likes'
const quotesUrl = 'http://localhost:3000/quotes'
// Globals
const quoteList = document.querySelector('#quote-list')
const form = document.querySelector('#new-quote-form')
const quoteCard = document.querySelector('.quote-card')
const randomBtn = document.querySelector('.random')




// Get Request
fetch(allQuotesUrl)
.then(resp => resp.json())
.then(quotesArray => {
  quotesArray.map(quote => {
    const quoteCardLi = document.createElement('li')
    quoteCardLi.className = 'quote-card'
    quoteCardLi.innerHTML = `<blockquote class="blockquote" id='${quote.id}'>
    <p class="mb-0">${quote.quote}</p>
    <footer class="blockquote-footer">${quote.author}</footer>
    <br>
    <button class='btn-success'>Likes: <span class='span-like'>${quote.likes.length}</span></button>
    <button class='btn-danger'>Delete</button>
    <button class='random'>See Who Was Here</button>
  </blockquote>`
  quoteList.style.listStyleType = 'none'
  quoteList.append(quoteCardLi)
  })
  
  
})

// Post Request
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const newQuote = e.target[0].value
  const newAuthor = e.target[1].value
  

  fetch(quotesUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      quote: newQuote,
      author: newAuthor
    })
  })
  .then(resp => resp.json())
  .then(quoteObj => {
      const newQuoteLi = document.createElement('li')
      newQuoteLi.className = 'quote-card'
      newQuoteLi.innerHTML = `<blockquote class="blockquote" id='${quoteObj.id}'>
      <p class="mb-0">${quoteObj.quote}</p>
      <footer class="blockquote-footer">${quoteObj.author}</footer>
      <br>
      <button class='btn-success'>Likes: <span class='span-like'>${0}</span></button>
      <button class='btn-danger'>Delete</button>
      <button class='random'>See Who Was Here</button>
    </blockquote>`
    quoteList.style.listStyleType = 'none'
    quoteList.append(newQuoteLi)
  })
})

quoteList.addEventListener('click', (e) => {
    if (e.target.className === 'btn-danger') {
        e.target.parentElement.remove()  
    
    fetch(`http://localhost:3000/quotes/${e.target.parentElement.id}`, {
       method: 'DELETE'
    })
   } else if (e.target.className === 'random') {
    let paragraph = e.target.parentElement.firstElementChild
    paragraph.innerHTML = 'Jacob was here!'
   } 
})




// fetch('http://localhost:3000/likes', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json'
//   },
//   body: JSON.stringify({
//     quoteId: 0
//   })
// })