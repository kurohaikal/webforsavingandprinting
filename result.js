window.onload = function() {
    const storedData = localStorage.getItem('currentView');
    
    if (storedData) {
        const data = JSON.parse(storedData);

        // Fill the text data
        document.getElementById('tajuk').innerText = "TAJUK: " + data.tajuk;
        document.getElementById('pemaju').innerText = "PEMAJU: " + data.pemaju;
        document.getElementById('nofail').innerText = "NO. FAIL: " + data.nofail;
        document.getElementById('taman').innerText = "NAMA TAMAN: " + data.taman;

        // Display the image
        if (data.image) {
            document.getElementById('certificateImage').src = data.image;
        }
    } else {
        alert("No record selected!");
        window.location.href = 'index.html';
    }
};

function goHome() {
    window.location.href = 'index.html';
}

function printImage() {
    window.print(); // Simple way to print the page
}