const client = new Appwrite.Client();

client
    .setEndpoint('https://[YOUR_APPWRITE_ENDPOINT]') // Your Appwrite Endpoint
    .setProject('[YOUR_PROJECT_ID]'); // Your project ID

const phoneNumberInput = document.getElementById('phone-number');
const form = document.getElementById('phone-form');
const keys = document.querySelectorAll('.key');

// Function to append number to the input
keys.forEach(key => {
    key.addEventListener('click', () => {
        const keyValue = key.innerText;

        // Handle robber button (backspace functionality)
        if (key.classList.contains('robber-btn')) {
            // Prevent removing the '+' sign
            if (phoneNumberInput.value.length > 1) {
                phoneNumberInput.value = phoneNumberInput.value.slice(0, -1); // Remove last character
            }
        } else {
            // Prevent adding '+' if it's already there
            if (keyValue === '+' && phoneNumberInput.value.includes('+')) return;
            phoneNumberInput.value += keyValue; // Add key value to input
        }
    });
});

phoneNumberInput.addEventListener('focus', function() {
    this.blur(); // Remove focus, which prevents the keyboard from appearing
});

// Handle form submission
form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission

    const phoneNumber = phoneNumberInput.value;

    try {
        // Add phone number to the Appwrite database
        const response = await client.database.createDocument('[YOUR_DATABASE_ID]', '[YOUR_COLLECTION_ID]', 'unique()', {
            phone: phoneNumber,
        });
        console.log('Phone number saved:', response);
        alert('Phone number saved successfully!');
    } catch (error) {
        console.error('Error saving phone number:', error);
        alert('Failed to save phone number.');
    }
});