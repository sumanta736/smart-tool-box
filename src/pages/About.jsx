import { Helmet } from 'react-helmet';

const About = () => (
  <section className="container mx-auto px-4 py-10 max-w-2xl">
    <Helmet>
      <title>About | Smart Tool Box</title>
      <meta name="description" content="About Smart Tool Box: Free online calculators and utilities for finance and tech." />
    </Helmet>
    <h1 className="text-3xl font-bold mb-4">About Smart Tool Box</h1>
    <p className="mb-4 text-gray-700">Smart Tool Box is a collection of free, privacy-friendly online tools for finance and technology. Our mission is to make everyday calculations and utilities accessible to everyone, without ads or signups.</p>
    <ul className="list-disc pl-6 text-gray-600">
      <li>Finance calculators: EMI, SIP, FD, Tax, and more</li>
      <li>Tech utilities: PDF, image, QR, JSON, and more</li>
      <li>Fast, mobile-friendly, and secure</li>
    </ul>
  </section>
);

export default About;
