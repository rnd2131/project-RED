const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66f1f933003cce932aea'); // Your project ID

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
        const response = await client.database.createDocument('data', '66f1ff2200319d99c15d', 'unique()', {
            phone: phoneNumber,
        });
        console.log('Phone number saved:', response);
        alert('Phone number saved successfully!');
    } catch (error) {
        console.error('Error saving phone number:', error);
        alert('Failed to save phone number.');
    }
});

// Function to handle the purchase submission
async function submitPurchase() {
    const submit = document.getElementById('submit').value;


    if (phone) {
        try {
            // Create a purchase document
            await databases.createDocument(databaseId, '66f1ff2200319d99c15d', 'unique()', {
                phone, // Include quantity in the document
            });

            // Show success message and close the form
            alert('برای تکمیل خرید یه منو BUY بروید');
            alert('در صورت واریز مبلغ کالا تحویل داده میشود');
            alert('درصورت بروز مشکل از طریغ تلگرام یا پیامک در ارتباط باشید');
            closePurchaseForm(); // Close the form after submission
        } catch (error) {
            console.error('Failed to submit purchase:', error);
        }
    } else {
        alert('لطفاً تمام اطلاعات را وارد کنید');
    }
}