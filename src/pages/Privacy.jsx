import { Helmet } from 'react-helmet';
import { FaUserShield } from 'react-icons/fa';

const Privacy = () => (
  <section className="container mx-auto px-4 py-12 w-full max-w-3xl font-sans">
    <Helmet>
      <title>Privacy Policy | Smart Tool Box</title>
      <meta name="description" content="Privacy Policy for Smart Tool Box. We respect your privacy and do not store personal data." />
    </Helmet>
    <div className="bg-gradient-to-br from-pink-50 via-white to-orange-100 rounded-3xl shadow-2xl p-8 border border-pink-200">
      <div className="flex items-center gap-3 mb-4">
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-pink-100 text-pink-500 text-3xl shadow"><FaUserShield /></span>
        <h1 className="text-3xl font-extrabold text-pink-700 tracking-wide">Privacy Policy</h1>
      </div>
      <p className="mb-6 text-gray-700 text-lg">We respect your privacy. <span className="font-semibold text-pink-600">Smart Tool Box</span> does not collect or store any personal information. All calculations and utilities run in your browser. No data is sent to our servers.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
          <span className="text-2xl text-pink-400 mb-2">🚫</span>
          <div className="font-bold text-pink-700 mb-1">No Cookies</div>
          <div className="text-gray-600 text-sm text-center">We do not use cookies or tracking technologies.</div>
        </div>
        <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
          <span className="text-2xl text-orange-400 mb-2">🔒</span>
          <div className="font-bold text-orange-700 mb-1">No Analytics</div>
          <div className="text-gray-600 text-sm text-center">No ads, analytics, or third-party scripts.</div>
        </div>
        <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
          <span className="text-2xl text-pink-400 mb-2">💡</span>
          <div className="font-bold text-pink-700 mb-1">Free & Private</div>
          <div className="text-gray-600 text-sm text-center">All tools are free and private to use.</div>
        </div>
      </div>
      {/* More detailed privacy content */}
      <div className="mt-8 space-y-6">
        <div>
          <h2 className="text-xl font-bold text-pink-700 mb-2">1. Data Handling</h2>
          <p className="text-gray-700">We do not collect, store, or share any personal or usage data. All calculations and file processing are performed locally in your browser. We do not require you to create an account or provide any personal information to use our tools.</p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-pink-700 mb-2">2. Third-Party Links</h2>
          <p className="text-gray-700">Our website may contain links to third-party sites for your convenience. We are not responsible for the privacy practices or content of those sites. Please review their privacy policies before providing any information.</p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-pink-700 mb-2">3. Children’s Privacy</h2>
          <p className="text-gray-700">Smart Tool Box is designed for general audiences and does not knowingly collect information from children under 13. If you believe a child has provided us with personal data, please contact us and we will promptly delete it.</p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-pink-700 mb-2">4. User Rights</h2>
          <p className="text-gray-700">You have the right to use our tools anonymously and without tracking. If you have any privacy concerns, please contact us at <a href="/contact" className="text-pink-600 underline">our contact page</a>.</p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-pink-700 mb-2">5. Changes to This Policy</h2>
          <p className="text-gray-700">We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date below.</p>
        </div>
      </div>
      <div className="text-xs text-gray-500 text-center mt-8">Last updated: September 5, 2025</div>
    </div>
  </section>
);

export default Privacy;
