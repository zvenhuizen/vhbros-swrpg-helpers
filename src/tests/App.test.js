import { render, screen } from '@testing-library/react';
import App from './App';

/* ===== TEST DRIVEN DEVELOPMENT ===== */
// Test Driven Development refers to the process of writing tests BEFORE writing code.
// This is especially helpful when working with multiple programmers
// Essentially the way it works is this:
// One programmer writes a test for a feature - in the case below it is adding a link to the home page
// The test will fail because the link hasn't been added.
// Another programmer takes a step to fix the problem and runs the test.
// Once the test passes, they know the feature is working.
// The process repeats ad infinitum
// Developing this way ensures that when adding new features you don't break your app at a different feature without realizing it
// because if you do, your tests will tell you, and you will be able to know exactly what other feature you broke.

/* ===== ADMISSION ===== */
// I'm lazy about doing Test Driven Development
// Also, I've never done tests with React or JavaScript
// I think for now, we'll skip testing, and can add this in when we know more what we're doing.

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
