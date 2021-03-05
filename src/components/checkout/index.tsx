import React from "react";
import useMedia from "../../hooks/use-media";
import { Header } from "../header";
import { Informations } from "./Informations";
import { YourOrder } from "./YourOrder";

export const Checkout = () => {
  const isWide = useMedia("(min-width: 800px)");

  return (
    <div>
      <Header />
      <div
        style={{
          backgroundColor: "rgb(246, 246, 246)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isWide ? "4fr 7fr" : "1fr",
            gridGap: isWide ? "12px" : "6px",
            padding: "110px 14px 0",
            minHeight: "100vh",
            maxWidth: "1244px",
            margin: "auto",
          }}
        >
          <YourOrder />
          <Informations />
        </div>
      </div>
    </div>
  );
};
