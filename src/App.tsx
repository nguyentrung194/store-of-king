import React, { Suspense } from "react";
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

import { Home } from "./components/mainPage";
import { Checkout } from "./components/checkout";
import { HeaderLayout } from "./layouts/header-layout";
import { Loader } from "./layouts/loader";
import { DetailProductPage } from "./router/detail";

function App() {
  const { state }: any = useAuth();

  if (!state.user) {
    const unAuthClient = createUnAuthClient();

    return (
      <Suspense fallback={<Loader />}>
        <ApolloProvider client={unAuthClient}>
          <Routes>
            <Route path="/" element={<HeaderLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/detail/:id">
                <DetailProductPage />
              </Route>
              <Route path="/checkout" element={<Navigate to="/auth" />} />
            </Route>
            <Route path="/auth" element={<AuthLayout />}>
              <Route path="/" element={<Navigate to="sign-in" />} />
              <Route path="sign-up" element={<SignUpPage />} />
              <Route path="sign-in" element={<SignInPage />} />
              <Route path="forgot-password" element={<ForgotPasswordPage />} />
              <Route path="setup" element={<Navigate to="/auth/sign-in" />} />
              <Route
                path="email-confirmation"
                element={<Navigate to="/auth/sign-in" />}
              />
            </Route>
            <Route path="log-out" element={<Navigate to="/" />} />
            <Route path="/*" element={<Navigate to="/" replace={true} />} />
          </Routes>
        </ApolloProvider>
      </Suspense>
    );
  } else {
    if (state.user && !state.user.emailVerified) {
      const unAuthClient = createUnAuthClient();

      return (
        <Suspense fallback={<Loader />}>
          <ApolloProvider client={unAuthClient}>
            <Routes>
              <Route path="/" element={<HeaderLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/detail/:id">
                  <DetailProductPage />
                </Route>
                <Route path="/checkout" element={<Navigate to="/auth" />} />
              </Route>
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
          <Suspense fallback={<Loader />}>
            <ApolloProvider client={unAuthClient}>
              <Routes>
                <Route path="/" element={<HeaderLayout />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/detail/:id">
                    <DetailProductPage />
                  </Route>
                  <Route path="/checkout" element={<Navigate to="/auth" />} />
                </Route>
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
                <Route path="/*" element={<Navigate to="/" replace={true} />} />
              </Routes>
            </ApolloProvider>
          </Suspense>
        );
      }
      {
        const client = createAuthApolloClient(state.user);
        const roleAlow =
          state.customClaims.claims["https://hasura.io/jwt/claims"][
            "x-hasura-allowed-roles"
          ];

        if (roleAlow.includes("user")) {
          return (
            <Suspense fallback={<Loader />}>
              <ApolloProvider client={client}>
                <Routes>
                  <Route path="/" element={<HeaderLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/detail/:id">
                      <DetailProductPage />
                    </Route>
                    <Route path="/checkout" element={<Checkout />} />
                  </Route>

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
