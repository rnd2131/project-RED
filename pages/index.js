// Import the Appwrite SDK (for Node.js or in-browser script)
// Assuming you have installed the Appwrite SDK via npm or included the CDN

import { Client, Databases } from 'appwrite';

// Initialize the Appwrite client
const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite endpoint
    .setProject('66f1f933003cce932aea'); // Your Appwrite project ID

// Initialize the Database service
const databases = new Databases(client);

// Function to save phone info
async function savePhoneInfo(phoneNumber) {
    try {
        const result = await databases.createDocument(
            'data',  // Database ID
            '66f1ff2200319d99c15d',  // Collection ID
            'unique()',  // Automatically generate a unique ID for the new document
            {
                phone: phoneNumber
            }
        );
        

        console.log('Phone info saved successfully', result);
    } catch (error) {
        console.error('Error saving phone info:', error);
    }
}

// Get the input field and add an event listener
const phoneInput = document.getElementById('phone-input');
const saveButton = document.getElementById('save-button');

saveButton.addEventListener('click', () => {
    const phoneNumber = phoneInput.value;
    savePhoneInfo(phoneNumber);
});
