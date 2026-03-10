# IPI Partner Advantage Web App

This workspace contains a runnable web app generated from `/Users/dad/Downloads/ipi-ecx-ecosystem.html`.

## Run

Open `/Users/dad/Documents/Codex/index.html` directly in a browser.

If your browser blocks local script execution, serve the folder locally instead:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy (GitHub Pages)

1. Push your latest commit(s) to GitHub.
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, choose:
   - **Source**: Deploy from a branch
   - **Branch**: `main` (or your target branch), folder `/ (root)`
4. Save and wait for the deploy to finish.

## Notes

The app is bundled into `index.html` for easier direct opening. It still loads React, Babel and fonts from public CDNs, so the browser needs internet access.

If those CDN requests are blocked, the page shows an on-screen dependency error with the blocked URLs so you can diagnose network restrictions quickly.

## Troubleshooting blank page on GitHub Pages

- Hard-refresh the page (`Ctrl+F5` / `Cmd+Shift+R`) to avoid stale cached JavaScript.
- Confirm you are opening the exact Pages URL for this repo path.
- Open browser DevTools Console. If you see `Identifier '... has already been declared` errors, redeploy with the latest commit that removes duplicate declarations in `index.html`.
- If you see failed CDN requests, allow `cdnjs.cloudflare.com` on your network.
