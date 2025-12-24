# Algorithm Challenges

A TypeScript project for solving various coding problems and algorithm challenges. Currently includes an **Anagram Checker** as a sample module. The project is designed to be extensible, future problems can be added as separate modules.

## Project Structure

```
algorithm-challenges/
├─ src/
│  ├─ anagram.ts         # Actual anagram logic
│  └─ index.ts           # Entry point
├─ tests/
│  └─ anagram.test.ts    # Unit tests for the Anagram module
├─ dist/                 # Compiled output
├─ tsconfig.json
├─ package.json
├─ .gitignore
└─ README.md
```

> Future problem modules can be added under `src/` with corresponding tests in `tests/`.

## Requirements

- **Node.js** >= 24.4.1
- **npm** >= 11.4.2

## Setup

1. Install dependencies

```bash
npm install
```

2. Run locally

```bash
npm run start
```

3. Run tests

```bash
npm run test
```

4. Build project

```bash
npm run build
```
