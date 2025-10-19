# Contributing to TinyChat

First off, thank you for considering contributing to TinyChat! 🎉

## 📋 Table of Contents
- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [How to Contribute](#how-to-contribute)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Testing Guidelines](#testing-guidelines)
- [Issue Reporting](#issue-reporting)

## 📜 Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

### Our Standards
- **Be respectful** and inclusive
- **Be collaborative** and constructive
- **Be patient** with newcomers
- **Focus on what's best** for the community

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Git
- Expo CLI
- Android Studio (for Android testing)
- Xcode (for iOS testing, macOS only)

### Development Setup

1. **Fork the repository**
   ```bash
   git clone https://github.com/yourusername/TinyChat.git
   cd TinyChat
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npx expo start
   ```

4. **Run tests**
   ```bash
   npm test
   ```

## 🤝 How to Contribute

### Types of Contributions
- 🐛 **Bug fixes**
- ✨ **New features**
- 📚 **Documentation improvements**
- 🧪 **Test coverage**
- 🎨 **UI/UX improvements**
- 🔧 **Performance optimizations**

### Before You Start
1. **Check existing issues** to avoid duplicates
2. **Create an issue** for major changes
3. **Discuss your approach** in the issue comments
4. **Get approval** before starting work

## 🔄 Pull Request Process

### 1. Create a Branch
```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

### 2. Make Your Changes
- Follow our [coding standards](#coding-standards)
- Add tests for new functionality
- Update documentation if needed
- Ensure all tests pass

### 3. Commit Your Changes
```bash
git add .
git commit -m "feat: add amazing new feature"
```

**Commit Message Format:**
- `feat:` new feature
- `fix:` bug fix
- `docs:` documentation changes
- `style:` formatting changes
- `refactor:` code refactoring
- `test:` adding tests
- `chore:` maintenance tasks

### 4. Push and Create PR
```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub with:
- **Clear title** describing the change
- **Detailed description** of what and why
- **Screenshots** for UI changes
- **Testing instructions**
- **Link to related issues**

### 5. Code Review Process
- Maintainers will review your PR
- Address any feedback promptly
- Keep your branch updated with main
- Be patient and responsive

## 📝 Coding Standards

### TypeScript
- Use **strict TypeScript** configuration
- Define **proper types** for all functions
- Avoid `any` type unless absolutely necessary
- Use **interfaces** for object shapes

### React Native
- Use **functional components** with hooks
- Follow **React best practices**
- Use **proper prop types**
- Implement **error boundaries**

### File Organization
```
src/
├── components/
│   ├── common/          # Reusable components
│   ├── forms/           # Form components
│   └── __tests__/       # Component tests
├── screens/
│   ├── auth/            # Authentication screens
│   ├── chat/            # Chat screens
│   └── __tests__/       # Screen tests
├── services/
│   ├── api/             # API services
│   ├── database/        # Database services
│   └── __tests__/       # Service tests
```

### Naming Conventions
- **Components**: PascalCase (`MessageBubble.tsx`)
- **Files**: camelCase (`messageService.ts`)
- **Constants**: UPPER_SNAKE_CASE (`API_BASE_URL`)
- **Functions**: camelCase (`sendMessage`)

### Code Style
```typescript
// ✅ Good
interface MessageProps {
  id: string;
  content: string;
  timestamp: Date;
  sender: User;
}

const MessageBubble: React.FC<MessageProps> = ({ 
  id, 
  content, 
  timestamp, 
  sender 
}) => {
  const [isRead, setIsRead] = useState(false);
  
  useEffect(() => {
    markAsRead(id);
  }, [id]);

  return (
    <View style={styles.container}>
      <Text>{content}</Text>
    </View>
  );
};

// ❌ Avoid
const MessageBubble = (props: any) => {
  return <View><Text>{props.content}</Text></View>;
};
```

## 🧪 Testing Guidelines

### Test Structure
```typescript
describe('MessageService', () => {
  beforeEach(() => {
    // Setup
  });

  afterEach(() => {
    // Cleanup
  });

  it('should send message successfully', async () => {
    // Arrange
    const message = createMockMessage();
    
    // Act
    const result = await messageService.send(message);
    
    // Assert
    expect(result.success).toBe(true);
  });
});
```

### Testing Requirements
- **Unit tests** for all services
- **Component tests** for UI components
- **Integration tests** for complex workflows
- **Minimum 80%** code coverage
- **Mock external dependencies**

### Running Tests
```bash
# All tests
npm test

# Watch mode
npm test -- --watch

# Coverage report
npm run test:coverage

# Specific test file
npm test MessageService.test.ts
```

## 🐛 Issue Reporting

### Bug Reports
Include:
- **Clear title** and description
- **Steps to reproduce**
- **Expected vs actual behavior**
- **Screenshots/videos** if applicable
- **Device/OS information**
- **App version**

### Feature Requests
Include:
- **Clear use case** description
- **Proposed solution**
- **Alternative solutions** considered
- **Additional context**

### Issue Templates
Use our issue templates for:
- 🐛 Bug Report
- ✨ Feature Request
- 📚 Documentation
- ❓ Question

## 🏷️ Labels

We use labels to categorize issues:
- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Documentation improvements
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention needed
- `priority: high` - High priority
- `status: in progress` - Currently being worked on

## 🎯 Development Focus Areas

### High Priority
- 🔒 Security improvements
- 🚀 Performance optimizations
- 🐛 Critical bug fixes
- 📱 Mobile responsiveness

### Medium Priority
- ✨ New features
- 🎨 UI/UX improvements
- 📚 Documentation
- 🧪 Test coverage

### Low Priority
- 🔧 Code refactoring
- 📦 Dependency updates
- 🎯 Nice-to-have features

## 🤔 Questions?

- 💬 [GitHub Discussions](https://github.com/yourusername/TinyChat/discussions)
- 📧 Email: contributors@tinychat.dev
- 📖 [Documentation](docs/)

## 🙏 Recognition

Contributors will be:
- **Listed** in our README
- **Mentioned** in release notes
- **Invited** to our contributors channel
- **Eligible** for contributor swag

---

**Thank you for contributing to TinyChat! 🚀**