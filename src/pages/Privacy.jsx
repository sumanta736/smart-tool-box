import { Helmet } from 'react-helmet';

const Privacy = () => (
  <section className="container mx-auto px-4 py-10 max-w-2xl">
    <Helmet>
      <title>Privacy Policy | Smart Tool Box</title>
      <meta name="description" content="Privacy Policy for Smart Tool Box. We respect your privacy and do not store personal data." />
    </Helmet>
    <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
    <p className="mb-4 text-gray-700">We respect your privacy. Smart Tool Box does not collect or store any personal information. All calculations and utilities run in your browser. No data is sent to our servers.</p>
    <ul className="list-disc pl-6 text-gray-600">
      <li>No cookies or tracking</li>
      <li>No ads or analytics</li>
      <li>All tools are free to use</li>
    </ul>
  </section>
);

export default Privacy;
