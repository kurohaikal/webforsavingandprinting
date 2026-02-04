// specific search.js

document.getElementById('searchBtn').addEventListener('click', function() {
    // 1. Get the value the user typed in the search box
    const searchVal = document.getElementById('tajuk').value.trim().toLowerCase();
    const errorMsg = document.getElementById('error');
    
    // 2. Retrieve the data from LocalStorage
    const storedData = localStorage.getItem('savedRecord');

    // 3. Logic check
    if (!searchVal) {
        errorMsg.innerText = "Sila masukkan tajuk untuk carian.";
        errorMsg.style.color = "orange";
        return;
    }

    if (storedData) {
        const data = JSON.parse(storedData);

        // 4. Compare search input with the saved 'tajuk'
        // We use .includes() so it can find partial matches
        if (data.tajuk.toLowerCase().includes(searchVal)) {
            
            // Success! Save this specific found record to 'currentView' 
            // so result.html knows which one to display
            localStorage.setItem('currentView', JSON.stringify(data));
            
            errorMsg.innerText = "Rekod ditemui! Membuka...";
            errorMsg.style.color = "green";

            // 5. Redirect to the result page after a short delay
            setTimeout(() => {
                window.location.href = 'result.html';
            }, 800); 

        } else {
            // No match found
            errorMsg.innerText = "Tiada rekod dijumpai dengan tajuk tersebut.";
            errorMsg.style.color = "red";
        }
    } else {
        // No data has been saved at all yet
        errorMsg.innerText = "Tiada data dalam simpanan. Sila simpan rekod baru terlebih dahulu.";
        errorMsg.style.color = "red";
    }
});