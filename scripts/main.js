const form = document.querySelector('form');
const button = form.querySelector('button')
const handleSubmit = async (event) => {
  button.disabled = true
  button.classList.add('loading')
  event.preventDefault()
  const formData = new FormData(form);
  let formDataObject = Object.fromEntries(formData.entries());
  let formDataJsonString = JSON.stringify(formDataObject);
  const response = await fetch('/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: formDataJsonString
  })
  const resJson = await response.json()
  setTimeout(()=>{
    button.classList.remove('loading')
		button.innerText = 'Enviado'
	}, 1500)
  console.log(resJson)
}

form.addEventListener('submit', handleSubmit)
