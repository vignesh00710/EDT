// Function to sign up for events
function signUp(eventName) {
    alert(`You have signed up for ${eventName}!`);
}

// Function to edit profile (placeholder)
function editProfile() {
    alert('Profile editing functionality coming soon!');
}

// Function to handle donations
function handleDonation(event) {
    event.preventDefault();
    const amount = document.getElementById('donation-amount').value;
    if (amount) {
        document.getElementById('donation-message').textContent = `Thank you for your generous donation of $${amount}!`;
    }
}

// Function to save user preferences
function savePreferences(event) {
    event.preventDefault();
    const address = document.getElementById('address').value;
    const availability = document.getElementById('availability').value;
    const interests = document.getElementById('interests').value;

    if (address && availability && interests) {
        document.getElementById('preferences-message').textContent = 
            'Your preferences have been saved successfully!';
        
        // Optionally, you could save these preferences to localStorage or a backend here
        console.log('Address:', address);
        console.log('Availability:', availability);
        console.log('Interests:', interests);
    }
}
