export default function ToDoList() {
  return (
    <div className='page'>
      <p>
        <a href='/'>{'<'} Task</a>
      </p>

      <p>
        <a href='/form'>Form</a>
      </p>

      <h1>List</h1>

      <p>
        This page is for listing "programs". You can find the assets for it in
        the <span className='code'>/public</span> directory of this project.
      </p>

      <ul>
        <li>
          The page should show the mobile or desktop version of the layout
          depending on screen size
        </li>
        <li>
          The Title box should truncate text and show ellipsis for strings that
          are too long to fit
        </li>
        <li>
          The Description box should truncate text to a maximum of two lines and
          show ellipsis for strings that are too long to fit
        </li>
      </ul>

      <hr />

      {/* You can use this space to implement the list */}
    </div>
  )
}
