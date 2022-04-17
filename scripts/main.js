const form = document.querySelector('form');
const button = form.querySelector('button')

form.addEventListener('submit', async (event) => {
  button.disabled = true
  button.classList.add('loading')
  event.preventDefault()
  const formData = new FormData(form);
  const response = await fetch('/', {
    method: 'POST',
    body: formData
  })
  const resJson = await response.json()
  setTimeout(()=>{
    button.classList.remove('loading')
		button.innerText = 'Enviado'
	}, 1500)
  console.log(resJson)
})
