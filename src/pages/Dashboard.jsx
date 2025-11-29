import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });
  }, []);

  useEffect(() => {
    if (!user) return;

    fetch("/api/get-user-invoices?email=" + user.email)
      .then(r => r.json())
      .then(d => setInvoices(d.invoices || []));
  }, [user]);

  if (!user) return <p>Please login first.</p>;

  return (
    <div>
      <h2>Welcome {user.email}</h2>
      <h3>Your Invoices</h3>
      {invoices.map(inv => (
        <div key={inv.id}>
          <p>Amount: {inv.amount}</p>
          <p>Status: {inv.status}</p>
        </div>
      ))}
    </div>
  );
}
