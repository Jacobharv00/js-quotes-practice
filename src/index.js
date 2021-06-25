// Links
// const allQuotesUrl = 'http://localhost:3000/quotes?_embed=likes'
// const quotesUrl = 'http://localhost:3000/quotes'
// // Globals
// const quoteList = document.querySelector('#quote-list')
// const form = document.querySelector('#new-quote-form')
// const quoteCard = document.querySelector('.quote-card')
// const randomBtn = document.querySelector('.random')




// // Get Request
// fetch(allQuotesUrl)
// .then(resp => resp.json())
// .then(quotesArray => {
//   quotesArray.map(quote => {
//     const quoteCardLi = document.createElement('li')
//     quoteCardLi.className = 'quote-card'
//     quoteCardLi.innerHTML = `<blockquote class="blockquote" id='${quote.id}'>
//     <p class="mb-0">${quote.quote}</p>
//     <footer class="blockquote-footer">${quote.author}</footer>
//     <br>
//     <button class='btn-success' id=like-quote${quote.id}>Likes: <span>${quote.likes.length}</span></button>
//     <button class='btn-danger'>Delete</button>
//     <button class='random'>See Who Was Here</button>
//   </blockquote>`
//     quoteList.style.listStyleType = 'none'
//     quoteList.append(quoteCardLi)
//     let likeBtn = quoteCardLi.querySelector(`#like-quote${quote.id}`)
//     likeBtn.addEventListener('click', (e) => {
//       //let currentLikes = e.target.lastChildElement.innerHTML
//       console.log(e.target.lastElementChild.innerText)
//       debugger
//     })
//   })
// })

// // Post Request
// form.addEventListener('submit', (e) => {
//   e.preventDefault()
//   const newQuote = e.target[0].value
//   const newAuthor = e.target[1].value
  

//   fetch(quotesUrl, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//     },
//     body: JSON.stringify({
//       quote: newQuote,
//       author: newAuthor
//     })
//   })
//   .then(resp => resp.json())
//   .then(quoteObj => {
//       const newQuoteLi = document.createElement('li')
//       newQuoteLi.className = 'quote-card'
//       newQuoteLi.innerHTML = `<blockquote class="blockquote" id='${quoteObj.id}'>
//       <p class="mb-0">${quoteObj.quote}</p>
//       <footer class="blockquote-footer">${quoteObj.author}</footer>
//       <br>
//       <button class='btn-success'>Likes: <span id=like-quote${quoteObj.id}>${0}</span></button>
//       <button class='btn-danger'>Delete</button>
//       <button class='random'>See Who Was Here</button>
//     </blockquote>`
//     quoteList.style.listStyleType = 'none'
//     quoteList.append(newQuoteLi)
  
//   })
// })

// quoteList.addEventListener('click', (e) => {
//     if (e.target.className === 'btn-danger') {
//         e.target.parentElement.remove()  
    
//     fetch(`http://localhost:3000/quotes/${e.target.parentElement.id}`, {
//        method: 'DELETE'
//     })
//    } else if (e.target.className === 'random') {
//     let paragraph = e.target.parentElement.firstElementChild
//     paragraph.innerHTML = 'Jacob was here!'
//    } 
// })




// .then(data => renderQuote(data))


// function renderQuote(quote){
//   let quoteLi = document.createElement(‘li’)
//   quoteLi.className = ‘quote-card’
//   let deleteBtn = document.createElement(‘button’)
//   deleteBtn.className = ‘btn-danger’
//   deleteBtn.innerText = ‘ew no’
//   deleteBtn.addEventListener(‘click’, () => deleteQuote(quote, quoteLi))
//   let likeBtn = document.createElement(‘button’)
//   likeBtn.className = ‘btn-success’
//   likeBtn.innerText = ‘we stan’
//   likeBtn.innerHTML = `Likes: <span>${quote.likes.length}</span>`
//   likeBtn.addEventListener(‘click’, () => likeQuote(quote, quoteLi))
//   quoteList.append(quoteLi)
//   quoteLi.innerHTML += `<blockquote class='blockquote”>
//         <p class=“mb-0">${ quote.quote }</p>
//         <footer class=“blockquote-footer”>${ quote.author }</footer>`
//   quoteLi.append(deleteBtn, likeBtn)
// }


// function likeQuote(quote, quoteLi){
//   let likeArray = quote.likes
//   let likesNum = likeArray.length
//   let likeBtn = quoteLi.querySelector(‘.btn-success’)
//   console.log(‘likes -> ’,likeArray);
//   fetch(`http://localhost:3000/likes/${ quote.id }`, {
//     method: ‘POST’,
//     headers: {
//       ‘content-type’: ‘application/json’,
//       ‘accept’: ‘application/json’
//     },
//     body: JSON.stringify({
//       quoteId: quote.id
//     })
//   })
//   .then(r => r.json())
//   .then((like) => {
//     likeArray.push(like)
//     likeBtn.innerHTML = `Likes: <span>${ likesNum }</span>`
//   })
// }














// quoteList.addEventListener('click', (e) => {
 
//   if (e.target.className === 'btn-success') {
//     let likeBtn = document.querySelectorAll('.btn-success')
    
//     let likeArray = Array.from(likeBtn) 
//     likeArray.map(like => {
//         let spanLike = like.lastElementChild.innerHTML
//         let newLikes = spanLike + 1
//         like.lastElementChild.innerHTML = newLikes
//     })
    
    
    
//     // let spanLike = e.target.lastElementChild.innerText
//     // let newLike = spanLike + 1
    
    
//   }
  
  
// })



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


// fetch('http://localhost:3000/quotes?_embed=likes')
//     .then(response => response.json())
//     .then(arrayOfQuotes => arrayOfQuotes.forEach(quote => {
//       renderQuote(quote);
//     })
//   )

//   let quoteList = document.getElementById('quote-list')

//   function renderQuote(quote){
//     let quoteLi = document.createElement('li')
//     quoteLi.className = 'quote-card'

//     let deleteBtn = document.createElement('button')
//     deleteBtn.className = 'btn-danger'
//     deleteBtn.innerText = 'ew no'
//     deleteBtn.addEventListener('click', () => deleteQuote(quote, quoteLi))

//     let likeBtn = document.createElement('button')
//     likeBtn.className = 'btn-success'
//     likeBtn.innerText = 'we stan'
//     likeBtn.innerHTML = `Likes: <span>${quote.likes.length}</span>`
//     likeBtn.addEventListener('click', () => likeQuote(quote, quoteLi))

//     quoteList.append(quoteLi)

//     quoteLi.innerHTML += `<blockquote class=“blockquote”>
//           <p class=“mb-0">${ quote.quote }</p>
//           <footer class=“blockquote-footer”>${ quote.author }</footer>`
//     quoteLi.append(deleteBtn, likeBtn)
//   }

//   let newQuoteForm = document.getElementById('new-quote-form')
//   newQuoteForm.addEventListener('submit', (event) => {
//     event.preventDefault()
//     let author = event.target['author'].value
//     let quote = event.target['new-quote'].value
//     createNewQuote(author, quote)
//   })

//   function createNewQuote(author, quote){
//     fetch('http://localhost:3000/quotes?_embed=likes', {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/json',
//         'accept': 'application/json'
//       },
//       body: JSON.stringify({
//         author: author,
//         quote: quote
//       })
//     })
//     .then(r => r.json())
//     .then(quoteObject => renderQuote(quoteObject))
//   }

//   function deleteQuote(quote, quoteLi){
//     fetch(`http://localhost:3000/quotes/${quote.id}`, {
//       method: 'DELETE',
//       headers: {
//         'content-type': 'application/json',
//         'accept': 'application/json'
//       }
//     })
//     .then(r => r.json())
//     .then(quoteLi.remove())
//   }

//   function likeQuote(quote, quoteLi){
//     let likeArray = quote.likes
//     let likesNum = likeArray.length
//     let likeBtn = quoteLi.querySelector('.btn-success')

//     console.log('likes -> ',likeArray)

//     fetch(`http://localhost:3000/likes/${ quote.id }`, {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/json',
//         'accept': 'application/json'
//       },
//       body: JSON.stringify({
//         quoteId: quote.id
//       })
//     })
//     .then(r => r.json())
//     .then((like) => {
//       likeArray.push(like)
//       likeBtn.innerHTML = `Likes: <span>${ likesNum }</span>`
//     })
//   }


















