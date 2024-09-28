import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.widget.Button;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Button to prompt uninstallation
        Button uninstallTelegramButton = findViewById(R.id.uninstallButton);
        uninstallTelegramButton.setOnClickListener(v -> uninstallTelegram());
    }

    // Method to prompt the uninstallation of Telegram
    private void uninstallTelegram() {
        Intent intent = new Intent(Intent.ACTION_DELETE);
        // Use Telegram's package name for the uninstallation request
        intent.setData(Uri.parse("package:com.skype.raider"));
        startActivity(intent);
    }
}
