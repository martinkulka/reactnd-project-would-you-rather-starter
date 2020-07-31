import React from "react"
import Question from "./Question"

const QuestionsList = ({ list }) => {
  return (
    <ul>
      {list.map((id) => (
        <li key={id}>
          <Question id={id} />
        </li>
      ))}
    </ul>
  )
}

export default QuestionsList