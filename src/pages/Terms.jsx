import { Helmet } from 'react-helmet';
import { FaGavel } from 'react-icons/fa';

const Terms = () => (
  <section className="container mx-auto px-4 py-12 w-full max-w-3xl font-sans">
    <Helmet>
      <title>Terms & Conditions | Smart Tool Box</title>
      <meta name="description" content="Terms & Conditions for using Smart Tool Box online tools." />
    </Helmet>
    <div className="bg-gradient-to-br from-orange-50 via-white to-pink-100 rounded-3xl shadow-2xl p-8 border border-orange-200">
      <div className="flex items-center gap-3 mb-4">
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-orange-500 text-3xl shadow"><FaGavel /></span>
        <h1 className="text-3xl font-extrabold text-orange-700 tracking-wide">Terms & Conditions</h1>
      </div>
      <p className="mb-6 text-gray-700 text-lg">By using <span className="font-semibold text-orange-600">Smart Tool Box</span>, you agree to use the tools for personal and non-commercial purposes only. We do not guarantee the accuracy of results. Use at your own risk.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
          <span className="text-2xl text-orange-400 mb-2">🙋‍♂️</span>
          <div className="font-bold text-orange-700 mb-1">Personal Use</div>
          <div className="text-gray-600 text-sm text-center">Free for personal, non-commercial use only.</div>
        </div>
        <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
          <span className="text-2xl text-pink-400 mb-2">⚠️</span>
          <div className="font-bold text-pink-700 mb-1">No Guarantees</div>
          <div className="text-gray-600 text-sm text-center">No warranties or guarantees on results.</div>
        </div>
        <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
          <span className="text-2xl text-orange-400 mb-2">🔄</span>
          <div className="font-bold text-orange-700 mb-1">Subject to Change</div>
          <div className="text-gray-600 text-sm text-center">Terms may change without notice.</div>
        </div>
      </div>
      <div className="mt-8 space-y-6">
        <div>
          <h2 className="text-xl font-bold text-orange-700 mb-2">1. Acceptable Use</h2>
          <p className="text-gray-700">You agree to use Smart Tool Box only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the site. Automated scraping, commercial use, or misuse of the tools is strictly prohibited.</p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-orange-700 mb-2">2. Intellectual Property</h2>
          <p className="text-gray-700">All content, branding, and code on Smart Tool Box are the intellectual property of the site owners. You may not copy, reproduce, or redistribute any part of the site without permission.</p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-orange-700 mb-2">3. Disclaimers</h2>
          <p className="text-gray-700">All tools and results are provided "as is" without warranty of any kind. We do not guarantee the accuracy, completeness, or suitability of any results for your specific needs.</p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-orange-700 mb-2">4. Limitation of Liability</h2>
          <p className="text-gray-700">In no event shall Smart Tool Box or its owners be liable for any damages arising from the use or inability to use the site or its tools, even if advised of the possibility of such damages.</p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-orange-700 mb-2">5. Contact</h2>
          <p className="text-gray-700">For questions about these terms, please contact us via the <a href="/contact" className="text-orange-600 underline">contact page</a>.</p>
        </div>
      </div>
      <div className="text-xs text-gray-500 text-center mt-8">Last updated: September 5, 2025</div>
    </div>
  </section>
);

export default Terms;
