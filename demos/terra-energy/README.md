# Terra Energy public showcase

This folder is a **static, illustrative public-facing showcase** for Barr Services's Terra Energy R&D project.

- Website path (after merge & GitHub Pages deployment): \`/demos/terra-energy/\`
- Original private source: \`barrservicesllc/Workshop-2.0\`, branch \`chatgpt/terra-energy-v0\`, under \`PROJECTS/TERRA_ENERGY/\`.
- Neither the original solver nor the private HTTP gateway, API credentials, customer telemetry, key database or real results have been copied into this public repository.
- The two plotted scenarios are explicitly fictional UX fixtures. The basic crossing/margin calculation is only illustrative chart behavior and **does not execute the Terra Energy solver**.
- There are no analytics scripts, remote API calls, credential fields, uploads, persistence, or equipment controls.
- The separate PythonAnywhere beta can continue independently until an alternate secure backend host is deployed and verified. **Merging this showcase does not migrate the backend** or justify deleting or expiring it.
- Before representing the real engine as available on this domain: provision secure backend hosting, decide auth design for cross-origin or same-origin access, verify TLS, limits, CORS, private source isolation, relevant security tests, and real-domain acceptance. Do not expose a private token or put a solver bundle on GitHub Pages.
- Real physical validation requires the prediction → frozen evidence → measured outcome → error comparison process. The showcase makes no physical-validation claims.

## Manual review checklist

1. View at phone and desktop widths.
2. Toggle both fictional examples; verify minimum SOC (27% / 12%), reserve margins (+7 / -8 pts), crossing (None / 18:00).
3. Verify disclaimer remains visible and navigation returns to portfolio.
4. Inspect browser network: no API calls; no private secrets in page source.
5. Check link and text contrast/keyboard operation.
6. Confirm public website portfolio link appears only after approving and merging this PR.

**Do not merge without review.**
