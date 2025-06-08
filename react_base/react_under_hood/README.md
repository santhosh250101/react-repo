# Babel is used to convert JSX to browser understandable JS code here.

# 🧠 React Rendering vs Commit Phase

React updates the UI in two key phases: **Rendering Phase** and **Commit Phase**.

---

## 1. 🧠 Rendering Phase – “Preparation Work”

### 🔍 What happens:
- React **calls your component functions** to determine what the UI should look like.
- It builds a **new virtual DOM** and compares it with the previous one (**diffing**).
- **No actual DOM changes** are made during this phase.

### ✅ Characteristics:
- **Pure phase** – Can be paused, resumed, or aborted (especially in Concurrent Mode).
- **Side-effects like `useEffect` do NOT run** here.
- Used to **compute** what needs to change.

> Think of this as React “thinking”: *"What should the UI look like now?"*

---

## 2. 🧱 Commit Phase – “Apply Work to the DOM”

### 🔧 What happens:
- React applies calculated changes **to the actual DOM**.
- It triggers side effects:
  - `useEffect`
  - `useLayoutEffect`
  - `componentDidMount`, `componentDidUpdate`, etc.

### ✅ Characteristics:
- This phase **cannot be interrupted**.
- **Changes become visible on screen**.

> Think of this as React “doing”: *"Now apply the updates to the screen."*

---

## 📊 Summary Table

| Phase          | What Happens                               | DOM Changes | Effects Run     |
|----------------|---------------------------------------------|-------------|------------------|
| **Render**     | Build virtual DOM, diff with old tree       | ❌ No       | ❌ No            |
| **Commit**     | Apply DOM updates, run effects              | ✅ Yes      | ✅ Yes           |

---

## ✅ Analogy: Writing a Letter

| Step              | Description                                           |
|-------------------|-------------------------------------------------------|
| **Rendering Phase** | You plan, draft, and revise the letter (internal work) |
| **Commit Phase**    | You print and mail it (others can now see it)         |

---


## 🔄 React Rendering Flow Diagram

```text
[ JSX ]
   |
   v
[Babel Transpilation]
   |
   v
[React Element]
   |
   v
[Render Phase]
   |
   |-- Call component functions
   |-- Build Virtual DOM
   |-- Diff with previous Virtual DOM
   |
   v
[Commit Phase]
   |
   |-- Update Real DOM
   |-- Run useEffect, useLayoutEffect
   |-- Trigger Lifecycle Methods
   |
   v
[Updated UI Displayed]



-----------
useEffect and useLayoutEffect
1. React Render Phase: (build virtual DOM)
2. React Commit Phase:
   ✅ DOM updates applied
   ✅ useLayoutEffect runs
3. Browser Paint Phase:
   🎨 Screen is rendered
4. 🔁 useEffect runs after paint

# Analogy
- Commit Phase is like a chef plating the dish on the kitchen counter.
-Paint Phase is like the waiter serving the dish to the customer.
- useLayoutEffect is the chef making final tweaks before the dish is seen.
- useEffect is the manager reviewing feedback after the dish is served.

Both hooks are skipped during rendering.

useLayoutEffect is like: "I want to run before the user sees anything."

useEffect is like: "I'll wait until after the user sees the UI."