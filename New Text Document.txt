# React Hooks Complete Notes

## What are React Hooks?

Hooks are special functions in React that allow you to use:

* State
* Lifecycle methods
* Context
* Refs
* Performance optimization

inside **functional components**.

Before hooks, these features were only available in class components.

---

# Why Hooks?

## Advantages

✅ Less code

✅ Easier to understand

✅ No `this` keyword

✅ Better readability

✅ Reusable logic

✅ Cleaner components

---

# Most Important React Hooks

| Hook        | Purpose                       |
| ----------- | ----------------------------- |
| useState    | Manage state                  |
| useEffect   | Lifecycle methods / API calls |
| useRef      | Access DOM elements           |
| useContext  | Global state sharing          |
| useMemo     | Optimize heavy calculations   |
| useCallback | Optimize functions            |

---

# 1. useState Hook

`useState` is used to create and update state.

## Syntax

```jsx
const [state, setState] = useState(initialValue);
```

---

## Example

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default Counter;
```

---

## Explanation

```jsx
const [count, setCount] = useState(0);
```

* `count` → current value
* `setCount` → function to update value
* `0` → initial value

---

# 2. useEffect Hook

`useEffect` is used for:

* API calls
* Timers
* Lifecycle methods
* Event listeners
* Side effects

---

# Syntax

```jsx
useEffect(() => {

}, []);
```

---

# Example

```jsx
import { useEffect } from "react";

function App() {

  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  return <h1>Hello</h1>;
}
```

---

# Dependency Array

## Run Only Once

```jsx
useEffect(() => {
  console.log("Run once");
}, []);
```

---

## Run on Every Render

```jsx
useEffect(() => {
  console.log("Run every render");
});
```

---

## Run When State Changes

```jsx
useEffect(() => {
  console.log("Count changed");
}, [count]);
```

---

# Cleanup Function

Used to remove:

* Timers
* Event listeners
* Subscriptions

## Example

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running");
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);
```

---

# Lifecycle Conversion

| Class Component      | Hooks            |
| -------------------- | ---------------- |
| componentDidMount    | useEffect        |
| componentDidUpdate   | useEffect        |
| componentWillUnmount | cleanup function |

---

# API Fetch Example

```jsx
import { useState, useEffect } from "react";

function News() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_KEY")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles);
      });
  }, []);

  return (
    <div>
      {articles.map((item) => (
        <h2 key={item.url}>{item.title}</h2>
      ))}
    </div>
  );
}

export default News;
```

---

# 3. useRef Hook

`useRef` is used to:

* Access DOM elements
* Store mutable values
* Avoid unnecessary re-renders

---

# Example

```jsx
import { useRef } from "react";

function App() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} />

      <button onClick={focusInput}>
        Focus
      </button>
    </div>
  );
}
```

---

# 4. useContext Hook

`useContext` is used to share data globally.

It avoids:

❌ Prop drilling

---

# Example

## Create Context

```jsx
import { createContext } from "react";

export const UserContext = createContext();
```

---

## Provide Data

```jsx
<UserContext.Provider value="Yash">
  <App />
</UserContext.Provider>
```

---

## Consume Data

```jsx
import { useContext } from "react";
import { UserContext } from "./Context";

function Home() {
  const user = useContext(UserContext);

  return <h1>{user}</h1>;
}
```

---

# 5. useMemo Hook

Used to optimize expensive calculations.

## Example

```jsx
import { useMemo } from "react";

const value = useMemo(() => {
  return expensiveCalculation(data);
}, [data]);
```

---

# 6. useCallback Hook

Used to optimize functions.

## Example

```jsx
import { useCallback } from "react";

const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);
```

---

# Class Component vs Functional Component

## Class Component

```jsx
class App extends Component {
  render() {
    return <h1>Hello</h1>;
  }
}
```

---

## Functional Component

```jsx
function App() {
  return <h1>Hello</h1>;
}
```

---

# Modern React

Today most React applications use:

* Functional components
* Hooks

instead of class components.

---

# Most Common Hook Combination

```jsx
const [data, setData] = useState([]);

useEffect(() => {
  fetchData();
}, []);
```

This pattern is extremely common in React applications.

---

# React Hooks Rules

## Rule 1

Only call hooks at the top level.

✅ Correct

```jsx
useState();
```

❌ Wrong

```jsx
if(true){
  useState();
}
```

---

## Rule 2

Only call hooks inside React components.

---

# Conclusion

Hooks make React:

* Cleaner
* Faster to write
* Easier to maintain
* More powerful

The most important hooks to learn first are:

1. useState
2. useEffect
3. useRef
4. useContext

After mastering these, React development becomes much easier.
