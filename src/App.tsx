import React, { createContext, Suspense, useState } from "react";
import { ApolloProvider } from "@apollo/client";
import { Routes, Route, Navigate } from "react-router-dom";

import { useAuth } from "./hooks/use-auth";

import { SignUpPage } from "./router/auth/sign-up";
import { SignInPage } from "./router/auth/sign-in";
import { AuthLayout } from "./app/auth/auth-layout";
import { ForgotPasswordPage } from "./router/auth/forgot-password";
import { SetupAccountPage } from "./router/auth/setup";
import { VerifyEmailPage } from "./router/auth/verify-email";

import createUnAuthClient from "./apollo/unauth-client";
import createAuthApolloClient from "./apollo/auth-client";

import { Home } from "./components/langding";
import { Checkout } from "./components/checkout";

export const isOpenContext = createContext({
  isOpen: { get: false, set: (state: any) => {} },
});

function App() {
  const { state }: any = useAuth();
  const [isOpenCategories, setIsOpenCategories] = useState(false);
  const stateIsOpen = {
    isOpen: { get: isOpenCategories, set: setIsOpenCategories },
  };

  if (!state.user) {
    const unAuthClient = createUnAuthClient();

    return (
      <Suspense fallback={<h1>Loading...</h1>}>
        <ApolloProvider client={unAuthClient}>
          <isOpenContext.Provider value={stateIsOpen}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/checkout" element={<Navigate to="/auth" />} />
              <Route path="/auth" element={<AuthLayout />}>
                <Route path="/" element={<Navigate to="sign-in" />} />
                <Route path="sign-up" element={<SignUpPage />} />
                <Route path="sign-in" element={<SignInPage />} />
                <Route
                  path="forgot-password"
                  element={<ForgotPasswordPage />}
                />
                <Route path="setup" element={<Navigate to="/auth/sign-in" />} />
                <Route
                  path="email-confirmation"
                  element={<Navigate to="/auth/sign-in" />}
                />
              </Route>
              <Route path="log-out" element={<Navigate to="/" />} />
              <Route path="/*" element={<Navigate to="/" replace={true} />} />
            </Routes>
          </isOpenContext.Provider>
        </ApolloProvider>
      </Suspense>
    );
  } else {
    if (state.user && !state.user.emailVerified) {
      const unAuthClient = createUnAuthClient();

      return (
        <Suspense fallback={<h1>Loading...</h1>}>
          <ApolloProvider client={unAuthClient}>
            <isOpenContext.Provider value={stateIsOpen}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/checkout" element={<Navigate to="/auth" />} />
                <Route path="/auth" element={<AuthLayout />}>
                  <Route
                    path="/"
                    element={<Navigate to="/auth/email-confirmation" />}
                  />
                  <Route
                    path="sign-up"
                    element={<Navigate to="/auth/email-confirmation" />}
                  />
                  <Route
                    path="sign-in"
                    element={<Navigate to="/auth/email-confirmation" />}
                  />
                  <Route
                    path="forgot-password"
                    element={<Navigate to="/auth/email-confirmation" />}
                  />
                  <Route
                    path="setup"
                    element={<Navigate to="/auth/email-confirmation" />}
                  />
                  <Route
                    path="email-confirmation"
                    element={<VerifyEmailPage />}
                  />
                </Route>
                <Route path="log-out" element={<Navigate to="/" />} />
                <Route path="/*" element={<Navigate to="/" replace={true} />} />
              </Routes>
            </isOpenContext.Provider>
          </ApolloProvider>
        </Suspense>
      );
    } else {
      if (
        !state.customClaims.claims.hasOwnProperty(
          "https://hasura.io/jwt/claims"
        )
      ) {
        const unAuthClient = createUnAuthClient();

        return (
          <Suspense fallback={<h1>Loading...</h1>}>
            <ApolloProvider client={unAuthClient}>
              <isOpenContext.Provider value={stateIsOpen}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/checkout" element={<Navigate to="/auth" />} />
                  <Route path="/auth" element={<AuthLayout />}>
                    <Route path="/" element={<Navigate to="/auth/setup" />} />
                    <Route
                      path="sign-up"
                      element={<Navigate to="/auth/setup" />}
                    />
                    <Route
                      path="sign-in"
                      element={<Navigate to="/auth/setup" />}
                    />
                    <Route
                      path="forgot-password"
                      element={<Navigate to="/auth/setup" />}
                    />
                    <Route
                      path="email-confirmation"
                      element={<Navigate to="/auth/setup" />}
                    />
                    <Route path="setup" element={<SetupAccountPage />} />
                  </Route>
                  <Route
                    path="log-out"
                    element={<Navigate to="/" replace={true} />}
                  />
                  <Route
                    path="/*"
                    element={<Navigate to="/" replace={true} />}
                  />
                </Routes>
              </isOpenContext.Provider>
            </ApolloProvider>
          </Suspense>
        );
      }
      {
        const client = createAuthApolloClient(state.user);

        const role =
          state.customClaims.claims["https://hasura.io/jwt/claims"][
            "x-hasura-default-role"
          ];
        const roleAlow =
          state.customClaims.claims["https://hasura.io/jwt/claims"][
            "x-hasura-allowed-roles"
          ];
        console.log(roleAlow);

        if (role === "user") {
          return (
            <Suspense fallback={<h1>Loading...</h1>}>
              <ApolloProvider client={client}>
                <isOpenContext.Provider value={stateIsOpen}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/auth" element={<AuthLayout />}>
                      <Route path="/" element={<Navigate to="/" />} />
                      <Route
                        path="sign-up"
                        element={<Navigate to="/" replace={true} />}
                      />
                      <Route
                        path="sign-in"
                        element={<Navigate to="/" replace={true} />}
                      />
                      <Route
                        path="forgot-password"
                        element={<Navigate to="/" />}
                      />
                      <Route
                        path="email-confirmation"
                        element={<Navigate to="/" />}
                      />
                      <Route path="setup" element={<Navigate to="/" />} />
                    </Route>
                    <Route path="/log-out" element={<Home />} />
                    <Route
                      path="/*"
                      element={<Navigate to="/" replace={true} />}
                    />
                  </Routes>
                </isOpenContext.Provider>
              </ApolloProvider>
            </Suspense>
          );
        } else {
          return null;
        }
      }
    }
  }
}

export default App;
