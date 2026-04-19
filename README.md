# Angular Practice

A small Angular practice project built with Angular 21 and TypeScript.  
This repository demonstrates several important Angular concepts through hands-on component examples and routing exercises.

---

## 🚀 What You Will Learn

This project helps you practice and understand:

- Standalone Angular components
- Angular Router with eager and lazy-loaded routes
- Template-driven forms
- Reactive forms with validation
- Angular signals (`signal`, `computed`, `effect`)
- Parent-child communication using `@Input()` and `@Output()`
- HTTP service calls using `HttpClient`
- Creating an Angular service
- Lazy loading a component
- 404 page handling with wildcard routing

---

## 📁 Project Structure

The main practice code lives under:

- `src/app/`
  - `app.ts` — root standalone component
  - `app.routes.ts` — router configuration
  - `counter-application/` — signal-based counter and computed state
  - `form-practice/` — template-driven form practice
  - `reactive-forms/` — reactive forms with validation
  - `parent/` + `child/` — parent-child data flow and event emission
  - `pipes/` — angular pipes demo with lazy loading
  - `http-calls/` — HTTP GET requests via a service
  - `page-not-found/` — wildcard 404 page

- `src/app/Services/service-code.ts`
  - Angular service for API requests

- `src/models/formLayout.ts`
  - Interface definition for login form data

---

## ✨ Key Features

### Routing
- `app.routes.ts` includes routes for:
  - `/counter-app`
  - `/form`
  - `/reactive-forms`
  - `/parent-child`
  - `/pipes` (lazy loaded)
  - `/http-calls`
  - `**` fallback for unknown paths

### Signals and Reactivity
- `counter-application` demonstrates:
  - `signal`
  - `computed`
  - `effect`
  - `WritableSignal`

### Forms
- `form-practice` uses template-driven forms and `NgForm`
- `reactive-forms` uses `FormControl`, `FormGroup`, and `Validators`

### Component Communication
- `parent` sends data to `child` through `@Input()`
- `child` sends data back through `@Output()`

### HTTP Calls
- `http-calls` uses `ServiceCode` service
- fetches data from `https://dummyjson.com/products`

### Lazy Loading
- `pipes` route only loads when visited
- great for learning route-level code splitting

---

## 📌 How to Run

```bash
cd angular-project
npm install
npm start