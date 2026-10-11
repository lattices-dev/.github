# Organization settings

**Description**

tmux workspaces and a native macOS menu bar app for tiling, layers, search and navigation. CLI and MCP tools for agents.

**Website**

https://lattices.dev

**Bio**

We build Lattices, Action, Speech and Blink: workspaces, computer use, voice and spatial notes for the Mac.

## Lattices repository after transfer

**Description**

tmux workspaces and a native macOS menu bar app for tiling, layers, search and navigation, with CLI and MCP tools for agents.

**Website**

https://lattices.dev

**Topics**

`macos`, `tmux`, `window-management`, `swift`, `typescript`, `cli`, `mcp`, `developer-tools`

## Pinned repositories

1. `lattices` after transfer: the app, CLI, Action, Speech and Blink live in this repository.

Keep `.github` unpinned; it contains organization metadata rather than a separate product. Add product repositories only if they are split out later.

## Social links

- Website: https://lattices.dev
- Brand guide: https://lattices.dev/brand (publish after PR #144 merges and the route is deployed).

## Manual setup

- Make this `.github` repository public to activate the public profile and organization community defaults.
- Upload `brand/org-avatar.png` as the organization avatar.
- Upload `brand/social-preview-lattices.png` in the transferred Lattices repository's Settings → General → Social preview.
- Upload `brand/social-preview-github.png` as this repository's social preview.
- Apply the text and pin order above after transferring `arach/lattices` to `lattices-dev/lattices`.
- Enable private vulnerability reporting in each public repository under Settings → Security → Advanced Security. The default policy does not enable the feature.
- Review repository-level community files: Lattices already has `.github/SECURITY.md` and `.github/CONTRIBUTING.md`, which override these organization defaults. Its current security policy uses email; update that policy separately if private reporting should replace it.
