# IPI Partner Advantage Web App

This workspace contains a runnable web app generated from `/Users/dad/Downloads/ipi-ecx-ecosystem.html`.

## Run

Open `/Users/dad/Documents/Codex/index.html` directly in a browser.

If your browser blocks local script execution, serve the folder locally instead:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Notes

The app is now bundled into `index.html` for easier direct opening. It still loads React, Babel and fonts from public CDNs, so the browser needs internet access.
