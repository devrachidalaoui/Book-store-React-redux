export default function clearInputs() {
  document.querySelectorAll('.form-field').forEach(field => {
    field.value = ''
  })
}
