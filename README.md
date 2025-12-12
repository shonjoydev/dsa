# JavaScript Data Structures & Algorithms

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Data Structures](https://img.shields.io/badge/Data_Structures-4285F4?style=for-the-badge)
![Algorithms](https://img.shields.io/badge/Algorithms-FF6F00?style=for-the-badge&logo=algorithm&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)

> Complete DSA implementation in JavaScript with clear explanations, complexity analysis, and real-world examples. Professional template with modern tooling: testing, documentation, Docker support, and automated CI/CD.

## 📚 What's Inside

- **50+ Data Structures** - Arrays, Linked Lists, Trees, Graphs, Heaps, and more
- **100+ Algorithms** - Sorting, Searching, Dynamic Programming, Greedy, etc.
- **Time & Space Complexity** - Detailed analysis for every solution
- **Comprehensive Testing** - 100% test coverage with Vitest
- **Interview Prep** - LeetCode patterns and problem-solving strategies
- **Visual Explanations** - Diagrams and step-by-step walkthroughs
- **Type-Safe** - TypeScript type checking for JavaScript
- **Docker Support** - Containerized development and testing

## 🎯 Perfect For

- Software engineering interviews (FAANG, startups)
- Competitive programming (Codeforces, HackerRank, LeetCode)
- Computer science students
- Self-taught developers
- Interview preparation

## 📖 Topics Covered

### Data Structures

- Arrays & Strings
- Linked Lists (Singly, Doubly, Circular)
- Stacks & Queues
- Trees (Binary, BST, AVL, Red-Black)
- Graphs (Directed, Undirected, Weighted)
- Heaps (Min, Max)
- Hash Tables
- Tries

### Algorithms

- Sorting (Quick, Merge, Heap, etc.)
- Searching (Binary, Linear, DFS, BFS)
- Dynamic Programming
- Greedy Algorithms
- Backtracking
- Divide & Conquer
- Graph Algorithms (Dijkstra, Bellman-Ford, Floyd-Warshall)
- String Algorithms (KMP, Rabin-Karp)

## 📋 Prerequisites

- **Node.js**: >= 24.12.0 < 25.0.0
- **pnpm**: >= 10.0.0 (enforced via preinstall hook)
- **Docker** (optional): For containerized development

## 🚦 Getting Started

```bash
# Clone the repository
git clone https://github.com/shonjoydev/dsa-javascript.git

# Navigate to directory
cd dsa-javascript

# Install dependencies (only pnpm is allowed)
pnpm install:pkg
```

## 📦 Available Scripts

### Development

```bash
# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage

# Run documentation server
pnpm docs:dev
```

### Docker Commands

```bash
# Run tests once
pnpm docker:test

# Run tests in watch mode
pnpm docker:test:watch

# Run tests with coverage
pnpm docker:test:coverage

# Run docs dev server
pnpm docker:docs

# Run docs in background
pnpm docker:docs:bg

# Stop all services
pnpm docker:down

# Rebuild containers
pnpm docker:build

# Clean up everything
pnpm docker:clean
```

## 🐳 Docker Setup

### Using Docker Compose

```bash
# Build and run tests
docker-compose up test

# Run tests in watch mode
docker-compose up test-watch

# Run with coverage
docker-compose up test-coverage

# Run documentation server
docker-compose up docs
```

### Manual Docker Commands

```bash
# Build the image
docker build -t dsa-javascript .

# Run tests
docker run --rm dsa-javascript

# Run with interactive terminal
docker run -it --rm dsa-javascript
```

## 📁 Repository Structure

```
dsa-javascript/
├── src/
│   ├── arrays/
│   │   ├── two-sum.js
│   │   ├── binary-search.js
│   │   └── ...
│   ├── strings/
│   │   ├── isPalindrome.js
│   │   └── ...
│   ├── linked-lists/
│   │   ├── reverse-linked-list.js
│   │   └── ...
│   ├── trees/
│   │   ├── binary-tree-traversal.js
│   │   └── ...
│   ├── graphs/
│   │   ├── dfs.js
│   │   ├── bfs.js
│   │   └── ...
│   └── dynamic-programming/
│       ├── fibonacci.js
│       └── ...
├── tests/                 # Test files
├── docs/                  # Documentation
├── .github/               # GitHub workflows
├── Dockerfile             # Docker configuration
├── docker-compose.yml     # Docker Compose configuration
├── jsconfig.json          # JavaScript/TypeScript config
├── package.json           # Project metadata
└── README.md             # This file
```

## 🧪 Testing

Tests are written using [Vitest](https://vitest.dev/).

```bash
# Run all tests
pnpm test

# Run specific test file
pnpm test src/arrays/two-sum.test.js

# Run with UI
pnpm test --ui

# Generate coverage report
pnpm test:coverage
```

## 📝 Code Quality

- **JSDoc**: Comprehensive documentation with examples
- **TypeScript**: Type checking for JavaScript files
- **Strict mode**: Enabled in `jsconfig.json`
- **Vitest**: Fast unit testing with 100% coverage
- **SonarQube**: Docker best practices

## 🤝 Contributing

Contributions welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) first.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Commit Guidelines

- Use clear and descriptive commit messages
- Follow conventional commits format (optional)
- Ensure all tests pass before committing

## 📄 License

MIT License - feel free to use for learning and interviews!

## 👤 Author

**Shonjoy**

- GitHub: [@shonjoydev](https://github.com/shonjoydev)

## 🙏 Acknowledgments

- [Vitest](https://vitest.dev/) - Testing framework
- [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager
- [Docker](https://www.docker.com/) - Containerization platform

## ⭐ Show Your Support

If this helped you, give it a ⭐! It motivates me to add more content.

## 📞 Support

For support, email your-email@example.com or open an issue in the repository.

---

<div align="center">

**[⬆ Back to Top](#javascript-data-structures--algorithms)**

Made with ❤️ by [Shonjoy](https://github.com/shonjoydev)

</div>
