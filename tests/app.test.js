const extractDetails = require('../src/js/app'); // Adjust path if needed

test('Extract details from a valid URL', () => {
  const url = 'https://marketplace.visualstudio.com/items?itemName=ms-python.python';
  const { publisher, extension } = extractDetails(url);
  expect(publisher).toBe('ms-python');
  expect(extension).toBe('python');
});