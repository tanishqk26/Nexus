import React, { useState } from 'react'
import Title from './Title'
import assets from '../assets/assets'
import { toast } from 'react-hot-toast'

const ContactUs = () => {
  const [result, setResult] = useState("")

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult("Sending...")

    const formData = new FormData(event.target)
    formData.append("access_key", "6e09703e-fc72-4ec3-a545-8cc4e6ce1724")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })

      const data = await response.json()

      if (data.success) {
        toast.success("Message sent successfully ✅")
        event.target.reset()
        setResult("")
      } else {
        toast.error(data.message || "Something went wrong ❌")
      }
    } catch (error) {
      toast.error(data.message || "Something went wrong ❌")
    }
  }

  return (
    <div
      id="contact-us"
      className="flex flex-col items-center gap-7 
                 px-4 sm:px-12 lg:px-24 xl:px-40 
                 pt-32 text-gray-700 dark:text-white"
    >
      <Title
        title="Reach out to Us"
        description="We would love to hear from you!"
      />

      <form
        onSubmit={onSubmit}
        className="grid sm:grid-cols-2 gap-4 
                   max-w-2xl w-full"
      >
        {/* NAME */}
        <div>
          <p className="mb-2 text-sm font-medium">Your name</p>
          <div className="flex items-center pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.person_icon} alt="" className="w-4" />
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 text-sm outline-none bg-transparent"
              required
            />
          </div>
        </div>

        {/* EMAIL */}
        <div>
          <p className="mb-2 text-sm font-medium">Email Id</p>
          <div className="flex items-center pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.email_icon} alt="" className="w-4" />
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 text-sm outline-none bg-transparent"
              required
            />
          </div>
        </div>

        {/* MESSAGE */}
        <div className="sm:col-span-2">
          <p className="mb-2 text-sm font-medium">Message</p>
          <textarea
            name="message"
            rows={6}
            placeholder="Enter your message"
            className="w-full p-3 text-sm outline-none rounded-lg 
                       border border-gray-300 dark:border-gray-600 
                       dark:bg-gray-800"
            required
          />
        </div>

        {/* BUTTON */}
        <div className="sm:col-span-2 flex flex-col items-start gap-3">
          <button
            type="submit"
            className="flex items-center gap-2 
                       bg-primary text-white text-sm 
                       px-6 py-3 rounded-full 
                       hover:scale-105 transition-all"
          >
            Submit
            <img src={assets.arrow_icon} alt="" className="w-4" />
          </button>

          {/* RESULT MESSAGE */}
          {result && (
            <p className="text-sm text-center">{result}</p>
          )}
        </div>
      </form>
    </div>
  )
}

export default ContactUs