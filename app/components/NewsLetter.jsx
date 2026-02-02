import React from 'react'
import Title from './Title'

const NewsLetter = () => {
  return (
    <section className="flex flex-col items-center px-4 py-25">
      {/* Title */}
      <div className="max-w-2xl text-center">
        <Title
          align="center"
          font="Outfit"
          title="Subscribe to our newsletter"
          subTitle="A visual collection of our most recent works — each piece crafted with intention, emotion, and style."
        />
      </div>

      {/* Form */}
      <form
        className="mt-10 flex items-center w-full max-w-xl rounded-full border border-slate-700 
                   focus-within:border-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600/30 
                   transition"
      >
        <input
          type="email"
          required
          placeholder="Enter your email address"
          className="flex-1 h-14 bg-transparent px-5 text-sm outline-none 
                     placeholder:text-slate-400 rounded-full"
        />

        <button
          type="submit"
          className="mr-1 h-11 px-5 md:px-8 rounded-full bg-indigo-600 text-white text-sm font-medium
                     flex items-center justify-center hover:bg-indigo-700 
                     active:scale-95 transition"
        >
          Subscribe
        </button>
      </form>
    </section>
  )
}

export default NewsLetter
