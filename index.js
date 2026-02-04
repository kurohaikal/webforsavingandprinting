function saveData() {
    const reader = new FileReader();
    const fileInput = document.getElementById('gambar').files[0];

    // Get text values
    const data = {
        tajuk: document.getElementById('tajuk').value,
        pemaju: document.getElementById('pemaju').value,
        nofail: document.getElementById('nofail').value,
        taman: document.getElementById('taman').value
    };

    if (fileInput) {
        reader.onload = function(e) {
            // Add image string to our data object
            data.image = e.target.result; 
            localStorage.setItem('savedRecord', JSON.stringify(data));
            alert("Data saved successfully!");
        };
        reader.readAsDataURL(fileInput);
    } else {
        localStorage.setItem('savedRecord', JSON.stringify(data));
        alert("Data saved (without image)!");
    }
}