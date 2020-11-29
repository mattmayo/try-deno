# try-deno
Playground for learning [Deno](https://deno.land)!

## Setup development environment
1. If you using a Mac and [Homebrew](https://brew.sh)
   ```shell
   brew install deno
   ```
1. That's it! For additional installation options see the [installation](https://deno.land/#installation) docs.

## How to run, test, lint, and format your code
```shell
# Run the application from the root directory
deno run src/app.ts

# Run tests
deno test

# Check test coverage
deno test --coverage --unstable

# Run linter
deno lint

# Run formatter
deno fmt --check

# Run formatter and automatically fix
deno fmt
```