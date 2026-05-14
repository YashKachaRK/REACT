# React Props – Notes + Interview Questions

## What are Props?

Props (short for properties) are used to pass data from a parent component to a child component in React.

### Example

```jsx
function Welcome(props) {
  return <h1>Hello {props.name}</h1>;
}

function App() {
  return <Welcome name="Yash" />;
}
```

Output:

```
Hello Yash
```

---

## Important Points About Props

* Props are read-only.
* Props help make components reusable.
* Data flows from parent → child.
* Props can store:

  * Strings
  * Numbers
  * Arrays
  * Objects
  * Functions
  * Components

---

## Destructuring Props

Instead of:

```jsx
function User(props) {
  return <h1>{props.name}</h1>;
}
```

Use:

```jsx
function User({ name }) {
  return <h1>{name}</h1>;
}
```

---

## Passing Functions as Props

```jsx
function Button({ clickHandler }) {
  return <button onClick={clickHandler}>Click</button>;
}
```

---

## Default Props

```jsx
function User({ name = "Guest" }) {
  return <h1>{name}</h1>;
}
```

---

# React Props Interview Questions

## Beginner Level

### 1. What are props in React?

Answer:
Props are used to pass data from a parent component to a child component.

### 2. Why do we use props?

Answer:
We use props to make components reusable and dynamic.

### 3. Are props mutable?

Answer:
No. Props are immutable (read-only).

### 4. What is the difference between props and state?

Answer:
Props:

* Passed from parent
* Read-only

State:

* Managed inside component
* Can change

### 5. Can props store functions?

Answer:
Yes. Functions can be passed as props.

---

## Intermediate Level

### 6. What is props drilling?

Answer:
Props drilling happens when data is passed through multiple components even if intermediate components don't need it.

### 7. How can you avoid props drilling?

Answer:
Using:

* Context API
* Redux
* Zustand

### 8. What is children prop?

Answer:
The children prop allows components to receive nested elements.

Example:

```jsx
function Card({ children }) {
  return <div>{children}</div>;
}
```

Usage:

```jsx
<Card>
   <h1>Hello</h1>
</Card>
```

### 9. What happens if a prop is not passed?

Answer:
Its value becomes undefined unless a default value is provided.

---

## Advanced Level

### 10. Explain one-way data binding in React.

Answer:
React follows one-way data flow where data moves from parent to child.

### 11. What are spread props?

Answer:
Spread operator allows passing multiple props.

```jsx
const user = {
   name: "Yash",
   age: 20
};

<User {...user} />
```

### 12. Why should props not be modified inside child components?

Answer:
Changing props breaks React's predictable data flow and can create bugs.

---

# Quick Revision

✔ Props = Parent → Child data
✔ Props are read-only
✔ Props improve reusability
✔ Functions can be passed as props
✔ Children is a special prop
✔ Props drilling can be solved using Context API
