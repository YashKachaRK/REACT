# React Lifecycle Methods

## What is Lifecycle in React?

Lifecycle means the different stages a React component goes through from creation to removal.

A component mainly has 3 phases:

1. Mounting
2. Updating
3. Unmounting

---

# 1. Mounting Phase

Mounting means a component is created and added to the DOM.

## Common Mounting Methods

### constructor()

Used for initializing state.

```jsx
constructor() {
  super();

  this.state = {
    count: 0,
  };
}
```

### render()

Returns JSX to display UI.

```jsx
render() {
  return <h1>Hello React</h1>;
}
```

### componentDidMount()

Runs after component is rendered.

```jsx
componentDidMount() {
  console.log("Component Mounted");
}
```

---

# 2. Updating Phase

Updating occurs when props or state changes.

## Common Updating Methods

### shouldComponentUpdate()

Controls whether component should re-render.

```jsx
shouldComponentUpdate() {
  return true;
}
```

### componentDidUpdate()

Runs after component updates.

```jsx
componentDidUpdate() {
  console.log("Component Updated");
}
```

---

# 3. Unmounting Phase

Unmounting means component is removed from DOM.

## componentWillUnmount()

Used for cleanup tasks.

```jsx
componentWillUnmount() {
  console.log("Component Removed");
}
```

---

# Complete Example

```jsx
import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("Mounted");
  }

  componentDidUpdate() {
    console.log("Updated");
  }

  componentWillUnmount() {
    console.log("Unmounted");
  }

  increase = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>

        <button onClick={this.increase}>
          Increase
        </button>
      </div>
    );
  }
}

export default Counter;
```

---

# Lifecycle Diagram

```text
Mounting
   ↓
constructor()
   ↓
render()
   ↓
componentDidMount()

Updating
   ↓
shouldComponentUpdate()
   ↓
render()
   ↓
componentDidUpdate()

Unmounting
   ↓
componentWillUnmount()
```

---

# Functional Component Lifecycle (Hooks)

Modern React mainly uses Hooks.

## useEffect()

useEffect works like lifecycle methods.

### componentDidMount Equivalent

```jsx
useEffect(() => {
  console.log("Mounted");
}, []);
```

### componentDidUpdate Equivalent

```jsx
useEffect(() => {
  console.log("Updated");
}, [count]);
```

### componentWillUnmount Equivalent

```jsx
useEffect(() => {
  return () => {
    console.log("Unmounted");
  };
}, []);
```

---

# Interview Questions

## Beginner Level

### 1. What is React lifecycle?

Answer:
Lifecycle represents different stages of a component.

### 2. What are the phases of lifecycle?

Answer:

* Mounting
* Updating
* Unmounting

### 3. Which method runs after first render?

Answer:
componentDidMount()

---

## Intermediate Level

### 4. What is componentDidUpdate()?

Answer:
It runs after component updates.

### 5. What is componentWillUnmount() used for?

Answer:
Cleanup tasks like clearing timers and removing event listeners.

### 6. What is useEffect()?

Answer:
A Hook used for side effects in function components.

---

## Advanced Level

### 7. Difference between useEffect and lifecycle methods?

Answer:
useEffect combines mounting, updating, and unmounting behavior in function components.

### 8. Why are class lifecycle methods less used today?

Answer:
Hooks make function components simpler and more powerful.

---

# Quick Revision

✔ Lifecycle = Component stages
✔ 3 phases: Mounting, Updating, Unmounting
✔ componentDidMount runs after render
✔ componentDidUpdate runs after update
✔ componentWillUnmount handles cleanup
✔ useEffect replaces lifecycle methods in function components
