import { Helmet } from 'react-helmet';

const Contact = () => (
  <section className="container mx-auto px-4 py-12 w-full max-w-6xl font-sans">
    <Helmet>
      <title>Contact | Smart Tool Box</title>
      <meta name="description" content="Contact Smart Tool Box: Get in touch for feedback, support, or partnership inquiries. We value your input and are here to help!" />
      <meta name="keywords" content="Contact, Smart Tool Box, Feedback, Support, Partnership, Help" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Contact | Smart Tool Box" />
      <meta property="og:description" content="Contact Smart Tool Box: Get in touch for feedback, support, or partnership inquiries. We value your input and are here to help!" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://yourdomain.com/contact" />
      <meta property="og:image" content="https://yourdomain.com/logo512.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Contact | Smart Tool Box" />
      <meta name="twitter:description" content="Contact Smart Tool Box: Get in touch for feedback, support, or partnership inquiries. We value your input and are here to help!" />
      <meta name="twitter:image" content="https://yourdomain.com/logo512.png" />
      <link rel="canonical" href="https://yourdomain.com/contact" />
    </Helmet>
    <div className="bg-gradient-to-br from-teal-50 via-white to-blue-100 rounded-3xl shadow-2xl p-10 border border-teal-200">
      <div className="flex items-center gap-3 mb-6 justify-center">
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-200 text-blue-900 text-3xl shadow-lg">✉️</span>
        <h1 className="text-4xl font-extrabold text-teal-800 drop-shadow tracking-wide">Contact Us</h1>
      </div>
      <p className="mb-6 text-lg text-gray-700 text-center max-w-2xl mx-auto">
        Have feedback, suggestions, or need support? We'd love to hear from you! Fill out the form below or email us directly at <a href="mailto:hello@smarttoolbox.com" className="text-teal-700 underline font-semibold">hello@smarttoolbox.com</a>.
      </p>
      <form className="max-w-xl mx-auto grid gap-6 bg-white rounded-2xl shadow p-8 border border-blue-100">
        <div>
          <label className="block font-semibold text-teal-700 mb-1">Your Name</label>
          <input type="text" className="border-2 border-teal-200 rounded px-4 py-2 w-full text-lg focus:ring-2 focus:ring-teal-400" placeholder="Enter your name" required />
        </div>
        <div>
          <label className="block font-semibold text-teal-700 mb-1">Your Email</label>
          <input type="email" className="border-2 border-teal-200 rounded px-4 py-2 w-full text-lg focus:ring-2 focus:ring-teal-400" placeholder="Enter your email" required />
        </div>
        <div>
          <label className="block font-semibold text-teal-700 mb-1">Message</label>
          <textarea className="border-2 border-teal-200 rounded px-4 py-2 w-full min-h-[100px] text-lg focus:ring-2 focus:ring-teal-400" placeholder="Type your message..." required />
        </div>
        <button type="submit" className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-6 py-3 rounded-lg font-bold shadow hover:scale-105 transition">Send Message</button>
      </form>
      <div className="text-center mt-8 text-gray-500 text-sm">
        We respect your privacy. Your information will never be shared.
      </div>
    </div>
  </section>
);

export default Contact;
