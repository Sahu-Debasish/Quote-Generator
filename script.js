const quoteText = document.getElementById('quote');
const generateButton = document.getElementById('generate');
const downloadButton = document.getElementById('download');

generateButton.addEventListener('click', getQuote);

function getQuote() {
    // Replace this URL with your preferred quote API.
    const apiUrl = 'https://api.quotable.io/random';

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            const quote = data.content;
            quoteText.textContent = quote;
            downloadButton.style.display = 'block';

            // Create a Blob containing the quote as text
            const blob = new Blob([quote], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);

            // Set the download link to the Blob URL
            downloadButton.href = url;
        })
        .catch((error) => {
            console.error('Error fetching quote:', error);
            quoteText.textContent = 'An error occurred while fetching the quote.';
        });
}

// Load a random quote on page load
getQuote();
