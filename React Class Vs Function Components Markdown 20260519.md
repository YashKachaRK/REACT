# React Class Components vs Function Components

## What are Components in React?

Components are reusable pieces of UI in React.

There are two main types of components:

1. Class Components
2. Function Components

---

# Function Components

Function components are simple JavaScript functions that return JSX.

## Example

```jsx
function Welcome() {
  return <h1>Hello React</h1>;
}

export default Welcome;
```

## Using Props in Function Component

```jsx
function User({ name }) {
  return <h1>Hello {name}</h1>;
}
```

## Using State in Function Component

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

## Advantages of Function Components

* Easy to write
* Less code
* Better readability
* Supports Hooks
* Preferred in modern React

---

# Class Components

Class components are ES6 classes that extend React.Component.

## Example

```jsx
import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return <h1>Hello React</h1>;
  }
}

export default Welcome;
```

## Using Props in Class Component

```jsx
class User extends Component {
  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}
```

## Using State in Class Component

```jsx
class Counter extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  increase = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <button onClick={this.increase}>
        {this.state.count}
      </button>
    );
  }
}
```

---

# Difference Between Class and Function Components

| Function Component         | Class Component        |
| -------------------------- | ---------------------- |
| Simple JavaScript function | ES6 Class              |
| Uses Hooks                 | Uses lifecycle methods |
| Less boilerplate           | More boilerplate       |
| Easier to understand       | More complex           |
| Preferred in modern React  | Older approach         |
| Uses useState()            | Uses this.state        |

---

# Lifecycle Methods in Class Components

## Common Lifecycle Methods

### componentDidMount()

Runs after component renders.

```jsx
componentDidMount() {
  console.log("Component Mounted");
}
```

### componentDidUpdate()

Runs after update.

```jsx
componentDidUpdate() {
  console.log("Updated");
}
```

### componentWillUnmount()

Runs before component removal.

```jsx
componentWillUnmount() {
  console.log("Removed");
}
```

---

# Interview Questions

## Beginner Level

### 1. What is a component in React?

Answer:
A component is a reusable UI block.

### 2. What are the types of components?

Answer:

* Function Components
* Class Components

### 3. Which component type is preferred today?

Answer:
Function components with Hooks.

### 4. What is JSX?

Answer:
JSX is HTML-like syntax used in React.

---

## Intermediate Level

### 5. Difference between class and function components?

Answer:
Function components are simpler and use Hooks, while class components use lifecycle methods and this.state.

### 6. What is useState?

Answer:
A Hook used for state management in function components.

### 7. What is this.state?

Answer:
this.state is used to manage state in class components.

### 8. What is setState()?

Answer:
setState() updates state in class components.

---

## Advanced Level

### 9. What are lifecycle methods?

Answer:
Lifecycle methods control different stages of a component.

### 10. Why are Hooks important?

Answer:
Hooks allow state and lifecycle features inside function components.

### 11. Can class components use Hooks?

Answer:
No. Hooks only work in function components.

---

# Quick Revision

✔ Components are reusable UI blocks
✔ Two types: Class and Function
✔ Function components are modern approach
✔ Hooks work in function components
✔ Class components use lifecycle methods
✔ useState manages state in functions
✔ this.state manages state in classes
