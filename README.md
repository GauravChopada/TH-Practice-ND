# DAY 1 Challenge 1

## Problem:

  There are 2 components in this application: Counter and App. The steps below will take you through modifying and adding components to change functionality and implementation.
  Update the Counter component to take onIncrement and onDecrement callbacks as props and ensure they update the counter’s values independently. Each callback should take a single, integer value as a parameter which is the amount to increment the counter’s existing value by.
  Move the global data array to the component state for the App component.
  Render a fourth Counter component and ensure it’s value is updated independently from the others.
  Create a Total component, which should display below the Counter components and always display the running total of all the Counter values.
  Make a copy of the Counter component, saving the original for later. Then do the following :
  remove the onIncrement and onDecrement props from the (new) Countercomponent
  add a single onChange callback prop that takes a single integer parameter — the new value for the counter.
  Ensure all Counter components still update and function independently after this change.
  

