document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector('#create-task-form') 
  const description = document.querySelector('#new-task-description')
  const ul = document.querySelector('#tasks')

  form.addEventListener('submit', (e) => {
      e.preventDefault();
      const task = description.value;
      const li = document.createElement('li');
      li.innerText = task
      //
      const button = document.createElement('button')
      button.innerText = 'x'
      button.addEventListener('click', (e) => li.remove())
      li.append("  ",button)
      ul.append(li)
      e.target.reset()
  })

})