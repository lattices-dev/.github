# GitHub brand assets

Run `bun install` and `bun run brand` from the repository root. The renderer uses local Google Chrome at `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`.

Upload files:

- `org-avatar.png`: 1024×1024, official icon tile on paper.
- `social-preview-lattices.png`: 1280×640, Lattices repository.
- `social-preview-github.png`: 1280×640, organization profile repository.

The cards use a 96px content inset, exceeding the 40pt safe margin. `previews/` contains the 40px avatar, 640×320 card checks, and local light/dark profile HTML and screenshots. These verification artifacts are regenerated and ignored by Git.

The SVG sources were copied unchanged from `~/dev/lattices`, branch `feat/mark-accents`, commit `8fb52139e93db2cf569efd219cbfc6de1ddc7b43`:

- `apps/site/public/brand/lattices/lattices-light.svg` → `profile/assets/lattices-light.svg`
- `apps/site/public/brand/lattices/lattices-dark.svg` → `profile/assets/lattices-dark.svg`
- `apps/site/public/brand/lattices/lattices-icon.svg` → `brand/lattices-icon.svg`

To update, read those paths with `git show <ref>:<path>`, replace the local SVGs, and rerun the build. No source checkout or network asset fetch is needed to render.

The profile retains the centered mark: a banner would duplicate the name and tagline. Local previews substitute embedded SVGs for the future raw GitHub URLs and approximate GitHub typography; they are not screenshots of the published organization page.
