document
  .getElementById('extension-form')
  .addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const urlInput = document.getElementById('extension-url').value.trim();
    const resultDiv = document.getElementById('result');
    const downloadLink = document.getElementById('download-link');

    // Regex to extract publisher and extension name
    const pattern = /itemName=([^\.]+)\.([^&]+)/;
    const match = urlInput.match(pattern);

    if (!match) {
      alert('Invalid URL! Please enter a valid Visual Studio Marketplace URL.');
      return;
    }

    // Extract publisher and extension name
    const publisher = match[1];
    const extension = match[2];

    // Construct download URL
    const version = 'latest'; // Default to "latest"
    const downloadUrl = `https://marketplace.visualstudio.com/_apis/public/gallery/publishers/${publisher}/vsextensions/${extension}/${version}/vspackage`;

    // Set the link and display it
    downloadLink.href = downloadUrl;
    downloadLink.textContent = downloadUrl;
    resultDiv.style.display = 'block';
  });
