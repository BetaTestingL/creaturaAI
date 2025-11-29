import { supabase } from '../supabaseClient';

export default function Login() {
  async function login(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) return alert(error.message);

    alert("Logged in!");
  }

  return (
    <form onSubmit={login}>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
}
