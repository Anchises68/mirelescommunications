import React from 'react'
import { navigate } from "gatsby-link";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render () {
    return (
      <form
        name="contact"
        method="POST"
        action="/success/"
        data-netfliy="true"
        data-netfliy-honeypot="bot-field"
        onSubmit={this.handleSubmit}
        >
        <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input onChange={this.handleChange} className="input" type="text" name="name" placeholder="Your name..."/>
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input onChange={this.handleChange} className="input" type="email" name="email" placeholder="E-mail"/>
          </div>
        </div>
        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea onChange={this.handleChange} className="textarea" type="text" name="message" placeholder="Your message here..."></textarea>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input id="form_botcheck" name="form_botcheck" className="form-control" type="hidden" value=""/>
            <button className="button is-dark" type="submit" data-loading-text="Please wait...">Submit</button>
          </div>
        </div>
      </form>
    )
  }
}

export default Contact
