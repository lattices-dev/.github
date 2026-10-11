# Contributing

Read the repository's README and applicable `AGENTS.md` before making changes. Keep pull requests focused on one behavior.

For Lattices, install dependencies and run the CLI from the repository root:

```sh
bun install
bun bin/lattices.ts
```

Build the Mac app with Swift 6.2 / Xcode 26+ on macOS 26+:

```sh
cd apps/mac && swift build -c release
```

Run the checks relevant to your change. In Lattices, `bun run check` checks TypeScript and builds the app; `bun run test` runs CLI and dependency-free tests. Action and Blink have their own instructions under `products/`.

Keep CLI and app contracts in sync when changing session names, tmux tags, or daemon methods. Update docs for changes to commands, configuration, or user workflows.

In your PR, describe the behavior change and list the checks you ran. Include screenshots or recordings for UI changes. Lattices hosted workflows are manually triggered; routine validation runs locally.
