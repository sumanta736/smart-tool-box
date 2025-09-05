import { Helmet } from 'react-helmet';

const Terms = () => (
  <section className="container mx-auto px-4 py-10 max-w-2xl">
    <Helmet>
      <title>Terms & Conditions | Smart Tool Box</title>
      <meta name="description" content="Terms & Conditions for using Smart Tool Box online tools." />
    </Helmet>
    <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>
    <p className="mb-4 text-gray-700">By using Smart Tool Box, you agree to use the tools for personal and non-commercial purposes only. We do not guarantee the accuracy of results. Use at your own risk.</p>
    <ul className="list-disc pl-6 text-gray-600">
      <li>Free for personal use</li>
      <li>No warranties or guarantees</li>
      <li>Subject to change without notice</li>
    </ul>
  </section>
);

export default Terms;
