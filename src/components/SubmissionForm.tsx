import React, { useState } from 'react'
import { useSession } from '../context/SessionContext'

const SubmissionForm = () => {
  const [url, setUrl] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { submit } = useSession()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!url || !url.startsWith('https://github.com')) {
      alert('Please enter a valid GitHub repository URL.')
      return
    }
    if (isSubmitting) return

    setIsSubmitting(true)
    try {
      await submit(url)
    } catch (error) {
      alert(
        `Submission failed: ${
          error instanceof Error ? error.message : String(error)
        }`
      )
      setIsSubmitting(false)
    }
  }

  return (
    <div
      style={{
        marginTop: '20px',
        marginBottom: '80px',
        padding: '20px',
        border: '1px solid #ccc',
      }}
    >
      <h2>Final Submission</h2>

      <p>
        When you have completed the challenge and pushed your code to a private
        GitHub repository, please paste the URL below to submit your work.
      </p>

      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <input
          type='url'
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder='https://github.com/your-username/your-repo-name'
          required
          style={{ width: '300px', marginRight: '10px' }}
        />
        <button type='submit' disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit Final Work'}
        </button>
      </form>
    </div>
  )
}

export default SubmissionForm
