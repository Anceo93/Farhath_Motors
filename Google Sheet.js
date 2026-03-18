const scriptURL = 'https://script.google.com/macros/library/d/1vNR62mLFUovC1lJfhwDQZdUh7rKiIS_HFokxhiV58H4Gx4yVwGo1uO_d/1'

const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => {
    msg.innerHTML = "Thank you for your message!"
    setTimeout(function(){
      msg.innerHTML = ""
    }, 5000)
    form.reset()
  })
  .catch(error => console.error('Error!', error.message))
})