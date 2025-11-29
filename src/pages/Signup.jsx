import { supabase } from '../supabaseClient';

export default function Signup() {
  async function register(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) return alert(error.message);

    alert("Signup success! Check your email to verify.");
  }

  return (
    <form onSubmit={register}>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Sign Up</button>
    </form>
  );
}
