import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { driver } from 'driver.js';

@Component({
  selector: 'app-root',
  template: `
  <h1 id="firstEl">Hello from 1 {{ name }}!</h1>
    <h1 id="firstEl2">Hello from 2 {{ name }}!</h1>
    <h1 id="firstEl3">Hello from 3 {{ name }}!</h1>
    <h1 id="firstEl4">Hello from 4 {{ name }}!</h1>
    <h1 id="firstEl5">Hello from 5 {{ name }}!</h1>
    <h1 id="firstEl6">Hello from 6 {{ name }}!</h1>

    <p> This is paragraph for <span id="firstEl7">everyone</span> </p>
  
    <button (click)="showModal()">Show Modal</button>
<br/>
<br/>
<br/>
<br/>

    <button (click)="startTour()">Start Tour</button>

<div id="step1">
  <h2>Welcome</h2>
  <p>This is the first section.</p>
</div>

<div id="step2">
  <h2>Features</h2>
  <p>Explore all the features.</p>
</div>

<div id="step3">
  <h2>Get Started</h2>
  <p>Let's get started with your journey.</p>
</div>

  `,
})
export class App {
  name = 'Angular';
  driverObj = driver();
  driverObj2 = driver();

  constructor() {
    this.driverObj2 = new (driver as any)({
      showProgress: true,
      overlayClickNext: false,
      doneBtnText: 'Finish',
      nextBtnText: 'Next',
      prevBtnText: 'Previous',
    });
  }

  showModal() {
    this.driverObj.highlight({
      element: '#firstEl',
      popover: {
        title: 'Title',
        description: 'Description',
      },
    });
  }

  startTour() {
    this.driverObj2.setSteps([
      {
        element: '#step1',
        popover: {
          title: 'Step 1',
          description: 'This is the first step of the tour.',
        },
      },
      {
        element: '#firstEl7',
        popover: {
          title: 'Step 2',
          description: 'This is the second step of the tour.',
        },
      },
      {
        element: '#step3',
        popover: {
          title: 'Step 3',
          description: 'This is the third step of the tour.',
        },
      },
    ]);

    this.driverObj2.drive();

    // this.driverObj2.drive..start(); // Start the tour
  }
}

bootstrapApplication(App);
