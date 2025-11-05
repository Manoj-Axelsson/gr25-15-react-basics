"use client";

import { CSSProperties, useState, useRef, useEffect } from "react";
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

function useCounter() {
  const [count, setCount] = useState<number>(0);

  function increment(amount = 1) {
    setCount((prev) => {
      localStorage.setItem("count", (prev + 1).toString());
      return prev + amount;
    });
  }

  return [count, increment] as const;
}

export default function HomePage() {
  const [isAuthorized, setIsAuthorized] = useState<boolean>(true);
  const [isAdmin, setIsAdmin] = useState(true);
  const [count, increment] = useCounter();

  const h2Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    console.log("Count:", count);
  }, [count]);

  function signOutClick() {
    setIsAuthorized(false);
    setIsAdmin(false);

    // h2Ref.current?.textContent
  }

  function signInClick() {
    setIsAuthorized(true);
    setIsAdmin(true);
  }

  function registerClick() {
    setIsAuthorized(true);
    setIsAdmin(false);
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
      <h2 ref={h2Ref}>{msg}</h2>
      {/*
          test
          test
      */}

      <div className="flex gap-2">
        {isAdmin && <Button variant="outline">Admin Dashboard</Button>}
        {isAuthorized ? (
          <>
            <Button onClick={signOutClick}>Sign Out</Button>
          </>
        ) : (
          <>
            <Button onClick={signInClick}>Sign In</Button>
            <Button onClick={registerClick} variant="outline">
              Register
            </Button>
          </>
        )}
      </div>

      <ul>{languageList}</ul>

      <Counter value={count} onIncrement={() => increment()} />
      <Counter value={count} onIncrement={() => increment()} />
      <Counter value={count} onIncrement={() => increment()} />
    </div>
  );
}

type CounterProps = {
  value: number;
  onIncrement: () => void;
};

function Counter({ value, onIncrement }: CounterProps) {
  return (
    <div className="flex gap-2 items-center">
      <Button onClick={() => onIncrement()}>Increment</Button>
      <div>{value}</div>
    </div>
  );
}
