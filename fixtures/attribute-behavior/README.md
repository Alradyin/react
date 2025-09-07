# Attribute Behavior Fixture

A comprehensive testing tool for analyzing React's DOM attribute behavior across different versions and scenarios. This fixture helps developers understand how React handles various attribute types and values, making it easier to identify potential breaking changes or inconsistencies.

## 🎯 Purpose

This fixture is designed to:
- **Compare React versions**: Test how different React versions handle DOM attributes
- **Validate attribute behavior**: Ensure consistent attribute handling across browsers
- **Identify breaking changes**: Highlight differences between React versions
- **Test edge cases**: Validate behavior with various data types and edge cases

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- Yarn package manager
- React source code built locally

### Installation & Setup

1. **Build React locally** (from the React root directory):
   ```bash
   yarn build --type=UMD_DEV react/index,react-dom
   ```

2. **Navigate to the fixture directory**:
   ```bash
   cd fixtures/attribute-behavior
   ```

3. **Install dependencies**:
   ```bash
   yarn install
   ```

4. **Start the development server**:
   ```bash
   yarn dev
   ```

The application will open at `http://localhost:3000` and automatically copy the locally built React files.

## 📊 How It Works

### Test Matrix
The fixture creates a comprehensive test matrix:

- **Rows**: Different DOM attributes (HTML, SVG, custom attributes)
- **Columns**: Various data types and values to test
- **Cells**: Comparison between React versions

### Data Types Tested
- Strings (including empty strings)
- Numbers (integers, floats, NaN, -1, 0)
- Booleans (true, false, string representations)
- Arrays and objects
- Functions and symbols
- null and undefined values

### Visual Indicators
- **White background**: Successful attribute assignment
- **Yellow background**: Warning generated
- **Red background**: Error occurred
- **Cyan background**: Value differs from default
- **Purple outline**: Behavior changed between React versions
- **Magenta border**: SSR behavior differs from client-side

## 🔧 Known Issues

### Current Limitations
- **Syntax Error**: There are currently syntax errors when the page loads
  - `SyntaxError: missing ; before statement`
  - This appears to be related to JSX compilation or Babel configuration
  - **Workaround**: The application still functions despite these console errors

### Planned Improvements
- [ ] Fix syntax errors in console
- [ ] Add more comprehensive error handling
- [ ] Improve performance for large test matrices
- [ ] Add export functionality for test results
- [ ] Support for testing custom elements

## 🎨 Features

### Interactive Testing
- **Hover to inspect**: Hover over any cell to see detailed comparison data
- **Filter options**: View all, completed, or incomplete tests
- **Sorting**: Alphabetical, reverse alphabetical, or grouped by behavior pattern
- **Export results**: Save test results to a markdown file

### Comparison Modes
- **Client vs Server**: Compare client-side rendering with server-side rendering
- **Version comparison**: Compare stable React vs development builds
- **Behavior validation**: Ensure consistent behavior across different scenarios

## 🛠️ Development

### Project Structure
```
src/
├── App.js          # Main application component
├── attributes.js   # Attribute definitions and test cases
├── index.js        # Application entry point
└── index.css       # Styling
```

### Key Dependencies
- **React 15.6.1**: For compatibility testing
- **react-virtualized**: For efficient rendering of large data grids
- **glamor**: For CSS-in-JS styling
- **file-saver**: For exporting test results

### Contributing
This fixture is part of the React testing suite. When contributing:
1. Ensure your changes don't break existing functionality
2. Test with both stable and development React builds
3. Update documentation for any new features
4. Consider performance implications for large test matrices

## 📝 Usage Examples

### Testing a Specific Attribute
1. Use the filter to find the attribute you're interested in
2. Hover over cells to see detailed comparison data
3. Look for purple outlines indicating behavior changes
4. Check console for any warnings or errors

### Comparing React Versions
1. Ensure you have both stable and development React builds
2. The left side shows stable React behavior
3. The right side shows your local development build
4. Purple outlines highlight differences

### Exporting Results
1. Click the "Save latest results to a file" button
2. Results are saved as `AttributeTableSnapshot.md`
3. Use this for documentation or bug reports

---

## 📚 Additional Resources

- [React DOM Attributes Documentation](https://reactjs.org/docs/dom-elements.html)
- [Create React App Documentation](https://github.com/facebook/create-react-app/blob/main/packages/cra-template/template/README.md)
- [React Testing Best Practices](https://reactjs.org/docs/testing.html)

---

**Note**: This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and is maintained as part of the React testing infrastructure.
