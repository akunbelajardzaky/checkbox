import React, { useState, useEffect } from "react";
import { PrismaClient } from "@prisma/client";
import Vote from "./vote";
//

// const prisma = new PrismaClient();

const Login = () => {
  const [inputToken, setInputToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [validTokens, setValidTokens] = useState([]);

  useEffect(() => {
    async function fetchTokens() {
      try {
        const tokens = await prisma.token.findMany();
        const tokenValues = tokens.map((token) => token.token);
        setValidTokens(tokenValues);
      } catch (error) {
        console.error("Error fetching tokens:", error);
      }
    }
    fetchTokens();
  }, []);

  const handleLogin = () => {
    if (validTokens.includes(inputToken)) {
      setIsLoggedIn(true);
    } else {
      alert("Token tidak valid.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return (
      <div>
        <Vote />
      </div>
    );
  }

  return (
    <div className="space-x-4 text-center h-screen items-center justify-center flex flex-col">
      <div className="flex space-x-3">
        <input
          type="text"
          placeholder="Masukkan Token"
          value={inputToken}
          onChange={(e) => setInputToken(e.target.value)}
          className="input input-bordered input-success w-full max-w-xs"
        />
        <button onClick={handleLogin} className="btn btn-outline btn-accent">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;

// import React, { useState } from "react";
// import { redirect } from "react-router-dom";
// import Vote from "./vote";

// const Login = () => {
//   const [inputToken, setInputToken] = useState("");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const validTokens = ["token1", "token2", "token3"];

//   const handleLogin = () => {
//     if (validTokens.includes(inputToken)) {
//       setIsLoggedIn(true);
//     } else {
//       alert("Token tidak valid.");
//     }
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//   };

//   // err
//   if (isLoggedIn) {
//     return (
//       <div>
//         <Vote />
//       </div>
//     );
//   }

//   return (
//     <div className="space-x-4 text-center h-screen items-center justify-center flex flex-col">
//       <div className="flex space-x-3">
//         <input
//           type="text"
//           placeholder="Masukkan Token"
//           value={inputToken}
//           onChange={(e) => setInputToken(e.target.value)}
//           className="input input-bordered input-success w-full max-w-xs "
//         />
//         <button onClick={handleLogin} className="btn btn-outline btn-accent">
//           Login
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;
