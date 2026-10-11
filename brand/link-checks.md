# Link checks

Checked with `curl -L` on 2026-10-10. HTTP success does not establish that a pending brand route has shipped.

| URL | HTTP |
| --- | --- |
| https://github.com/lattices-dev/lattices | 404 |
| https://github.com/lattices-dev/lattices/releases | 404 |
| https://github.com/lattices-dev/lattices/releases/download/v0.13.3/Lattices.dmg | 404 |
| https://lattices.dev | 200 |
| https://lattices.dev/action | 200 |
| https://lattices.dev/blink | 200 |
| https://lattices.dev/brand | 404 |
| https://lattices.dev/docs/agents | 200 |
| https://lattices.dev/docs/api | 200 |
| https://lattices.dev/docs/app | 200 |
| https://lattices.dev/docs/layers | 200 |
| https://lattices.dev/docs/quickstart | 200 |
| https://lattices.dev/speech | 200 |
| https://raw.githubusercontent.com/lattices-dev/.github/main/profile/assets/lattices-dark.svg | 404 |
| https://raw.githubusercontent.com/lattices-dev/.github/main/profile/assets/lattices-light.svg | 404 |

## Pending destinations

- `lattices-dev/lattices` and its release links require the repository transfer. The source `arach/lattices` v0.13.3 DMG returned 200.
- Raw profile assets require this commit to be published and `.github` to be public.
- `/brand` requires PR #144 to merge and deploy; it currently returns 404.

All other profile destinations returned 200. Repeat the checks after transfer and publication.
