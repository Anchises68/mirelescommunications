import React from 'react'

class Contact extends React.Component {
  render () {
    return (
      <form>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="Your name..."/>
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input className="input" type="email" placeholder="E-mail"/>
          </div>
        </div>
        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea class="textarea" placeholder="Your message here..."></textarea>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button className="button is-dark">Submit</button>
          </div>
        </div>

      </form>
    )
  }
}

export default Contact
