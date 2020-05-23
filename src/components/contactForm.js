import React, { useState } from "react"
import { Form, Button, TextArea, Message } from "semantic-ui-react"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactForm = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
    isError: false,
    isSuccess: false,
  })

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setState({ isLoading: true, isSuccess: false })
    const form = e.target
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": form.getAttribute("name"),
          ...state,
        }),
      })
      setState({
        name: "",
        email: "",
        message: "",
        isSuccess: true,
        isError: false,
        isLoading: false,
      })
    } catch (e) {
      setState({ isError: true, isLoading: false })
      console.log(e)
    }
  }

  return (
    <Form
      name="Contact Us"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      success={state.isSuccess}
      error={state.isError}
      loading={state.isLoading}
    >
      <Message
        success
        header="Thank you"
        content="Your message has been sent."
      />
      <Message
        error
        header="An Error Occurred"
        content="There was a problem sending your message. Please try again later."
      />
      <input type="hidden" name="form-name" value="Contact Us" />
      <p hidden>
        <label htmlFor="bot-fieldInput">
          Don’t fill this out:{" "}
          <input id="bot-fieldInput" name="bot-field" onChange={handleChange} />
        </label>
      </p>
      <Form.Field required>
        <label htmlFor="nameInput">Name</label>
        <input
          id="nameInput"
          name="name"
          value={state.name}
          placeholder="Name"
          onChange={handleChange}
          required
        />
      </Form.Field>
      <Form.Field required>
        <label htmlFor="emailInput">Email</label>
        <input
          id="emailInput"
          name="email"
          value={state.email}
          placeholder="Email"
          onChange={handleChange}
          required
        />
      </Form.Field>
      <Form.Field required>
        <label htmlFor="messageInput">Message</label>
        <TextArea
          id="messageInput"
          name="message"
          value={state.message}
          placeholder="Message"
          onChange={handleChange}
          required
        />
      </Form.Field>
      <Button type="submit" primary>
        Send
      </Button>
    </Form>
  )
}

export default ContactForm
