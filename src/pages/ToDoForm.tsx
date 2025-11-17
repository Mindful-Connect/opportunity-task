export default function ToDoForm() {
  return (
    <>
      <h1>Form</h1>

      <ul>
        <li>All inputs are required</li>
        <li>Title: maximum 100 characters</li>
        <li>Description: maximum 500 characters</li>
        <li>Amount: maximum value: 10M</li>
        <li>Optional: show error message for invalid data</li>
      </ul>

      <hr />
    </>
  )
}
