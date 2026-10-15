# Link checks

Checked on 2026-10-15 with `curl -I -L`.

| URL | HTTP |
| --- | --- |
| https://github.com/arach/lattices | 200 |
| https://github.com/arach/lattices/releases | 200 |
| https://github.com/arach/lattices/releases/download/v0.14.0/Lattices.dmg | 200 |
| https://lattices.dev | 200 |
| https://lattices.dev/action | 200 |
| https://lattices.dev/blink | 200 |
| https://lattices.dev/docs/agents | 200 |
| https://lattices.dev/docs/api | 200 |
| https://lattices.dev/docs/app | 200 |
| https://lattices.dev/docs/layers | 200 |
| https://lattices.dev/docs/quickstart | 200 |
| https://lattices.dev/speech | 200 |
| https://raw.githubusercontent.com/lattices-dev/.github/main/profile/assets/lattices-dark.svg | 404 |
| https://raw.githubusercontent.com/lattices-dev/.github/main/profile/assets/lattices-light.svg | 404 |

The two raw profile assets return 404 while this repository is private. They are tracked under `profile/assets/` and become publicly readable if the repository is made public. Product, source, release, and documentation destinations are checked independently of that visibility step.
