import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

export default function BusinessSite() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contact" element={<Contact />} />
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

/* -------------------- HEADER -------------------- */

function Header() {
  return (
    <header className="px-8 py-4 bg-white shadow flex justify-between items-center sticky top-0 z-40">
      <h1 className="text-2xl font-bold">AI Automation Labs</h1>

      <nav className="flex items-center space-x-6 text-lg">
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
    <Link className="hover:text-blue-600 transition" to={to}>
      {children}
    </Link>
  );
}

/* -------------------- HOME -------------------- */

function Home() {
  return (
    <section className="px-8 py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-5xl font-bold mb-4"
      >
        AI & Automation Services for Modern Businesses
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-xl max-w-3xl mx-auto"
      >
        Automate workflows, generate AI-driven test suites, build custom AI
        tools, and scale your business with intelligent automation.
      </motion.p>

      <div className="mt-8 flex justify-center gap-4">
        <Link className="px-6 py-3 bg-black/40 hover:bg-black/60 rounded-xl" to="/contact">
          Get Started
        </Link>
        <Link className="px-6 py-3 bg-white/20 hover:bg-white/30 rounded-xl" to="/deploy">
          Deployment & Docs
        </Link>
      </div>

      <section className="mt-14 max-w-5xl mx-auto bg-white/10 p-6 rounded-2xl backdrop-blur">
        <h3 className="text-2xl font-semibold text-white mb-4 text-left">
          Quick Features
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Feature
            title="Fast Automation"
            desc="Reusable templates, Playwright/Cypress, CI/CD integration."
          />
          <Feature
            title="AI Products"
            desc="Test-case generator, QA Copilot, Bug reproduction assistant."
          />
          <Feature
            title="SaaS Billing"
            desc="Stripe / Razorpay billing + subscription management."
          />
        </div>
      </section>
    </section>
  );
}

function Feature({ title, desc }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="p-5 bg-white rounded-xl shadow"
    >
      <h4 className="font-bold text-lg">{title}</h4>
      <p className="text-sm mt-2 text-gray-700">{desc}</p>
    </motion.div>
  );
}

/* -------------------- SERVICES -------------------- */

function Services() {
  return (
    <section className="px-8 py-20">
      <h3 className="text-4xl font-bold text-center mb-12">Automation Services</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <Card
          title="Test Automation"
          desc="Cypress, Selenium, Playwright frameworks with AI-driven test generation."
        />
        <Card
          title="Workflow Automation"
          desc="Automate operations using API integrations, RPA, Make, Zapier."
        />
        <Card
          title="Bug Reproduction AI"
          desc="AI tool that reproduces bugs automatically and generates reports."
        />
      </div>
    </section>
  );
}

/* -------------------- PRODUCTS -------------------- */

function Products() {
  return (
    <section className="px-8 py-20 bg-gray-100">
      <h3 className="text-4xl font-bold text-center mb-12">AI Products</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <Card
          title="AI Test Case Generator"
          desc="Upload requirements → instantly get full test suites."
        />
        <Card title="QA Copilot" desc="Slack/Teams AI bot to analyze failures." />
        <Card title="AI Code Reviewer" desc="PR analysis, test missing case detection." />
      </div>
    </section>
  );
}

function Card({ title, desc }) {
  return (
    <div className="p-6 bg-white rounded-2xl shadow hover:shadow-xl transition">
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p className="text-gray-700 text-sm">{desc}</p>
      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() => alert("Contact us for demo")}
      >
        Contact
      </button>
    </div>
  );
}

/* -------------------- PRICING -------------------- */

function Pricing() {
  return (
    <section className="px-8 py-20 text-center">
      <h3 className="text-4xl font-bold mb-12">Subscription Plans</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <PriceCard
          tier="Starter"
          price="₹999/mo"
          features={[
            "AI test case generator",
            "100 test cases/month",
            "Email support",
          ]}
        />
        <PriceCard
          tier="Pro"
          price="₹3,999/mo"
          features={[
            "Everything in Starter",
            "AI bug reproduction tool",
            "Unlimited test generation",
            "Priority support",
          ]}
        />
        <PriceCard
          tier="Enterprise"
          price="₹12,000/mo"
          features={[
            "Custom automation",
            "CI/CD integrations",
            "Security testing",
            "Dedicated engineer",
          ]}
        />
      </div>
    </section>
  );
}

function PriceCard({ tier, price, features }) {
  return (
    <div className="p-8 bg-white rounded-2xl shadow">
      <h4 className="text-2xl font-bold mb-2">{tier}</h4>
      <p className="text-4xl font-bold mb-4">{price}</p>

      <ul className="text-left list-disc pl-6 space-y-1 text-gray-700">
        {features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>

      <button
        className="mt-6 w-full p-3 bg-blue-600 text-white rounded"
        onClick={() => alert("Redirect to checkout coming soon")}
      >
        Choose Plan
      </button>
    </div>
  );
}

/* -------------------- BLOG -------------------- */

function Blog() {
  const posts = [
    {
      id: 1,
      title: "How AI speeds up test automation",
      excerpt: "AI can generate tests, analyze failures, and reduce QA cycles.",
    },
    {
      id: 2,
      title: "Reducing flaky tests with machine learning",
      excerpt: "ML models can detect patterns that cause flakiness.",
    },
  ];

  return (
    <section className="px-8 py-20">
      <h3 className="text-4xl font-bold text-center mb-12">Blog</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {posts.map((p) => (
          <article
            key={p.id}
            className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
          >
            <h4 className="text-2xl font-semibold">{p.title}</h4>
            <p className="mt-2 text-gray-700">{p.excerpt}</p>

            <div className="mt-4">
              <Link to="#" className="text-blue-600">
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* -------------------- DASHBOARD -------------------- */

function Dashboard() {
  return (
    <section className="px-8 py-20 bg-gray-50">
      <h3 className="text-4xl font-bold text-center mb-12">
        Customer Dashboard
      </h3>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Subscription */}
        <div className="p-6 bg-white rounded-xl shadow">
          <h4 className="font-bold text-lg mb-2">Subscription</h4>
          <p className="text-sm text-gray-700">Plan: Pro</p>
          <p className="text-sm text-gray-700">Next billing: 2025-12-01</p>
          <button className="mt-4 p-2 bg-blue-600 text-white rounded">
            Manage Subscription
          </button>
        </div>

        {/* Invoices */}
        <div className="p-6 bg-white rounded-xl shadow">
          <h4 className="font-bold text-lg mb-2">Invoices</h4>
          <ul className="text-sm text-gray-700">
            <li>Invoice #103 — ₹3,999 — Paid</li>
            <li>Invoice #98 — ₹3,999 — Paid</li>
          </ul>
        </div>

        {/* Requests */}
        <div className="p-6 bg-white rounded-xl shadow">
          <h4 className="font-bold text-lg mb-2">Requests</h4>
          <p className="text-sm text-gray-700">Open tickets: 2</p>
          <Link className="mt-2 inline-block text-blue-600" to="/contact">
            Create Request
          </Link>
        </div>
      </div>

      {/* Quick actions */}
      <div className="mt-12 max-w-4xl mx-auto p-6 bg-white rounded-xl shadow">
        <h4 className="font-bold text-lg mb-4">Quick Actions</h4>

        <div className="flex gap-4">
          <button className="p-3 bg-green-600 text-white rounded">
            Run Test
          </button>
          <button className="p-3 bg-indigo-600 text-white rounded">
            Generate Test Cases
          </button>
          <button className="p-3 bg-gray-200 rounded">Download Report</button>
        </div>
      </div>
    </section>
  );
}

/* -------------------- CONTACT -------------------- */

function Contact() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg(null);

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const requirements = formData.get("requirements");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, requirements }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setMsg("Your requirements have been submitted successfully!");
      e.target.reset();
    } catch (err) {
      console.error(err);
      setMsg(err.message || "Submission failed");
    }

    setLoading(false);
  };

  return (
    <section className="px-8 py-20 bg-gray-900 text-white">
      <h3 className="text-4xl font-bold text-center mb-12">
        Submit Your Requirements
      </h3>

      <form
        className="max-w-3xl mx-auto space-y-6 bg-white rounded-2xl p-8 text-gray-900"
        onSubmit={onSubmit}
      >
        <input
          name="name"
          required
          placeholder="Your Name"
          className="w-full p-3 rounded border"
        />

        <input
          name="email"
          type="email"
          required
          placeholder="Email"
          className="w-full p-3 rounded border"
        />

        <textarea
          name="requirements"
          required
          placeholder="Describe your project requirements..."
          className="w-full p-3 rounded h-36 border"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full p-3 bg-blue-600 text-white rounded text-lg"
        >
          {loading ? "Submitting..." : "Submit Requirement"}
        </button>

        {msg && (
          <p className="text-center text-lg font-medium text-green-600 mt-3">
            {msg}
          </p>
        )}
      </form>
    </section>
  );
}

/* -------------------- DEPLOY NOTES -------------------- */

function DeployNotes() {
  return (
    <section className="px-8 py-20 bg-white">
      <h3 className="text-3xl font-bold mb-4">Deployment & Next Steps</h3>

      <ol className="list-decimal pl-6 text-gray-700 space-y-2">
        <li>Deploy on Vercel (recommended)</li>
        <li>Create environment variables</li>
        <li>Implement serverless payment webhooks</li>
        <li>Connect domain & enable HTTPS</li>
        <li>Set up CI/CD pipelines</li>
      </ol>
    </section>
  );
}

/* -------------------- INTEGRATIONS -------------------- */

function Integrations() {
  return (
    <section className="px-8 py-20 bg-gray-50">
      <h3 className="text-3xl font-bold mb-12">Integrations</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div className="p-6 bg-white rounded-xl shadow">
          <h4 className="font-bold text-lg mb-2">Payments</h4>
          <p className="text-sm text-gray-700">
            Includes Stripe (global) and Razorpay (India) placeholders.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow">
          <h4 className="font-bold text-lg mb-2">Backend</h4>
          <p className="text-sm text-gray-700">
            Recommended: Supabase or Firebase for auth + DB + storage.
          </p>
        </div>
      </div>
    </section>
  );
}

/* -------------------- WHATSAPP WIDGET -------------------- */

function WhatsAppWidget() {
  const phone = "+911234567890";
  const message = encodeURIComponent("Hi, I want to discuss AI automation services");

  return (
    <a
      href={`https://wa.me/${phone.replace(/[^0-9]/g, "")}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      className="fixed right-6 bottom-6 z-50"
    >
      <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          stroke="white"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </div>
    </a>
  );
}

/* -------------------- FOOTER -------------------- */

function Footer() {
  return (
    <footer className="py-6 bg-black text-center text-white mt-10">
      <p>© 2025 AI Automation Labs — All Rights Reserved.</p>
      <p className="text-sm text-gray-400 mt-2">
        Built with React, Tailwind, Framer Motion.
      </p>
    </footer>
  );
}
