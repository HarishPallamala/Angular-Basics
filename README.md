# Angular-Basics
Angular Practice
A small Angular practice project built with Angular 21 and TypeScript 5.9. This repository demonstrates a variety of Angular fundamentals and intermediate concepts through standalone component exercises.

What You’ll Learn
This project covers:

Angular standalone components
Routing with eager and lazy-loaded components
Template-driven forms and reactive forms
Angular signals (signal, computed, effect)
Parent-child communication with @Input and @Output
HTTP requests using HttpClient and a service
Angular pipes and use of CommonModule
404 page handling with wildcard routes
Project Structure
app

app.ts
Root component using Angular signals for title state
app.routes.ts
Route configuration and lazy loading
counter-application/
Demonstrates signals, computed values, effects, and manual counter logic
form-practice/
Template-driven forms using @angular/forms/signals
LoginData interface defined in models/formLayout.ts
reactive-forms/
Reactive forms with validation (FormControl, FormGroup, Validators)
parent/ + child/
Parent-child communication using @Input and @Output
Event emission from child back to parent
pipes/
Demonstrates Angular pipes and lazy loading of component
http-calls/
Makes HTTP GET requests via a service
Uses ServiceCode from Services/service-code.ts
page-not-found/
Wildcard route fallback for unknown paths
Key Features
Routing
app.routes.ts defines routes for:
/counter-app
/form
/reactive-forms
/parent-child
/pipes (lazy loaded)
/http-calls
** fallback to PageNotFound
Signals
counter-application uses:
signal
computed
effect
Demonstrates reactive state management without NgRx
Forms
form-practice
Template-driven form with FormField and NgForm
reactive-forms
Reactive FormGroup
Validation rules and get accessors for form controls
Component Communication
parent and child
@Input() to pass data into child
@Output() to emit events and data back to parent
HTTP Service
Services/service-code.ts
ServiceCode.getTodos() fetches data from https://dummyjson.com/products
http-calls component subscribes to the service and displays data
Lazy Loading
pipes component is loaded only when the route is visited
Useful for learning route-based code splitting
Getting Started
Prerequisites
Node.js
npm
Angular CLI (optional, can use npx ng)
Install dependencies
Run the app
Then open:

Notes
The project is configured as a standalone Angular app.
It uses Angular 21 and modern standalone component patterns.
The package.json includes:
@angular/core
@angular/router
@angular/forms
@angular/compiler-cli
typescript
vitest and prettier as dev dependencies
What This Practice Folder is Good For
This folder is ideal for:

Beginners learning Angular routing, forms, and services
Developers exploring standalone component setup
Learners practicing Angular signals and reactive state
Anyone who wants a compact example of Angular component interaction and HTTP usage
Recommended Next Steps
If you want to extend this practice project:

Add form submission handling and validation feedback
Build a user list display for http-calls
Add custom pipes in pipes/
Implement route guards or lazy-load more components
Add tests in *.spec.ts files for components and services
Summary
This repo is a practical Angular playground with focused exercises in:

routing
forms
component communication
reactive programming
lazy loading
HTTP services
It’s a good learning resource for anyone who wants to understand real Angular application structure and common development patterns.
