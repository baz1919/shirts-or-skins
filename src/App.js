import { ApolloProvider } from "@apollo/client";
import { useState } from "react";
import { client } from "./graphql/client";

const App = () => {
    const [user, setUser] = useState(null);

    return (
        <ApolloProvider client={client}>
            <h1 className="text-3xl font-bold underline">Test</h1>
            {user ? <div>Logged In</div> : <h1 className="text-3xl font-bold underline">Please Login</h1>}
        </ApolloProvider>
    );
}

export default App;