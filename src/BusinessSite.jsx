import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import clsx from 'clsx'

export default function BusinessSite(){
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/pricing" element={<Pricing/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/deploy" element={<DeployNotes/>} />
            <Route path="/integrations" element={<Integrations/>} />
          </Routes>
        </main>
        <WhatsAppWidget />
        <Footer />
      </div>
    </Router>
  )
}

/* Header */
function Header(){
  return (
    <header className="px-8 py-4 bg-white shadow flex justify-between items-center sticky top-0 z-40">
      <h1 className="text-2xl font-bold">AI Automation Labs</h1>
      <nav className="flex items-center space-x-4 text-sm md:space-x-6">
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/pricing">Pricing</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  )
}
function NavLink({to, children}){
  return <Link to={to} className="hover:text-blue-600">{children}</Link>
}

/* Home */
function Home(){
  return (
    <section className="px-8 py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
      <motion.h2 initial={{ y:-20, opacity:0 }} animate={{ y:0, opacity:1 }} className="text-4xl md:text-5xl font-bold mb-4">
        AI & Automation Services for Modern Businesses
      </motion.h2>
      <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.2 }} className="text-lg md:text-xl max-w-3xl mx-auto">
        Automate workflows, generate AI-driven test suites, build custom AI tools, and scale your business with intelligent automation. Start with a free audit.
      </motion.p>
      <div className="mt-8 flex justify-center gap-4">
        <Link to="/contact" className="px-6 py-3 bg-black/30 hover:bg-black/50 rounded-xl text-lg">Get Started</Link>
        <Link to="/deploy" className="px-6 py-3 bg-white/20 hover:bg-white/30 rounded-xl text-lg">Deployment & Docs</Link>
      </div>

      <section className="mt-12 max-w-5xl mx-auto text-left text-gray-700 bg-white/10 p-6 rounded-2xl">
        <h3 className="text-2xl font-semibold text-white mb-4">Quick features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Feature title="Fast Automation" desc="Reusable templates, Playwright/Cypress, CI/CD integration." />
          <Feature title="AI Products" desc="Test-case generator, QA Copilot, Bug reproduction assistant." />
          <Feature title="SaaS Billing" desc="Stripe / Razorpay billing + subscription management." />
        </div>
      </section>
    </section>
  )
}
function Feature({title, desc}){
  return (
    <motion.div whileHover={{ scale: 1.02 }} className="p-4 bg-white rounded-xl shadow">
      <h4 className="font-bold">{title}</h4>
      <p className="text-sm mt-2">{desc}</p>
    </motion.div>
  )
}

/* Services */
function Services(){
  return (
    <section className="px-8 py-20">
      <h3 className="text-3xl font-bold text-center mb-8">Automation Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <Card title="Test Automation" desc="Selenium, Playwright, Cypress frameworks with AI-driven generation and reporting." />
        <Card title="Workflow Automation" desc="Automate business operations using API integrations, RPA, Make, and custom scripts." />
        <Card title="Bug Reproduction AI" desc="Smart assistant that reproduces bugs automatically and generates detailed reports and Jira tickets." />
      </div>
    </section>
  )
}

/* Products */
function Products(){
  return (
    <section className="px-8 py-20 bg-gray-100">
      <h3 className="text-3xl font-bold text-center mb-8">AI Products</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <Card title="AI Test Case Generator" desc="Upload requirements → get test cases, negative scenarios, regression suites instantly." />
        <Card title="QA Copilot" desc="Slack/Teams AI bot for triaging failures, coverage insights, and flaky test detection." />
        <Card title="AI Code Reviewer" desc="Analyze PRs, generate test cases, detect bugs, suggest fixes, reduce QA cycles." />
      </div>
    </section>
  )
}

function Card({title, desc}){
  return (
    <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p className="text-sm">{desc}</p>
      <div className="mt-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={()=>alert('Contact us to get this product')}>Contact</button>
      </div>
    </div>
  )
}

/* Pricing */
function Pricing(){
  return (
    <section className="px-8 py-20 text-center">
      <h3 className="text-3xl font-bold mb-8">Subscription Plans</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <PriceCard tier="Starter" price="₹999/mo" features={["AI test case generator", "100 test cases/month", "Email support"]} />
        <PriceCard tier="Pro" price="₹3,999/mo" features={["Everything in Starter", "AI bug reproduction tool", "Unlimited test generation", "Priority support"]} />
        <PriceCard tier="Enterprise" price="₹12,000/mo" features={["Custom automation", "CI/CD integrations", "Security testing", "On-call engineer"]} />
      </div>

      <div className="mt-8 max-w-3xl mx-auto text-left">
        <h4 className="text-xl font-semibold mb-2">Payment & Subscription (Integration)</h4>
        <p className="mb-2">This starter app includes placeholders for the two most common billing flows:</p>
        <ul className="list-disc pl-6">
          <li><strong>Stripe (Global):</strong> Hosted checkout, Billing Subscriptions, webhooks for subscription lifecycle events.</li>
          <li><strong>Razorpay (India):</strong> Orders + Subscriptions API for recurring billing in India.</li>
        </ul>
        <p className="mt-3 text-sm text-gray-600">Implementation files: <code>./src/integrations/stripe.js</code> and <code>./src/integrations/razorpay.js</code></p>
      </div>
    </section>
  )
}
function PriceCard({tier, price, features}){
  return (
    <div className="p-6 bg-white rounded-2xl shadow">
      <h4 className="text-2xl font-bold mb-2">{tier}</h4>
      <p className="text-3xl font-bold mb-4">{price}</p>
      <ul className="text-left list-disc pl-6">
        {features.map((f,i)=>(<li key={i} className="text-sm mb-1">{f}</li>))}
      </ul>
      <div className="mt-4">
        <button className="w-full p-3 bg-blue-600 text-white rounded" onClick={()=>alert('Redirect to checkout (placeholder)')}>Choose Plan</button>
      </div>
    </div>
  )
}

/* Contact */
function Contact(){
  const onSubmit = (e)=>{
    e.preventDefault()
    alert('Requirement submitted (placeholder). In production this will call the backend API to create a lead & optionally create a checkout session.')
  }
  return (
    <section className="px-8 py-20 bg-gray-900 text-white">
      <h3 className="text-3xl font-bold text-center mb-6">Submit Your Requirements</h3>
      <form className="max-w-3xl mx-auto space-y-4 bg-white rounded-2xl p-6 text-gray-900" onSubmit={onSubmit}>
        <input name="name" required className="w-full p-3 rounded" placeholder="Your Name" />
        <input name="email" type="email" required className="w-full p-3 rounded" placeholder="Email" />
        <textarea name="requirements" required className="w-full p-3 rounded h-36" placeholder="Describe your project requirements..." />
        <div className="flex gap-3">
          <button className="flex-1 p-3 bg-blue-600 text-white rounded">Submit Requirement</button>
          <button className="flex-1 p-3 bg-gray-200 rounded" type="button" onClick={()=>alert('Demo purchase flow (placeholder)')}>Buy Demo</button>
        </div>
      </form>
    </section>
  )
}

/* Blog */
def_placeholder = '''
'''
