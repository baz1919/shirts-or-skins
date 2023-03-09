import { useState } from "react";
import { login } from "../../../utils/auth.js";

const LoginForm = ({ onLogin }) => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(false);
    const user = await login(userId, password);
    if (user) {
      onLogin(user);
    } else {
      setError(true);
    }
  };

  return (
    <section className="flex items-center justify-center h-screen bg-indigo-500">
      <div className="flex items-center justify-center flex-col">
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-center flex-col"
        >
          <input
            className="my-2 p-2"
            type="text"
            required
            autoComplete="username"
            placeholder="Username"
            value={userId}
            onChange={(event) => setUserId(event.target.value)}
          />
          <input
            className="my-2 p-2"
            type="password"
            required
            autoComplete="current-password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {error && (
            <div>
              <p className="message-body">Login failed</p>
            </div>
          )}
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="m-2 px-4 py-2 rounded-full bg-cyan-500"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
