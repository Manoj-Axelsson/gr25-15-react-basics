"use client";

import { CSSProperties } from "react";
import Title from "@/components/title";
import Button from "@/components/button";
// import Button from "@/components/button";

const msg = "Hello world";

const styles: CSSProperties = {
  background: "var(--foreground)",
  color: "white",
  textDecoration: "underline",
  padding: 8,
};

const languages = ["TypeScript", "Python", "C#", "Rust", "Java", "Java"];

export default function HomePage() {
  const isAuthorized = true;
  const isAdmin = false;

  function handleClick() {
    // alert("You clicked the button!");
    confirm("Are you sure you want to click this button?");
  }

  const languageList = languages.map((language, i) => (
    <li key={`${language}-${i}`}>{language}</li>
  ));

  return (
    //
    <div className="p-4">
      {/* My Comment */}
      <Title
        className="font-bold"
        // style={{ background: "green" }}
        // title="Hello World"
        // tabIndex={1}
      >
        Hello <span>World</span>
      </Title>
      {/* <img /> */}
      <p style={styles}>hello world</p>
      <h2>{msg}</h2>
      {/*
          test
          test
      */}

      <div className="flex gap-2">
        {isAdmin && <Button variant="outline">Admin Dashboard</Button>}
        {isAuthorized ? (
          <>
            <Button onClick={handleClick}>Sign Out</Button>
          </>
        ) : (
          <>
            <Button>Sign In</Button>
            <Button variant="outline">Register</Button>
          </>
        )}
      </div>

      <ul>{languageList}</ul>
    </div>
  );
}
