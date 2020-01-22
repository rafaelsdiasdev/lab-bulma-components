import React from 'react'

const container = (props) => {
    return (
<article className="message is-info width">
  <div className="message-header">
<p>{props.title}</p>
    <button className="delete" aria-label="delete" />
  </div>
  <div className="message-body">
    {props.value}. <strong>{props.strong}</strong>
  </div>
</article>


    )
}

export default container