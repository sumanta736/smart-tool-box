import { Helmet } from 'react-helmet';

const Contact = () => (
  <section className="container mx-auto px-4 py-10 max-w-xl">
    <Helmet>
      <title>Contact | Smart Tool Box</title>
      <meta name="description" content="Contact Smart Tool Box for feedback or support." />
    </Helmet>
    <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
    <form className="bg-white rounded shadow p-6 flex flex-col gap-4" action="mailto:your@email.com" method="POST" encType="text/plain">
      <label className="font-semibold">Name
        <input type="text" name="name" className="mt-1 border rounded px-3 py-2 w-full" required />
      </label>
      <label className="font-semibold">Email
        <input type="email" name="email" className="mt-1 border rounded px-3 py-2 w-full" required />
      </label>
      <label className="font-semibold">Message
        <textarea name="message" className="mt-1 border rounded px-3 py-2 w-full" rows="4" required></textarea>
      </label>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send</button>
    </form>
  </section>
);

export default Contact;
