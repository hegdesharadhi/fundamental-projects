import React from 'react'
import SingleQuestions from './SingleQuestions'

const Questions = ({ questions, activeId, toggleQuestion }) => {
  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((question) => {
        return (
          <SingleQuestions
            {...question}
            key={question.id}
            activeId={activeId}
            toggleQuestion={toggleQuestion}
          />
        )
      })}
    </section>
  )
}

export default Questions
