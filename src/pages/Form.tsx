export default function ToDoForm() {
  return (
    <div className='page'>
      <p>
        <a href='/'>{'<'} Task</a>
      </p>

      <p>
        <a href='/list'>List</a>
      </p>

      <h1>Form</h1>

      <p>This page is for adding "programs". </p>

      <ul>
        <li>
          The page should show the mobile or desktop version of the layout
          depending on screen size
        </li>
        <li>All inputs are required</li>
        <li>Title: maximum 100 characters</li>
        <li>Description: maximum 500 characters</li>
        <li>Amount: maximum value: 10M</li>
        <li>Optional: show error message for invalid data</li>
      </ul>

      <hr />

      {/* You can use this space to implement the form */}
    </div>
  )
}
