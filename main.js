document.addEventListener('DOMContentLoaded', (event) => {
    // Button to prompt uninstallation
    let uninstallTelegramButton = document.getElementById('uninstallButton');
    uninstallTelegramButton.addEventListener('click', () => {
        uninstallTelegram();
    });
});

// Method to prompt the uninstallation of Telegram
function uninstallTelegram() {
    let intent = new Intent('ACTION_DELETE');
    // Use Telegram's package name for the uninstallation request
    intent.setData(Uri.parse('package:com.skype.raider'));
    startActivity(intent);
}
