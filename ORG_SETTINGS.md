# Organization settings

## Current organization profile

**Display name**

Lattices

**Description**

Native macOS tools for developers and agents. Workspaces, computer use, spatial notes, and speech.

**Website**

https://lattices.dev

**Avatar**

`brand/org-avatar.png`

## Source and release destinations

The app, CLI, Action, Speech, and Blink source remain in `arach/lattices`. No repository transfer is required for this organization profile. Use working source and release links until a transfer is completed and verified.

- Source: https://github.com/arach/lattices
- Release: https://github.com/arach/lattices/releases/tag/v0.14.0
- CLI: `@lattices/cli` and `@arach/lattices`, both version 0.14.0.
- Skills: `npx skills add arach/lattices --all --global --yes`

## Profile publication

GitHub requires a public `.github` repository to display `profile/README.md` on the public organization page. This repository is currently private. Making it public also exposes its tracked files and commit history; that visibility change is a separate step.

Keep `.github` unpinned; it contains organization metadata rather than a separate product. Add product repositories only if they are split out or transferred later.

## Other settings

- `brand/social-preview-github.png` is the social preview for this repository.
- `brand/social-preview-lattices.png` is available for the source repository.
- Enable private vulnerability reporting in each public repository before directing reports there. The default security policy does not enable the feature.
- Repository-level community files override organization defaults. Lattices has its own security and contributing policies.
