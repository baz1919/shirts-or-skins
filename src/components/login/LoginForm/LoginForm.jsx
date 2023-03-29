import * as React from "react";
import { login } from "../../../utils/auth";

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(false);
    const user = await login(username, password);
    if (user) {
      onLogin(user);
    } else {
      setError(true);
    }
  };

  return (
    <section>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            required
            autoComplete="username"
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <input
            type="password"
            required
            autoComplete="current-password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {error && (
            <div>
              <p>Login failed</p>
            </div>
          )}
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
