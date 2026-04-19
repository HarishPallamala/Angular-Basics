import { Routes } from '@angular/router';
import { CounterApplication } from './counter-application/counter-application';
import { FormPractice } from './form-practice/form-practice';
import { App } from './app';
import { PageNotFound } from './page-not-found/page-not-found';
import { ReactiveForms } from './reactive-forms/reactive-forms';
import { Parent } from './parent/parent';
import { Pipes } from './pipes/pipes';
import { HttpCalls } from './http-calls/http-calls';

export const routes: Routes = [
  {
    path: 'counter-app',
    component: CounterApplication
  },
  {
    path: 'form',
    component: FormPractice
  },
  {
    path: 'reactive-forms',
    component: ReactiveForms
  },
  {
    path: 'parent-child',
    component: Parent
  },
  {
    path: 'pipes',
    // component: Pipes
    loadComponent: () => import('./pipes/pipes').then(m => m.Pipes) // lazy loading of component, it will load only when we navigate to that route -> how to check -> network tab in dev tools and check for pipes.js file before and after navigating to that route
  },
  {
    path: 'http-calls',
    component: HttpCalls
  },
  {
    path: '**',
    component: PageNotFound
  }
];