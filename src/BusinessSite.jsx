import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";

// NOTE: This is a single-file polished React + Tailwind starter app.
// It includes placeholders and integration points for:
// - Deployment (Vercel/Netlify) notes
// - Payment (Stripe + Razorpay) integration placeholders
// - Blog (markdown-based placeholder)
// - Animations (Framer Motion used)
// - Backend hooks (Supabase / Firebase placeholders)
// - Auth (Firebase / Supabase skeleton)
// - Subscription management (Stripe Billing + webhooks placeholders)
// - Customer Dashboard (subscriptions, invoices, requests)
// - WhatsApp support widget
// - CMS / Blog admin placeholder

export default function BusinessSite() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/auth" element={<AuthPlaceholder />} />
            <Route path="/deploy" element={<DeployNotes />} />
            <Route path="/integrations" element={<Integrations />} />
          </Routes>
        </main>
        <WhatsAppWidget />
        <Footer />
      </div>
    </Router>
  );
}

function Header() {
  return (
    <header className="px-8 py-6 bg-white shadow flex justify-between items-center sticky top-0 z-40">
      <h1 className="text-2xl font-bold">AI Automation Labs</h1>
      <nav className="space-x-4 text-lg">
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/pricing">Pricing</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}
function NavLink({ to, children }) {
  return (
    <Link className="hover:text-blue-600" to={to}>
      {children}
    </Link>
  );
}

function Home() {
  return (
    <section className="px-8 py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
      <motion.h2 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-5xl font-bold mb-4">
        AI & Automation Services for Modern Businesses
      </motion.h2>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl max-w-3xl mx-auto">
        Automate workflows, generate AI-driven test suites, build custom AI tools, and scale your business with intelligent automation. Start with a free audit.
      </motion.p>
      <div className="mt-8 flex justify-center gap-4">
        <Link to="/contact" className="px-6 py-3 bg-black/40 hover:bg-black/60 rounded-xl text-xl backdrop-blur">Get Started</Link>
        <Link to="/deploy" className="px-6 py-3 bg-white/20 hover:bg-white/30 rounded-xl text-xl">Deployment & Docs</Link>
      </div>
      <section className="mt-16 max-w-5xl mx-auto text-left text-gray-700 bg-white/10 p-6 rounded-2xl">
        <h3 className="text-2xl font-semibold text-white mb-4">Quick features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Feature title="Fast Automation" desc="Reusable templates, Playwright/Cypress, CI/CD integration." />
          <Feature title="AI Products" desc="Test-case generator, QA Copilot, Bug reproduction assistant." />
          <Feature title="SaaS Billing" desc="Stripe / Razorpay billing + subscription management." />
        </div>
      </section>
    </section>
  );
}

function Feature({ title, desc }) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} className="p-4 bg-white rounded-xl shadow">
      <h4 className="font-bold">{title}</h4>
      <p className="text-sm mt-2">{desc}</p>
    </motion.div>
  );
}

function Services() {
  return (
    <section id="services" className="px-8 py-24">
      <h3 className="text-4xl font-bold text-center mb-12">Automation Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <ServiceCard title="Test Automation" description="Selenium, Playwright, Cypress frameworks with AI-driven generation and reporting." />
        <ServiceCard title="Workflow Automation" description="Automate business operations using API integrations, RPA, Make, and custom scripts." />
        <ServiceCard title="Bug Reproduction AI" description="Smart assistant that reproduces bugs automatically and generates detailed reports and Jira tickets." />
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="px-8 py-24 bg-gray-100">
      <h3 className="text-4xl font-bold text-center mb-12">AI Products</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <ServiceCard title="AI Test Case Generator" description="Upload requirements → get test cases, negative scenarios, regression suites instantly." />
        <ServiceCard title="QA Copilot" description="Slack/Teams AI bot for triaging failures, coverage insights, and flaky test detection." />
        <ServiceCard title="AI Code Reviewer" description="Analyze PRs, generate test cases, detect bugs, suggest fixes, reduce QA cycles." />
      </div>
    </section>
  );
}

function ServiceCard({ title, description }) {
  return (
    <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
      <h4 className="text-2xl font-bold mb-3">{title}</h4>
      <p>{description}</p>
    </div>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="px-8 py-24 text-center">
      <h3 className="text-4xl font-bold mb-12">Subscription Plans</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        <PriceCard tier="Starter" price="₹999/mo" features={["AI test case generator", "100 test cases/month", "Email support"]} />
        <PriceCard tier="Pro" price="₹3,999/mo" features={["Everything in Starter", "AI bug reproduction tool", "Unlimited test generation", "Priority support"]} />
        <PriceCard tier="Enterprise" price="₹12,000/mo" features={["Custom automation", "CI/CD integrations", "Security testing", "On-call engineer"]} />
      </div>

      <div className="mt-12 max-w-3xl mx-auto text-left">
        <h4 className="text-2xl font-semibold mb-3">Payment & Subscription (Integration)</h4>
        <p className="mb-3">This starter app includes placeholders for the two most common billing flows:</p>
        <ul className="list-disc pl-6">
          <li><strong>Stripe (Global):</strong> Hosted checkout, Billing Subscriptions, webhooks for webhook-based subscription lifecycle events.</li>
          <li><strong>Razorpay (India):</strong> Orders + Subscriptions API for recurring billing in India.</li>
        </ul>
        <p className="mt-4 text-sm text-gray-600">Implementation files: <code>./src/integrations/stripe.js</code> and <code>./src/integrations/razorpay.js</code> (placeholders in repo)</p>
      </div>
    </section>
  );
}

function PriceCard({ tier, price, features }) {
  return (
    <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition">
      <h4 className="text-3xl font-bold mb-3">{tier}</h4>
      <p className="text-4xl font-bold mb-6">{price}</p>
      <ul className="space-y-2 text-lg">
        {features.map((f, i) => (
          <li key={i}>• {f}</li>
        ))}
      </ul>
      <button className="mt-6 w-full p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-lg">Choose Plan</button>
    </div>
  );
}

function Contact() {
  // This form should POST to your backend (Supabase / Firebase / Node) which will create a lead and optionally create a Checkout session
  return (
    <section id="contact" className="px-8 py-24 bg-gray-900 text-white text-center">
      <h3 className="text-4xl font-bold mb-8">Submit Your Requirements</h3>
      <form className="max-w-3xl mx-auto space-y-6 text-gray-900 bg-white rounded-2xl p-6" onSubmit={(e)=>{e.preventDefault(); alert('This will call the backend API to create a lead & optionally create a checkout session.')}}>
        <input type="text" placeholder="Your Name" className="w-full p-4 rounded-xl" required />
        <input type="email" placeholder="Email" className="w-full p-4 rounded-xl" required />
        <textarea placeholder="Describe your project requirements..." className="w-full p-4 rounded-xl h-40" required />
        <div className="flex gap-4">
          <button type="submit" className="flex-1 p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-lg">Submit Requirement</button>
          <button type="button" className="flex-1 p-4 bg-gray-200 hover:bg-gray-300 text-gray-900 rounded-xl text-lg" onClick={()=>alert('Demo purchase flow: create checkout session and redirect to Stripe/Razorpay hosted page')}>Buy Demo</button>
        </div>
      </form>

      <div className="mt-8 text-left max-w-3xl mx-auto text-gray-300">
        <h4 className="text-xl font-semibold mb-2">What happens after submit?</h4>
        <ol className="list-decimal pl-6">
          <li>Create lead in DB (Supabase / Firebase / Postgres)</li>
          <li>Send email to your sales inbox + user confirmation</li>
          <li>Optionally create a hosted Checkout session for immediate payment</li>
          <li>Auto-schedule a discovery call (Calendly / Google Calendar link)</li>
        </ol>
      </div>
    </section>
  );
}

function Blog() {
  // Placeholder blog - integrate with a headless CMS (Sanity / Contentful / Supabase) or markdown files
  const posts = [
    { id: 1, title: 'How AI speeds up test automation', excerpt: 'Short excerpt...' },
    { id: 2, title: 'Reducing flaky tests with ML', excerpt: 'Short excerpt...' },
  ];
  return (
    <section className="px-8 py-24">
      <h3 className="text-4xl font-bold text-center mb-12">Blog</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {posts.map((p) => (
          <article key={p.id} className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-2xl font-semibold">{p.title}</h4>
            <p className="mt-2 text-gray-700">{p.excerpt}</p>
            <div className="mt-4">
              <Link to="#" className="text-blue-600">Read more →</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Dashboard() {
  // Dashboard skeleton - protect with real auth in production
  return (
    <section className="px-8 py-24 bg-gray-50">
      <h3 className="text-4xl font-bold text-center mb-12">Customer Dashboard</h3>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-xl shadow">
          <h4 className="font-bold mb-2">Subscription</h4>
          <p className="text-sm text-gray-600">Plan: Pro</p>
          <p className="text-sm text-gray-600">Next billing: 2025-12-01</p>
          <button className="mt-4 p-2 bg-blue-600 text-white rounded">Manage Subscription</button>
        </div>
        <div className="p-6 bg-white rounded-xl shadow">
          <h4 className="font-bold mb-2">Invoices</h4>
          <ul className="text-sm text-gray-700">
            <li>Invoice #103 - ₹3,999 - Paid</li>
            <li>Invoice #98 - ₹3,999 - Paid</li>
          </ul>
        </div>
        <div className="p-6 bg-white rounded-xl shadow">
          <h4 className="font-bold mb-2">Requests</h4>
          <p className="text-sm text-gray-700">Open tickets: 2</p>
          <Link to="/contact" className="mt-3 inline-block text-blue-600">Create Request</Link>
        </div>
      </div>
      <div className="mt-10 max-w-4xl mx-auto p-6 bg-white rounded-xl shadow">
        <h4 className="font-bold mb-4">Quick actions</h4>
        <div className="flex gap-4">
          <button className="p-3 bg-green-600 text-white rounded">Run On-demand Test</button>
          <button className="p-3 bg-indigo-600 text-white rounded">Generate Test Cases</button>
          <button className="p-3 bg-gray-200 rounded">Download Report</button>
        </div>
      </div>
    </section>
  );
}

function AuthPlaceholder() {
  return (
    <section className="px-8 py-24 text-center">
      <h3 className="text-3xl font-bold mb-4">Auth & Subscription (Placeholder)</h3>
      <p className="mb-4">In production integrate with a backend auth provider:</p>
      <ul className="list-disc max-w-2xl mx-auto text-left pl-6">
        <li>Firebase Auth (email/password, Google, SSO)</li>
        <li>Supabase Auth (Postgres + Auth + Row Level Security)</li>
        <li>Auth0 (enterprise SSO)</li>
      </ul>
      <p className="mt-6">Also implement secure server endpoints for creating Stripe Checkout / Razorpay Orders and webhooks to handle subscription events.</p>
    </section>
  );
}

function DeployNotes() {
  return (
    <section className="px-8 py-24 bg-white">
      <h3 className="text-3xl font-bold mb-4">Deployment & Next Steps</h3>
      <ol className="list-decimal pl-6">
        <li>Choose hosting: Vercel or Netlify (both support Next.js or create-react-app). Use Vercel for zero-config deployments.</li>
        <li>Set environment variables securely (STRIPE_SECRET, RAZORPAY_KEY, SUPABASE_URL, SUPABASE_KEY, FIREBASE_*)</li>
        <li>Implement serverless functions for payment webhooks (Vercel Serverless functions, Netlify functions, or Node backend).</li>
        <li>Connect domain & enable TLS (Let’s Encrypt via provider).</li>
        <li>Set up CI: GitHub Actions to run tests and deploy on push to main.</li>
      </ol>
      <p className="mt-4 text-sm text-gray-600">I can deploy this repo to your Vercel/Netlify account and configure envs if you share access or invite an account.</p>
    </section>
  );
}

function Integrations() {
  return (
    <section className="px-8 py-24 bg-gray-50">
      <h3 className="text-3xl font-bold mb-4">Integrations</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div className="p-4 bg-white rounded-xl shadow">
          <h4 className="font-bold mb-2">Payments</h4>
          <p className="text-sm mb-2">Stripe (recommended for global) and Razorpay (recommended for India) integration skeletons are included as placeholders. You will need to:</p>
          <ul className="list-disc pl-6 text-sm">
            <li>Implement server endpoint to create Checkout Session (Stripe)</li>
            <li>Implement webhooks for invoice.paid, customer.subscription.deleted</li>
            <li>Razorpay: create Order and Subscription APIs and handle verification</li>
          </ul>
        </div>
        <div className="p-4 bg-white rounded-xl shadow">
          <h4 className="font-bold mb-2">Backend & DB</h4>
          <p className="text-sm">You can use Supabase (Postgres + Auth + Storage) as a fast backend or Firebase for rapid auth + Firestore. For enterprise, self-hosted Postgres + Node is recommended.</p>
        </div>
      </div>
    </section>
  );
}

function WhatsAppWidget(){
  // Minimal floating WhatsApp button - replace phone with your business number in international format
  const phone = '+911234567890';
  const message = encodeURIComponent('Hi, I want to discuss AI automation services');
  return (
    <a href={`https://wa.me/${phone.replace(/[^0-9]/g,'')}?text=${message}`} target="_blank" rel="noreferrer" className="fixed right-6 bottom-6 z-50">
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 shadow-lg text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
      </div>
    </a>
  );
}

function Footer(){
  return (
    <footer className="py-6 bg-black text-center text-white">
      <div className="max-w-3xl mx-auto">
        <p>© 2025 AI Automation Labs — All Rights Reserved.</p>
        <p className="text-sm text-gray-400 mt-2">Built with React, Tailwind, Framer Motion. Integrations: Stripe, Razorpay, Supabase, Firebase.</p>
      </div>
    </footer>
  );
}

/*
  NEXT STEPS (I already added placeholders & skeletons into this React app):
  1) I can generate a full GitHub repo with:
     - /src/integrations/stripe.js (server and client examples)
     - /src/integrations/razorpay.js (server and client examples)
     - /functions/webhooks/* (serverless webhook handlers)
     - /docs/deploy.md (Vercel/Netlify + env setup)
     - /docs/README.md with setup commands
  2) Deploy to Vercel/Netlify and configure environment variables.
  3) Wire payments: add Stripe secret key + create product ids, or Razorpay keys.
  4) Connect Supabase or Firebase (I can scaffold SQL / Realtime rules and RLS for prod).
  5) Configure webhooks and subscription lifecycle automation (email invoices, Slack alerts).

  Tell me:
  - Do you prefer Stripe (global) or Razorpay (India) as the initial payment provider? (I included both placeholders.)
  - Do you want me to generate the full GitHub repo + deploy it to Vercel? If yes, share the GitHub repo name and grant (or invite) permissions, or I can provide step-by-step deployment scripts.
*/
