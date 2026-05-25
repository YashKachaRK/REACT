# React Router DOM Notes

## Install React Router

```bash
npm install react-router-dom
```

---

# Basic Setup

## main.jsx

Wrap your app with `BrowserRouter`.

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

---

# App.jsx Setup

```jsx
import Navbar from "./components/Navbar";
import News from "./components/News";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const api = "YOUR_API_KEY";

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <News
              pageSize={10}
              apiKey={api}
              country="us"
              cat="general"
            />
          }
        />

        <Route
          path="/business"
          element={
            <News
              pageSize={10}
              apiKey={api}
              country="us"
              cat="business"
            />
          }
        />

        <Route
          path="/sports"
          element={
            <News
              pageSize={10}
              apiKey={api}
              country="us"
              cat="sports"
            />
          }
        />

        <Route
          path="/technology"
          element={
            <News
              pageSize={10}
              apiKey={api}
              country="us"
              cat="technology"
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
```

---

# Navbar.jsx

Use `Link` instead of `a` tag.

```jsx
import { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="bg-gray-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">

          <Link
            to="/"
            className="text-3xl font-bold text-yellow-400"
          >
            NewsMonkey
          </Link>

          <ul className="flex flex-wrap justify-center gap-6 text-lg font-medium">
            <li>
              <Link to="/" className="hover:text-yellow-400 transition">
                Home
              </Link>
            </li>

            <li>
              <Link to="/business" className="hover:text-yellow-400 transition">
                Business
              </Link>
            </li>

            <li>
              <Link to="/sports" className="hover:text-yellow-400 transition">
                Sports
              </Link>
            </li>

            <li>
              <Link to="/technology" className="hover:text-yellow-400 transition">
                Technology
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
```

---

# Important Concepts

## BrowserRouter

Provides routing functionality to the whole app.

```jsx
<BrowserRouter>
  <App />
</BrowserRouter>
```

---

## Routes

Container for all routes.

```jsx
<Routes>
  <Route path="/" element={<Home />} />
</Routes>
```

---

## Route

Used to define a page.

```jsx
<Route path="/about" element={<About />} />
```

---

## Link

Used instead of anchor tag.

```jsx
<Link to="/about">About</Link>
```

Benefits:

* Fast navigation
* No page reload
* SPA behavior

---

# Common Errors

## Error

```txt
Cannot destructure property 'basename'
```

### Reason

`Link` is used outside `BrowserRouter`.

### Fix

Wrap app inside:

```jsx
<BrowserRouter>
```

---

# React Router Folder Structure

```txt
src/
 ├── components/
 │    ├── Navbar.jsx
 │    ├── News.jsx
 │    └── Newsitem.jsx
 │
 ├── App.jsx
 └── main.jsx
```

---

# Extra Tips

## Dynamic Route Example

```jsx
<Route path="/user/:id" element={<User />} />
```

---

## useNavigate Hook

```jsx
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

navigate("/about");
```

---

# Final Notes

* Use `Link` instead of `a`
* Use `Routes` in React Router v6
* Always wrap app with `BrowserRouter`
* Use `element={<Component />}` in routes
* Keep routes inside `App.jsx`
