/* eslint-disable no-console */

// Usage: node scripts/new-problem.js arrays twoSum

import fs from 'node:fs';

/**
 * Convert a string to kebab-case.
 * @param {string} str - The input string.
 * @returns {string} The kebab-cased string.
 */
const toKebabCase = (str) =>
  str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

/**
 * Convert a string to camelCase.
 * @param {string} str - The input string.
 * @returns {string} The camelCased string.
 */
const toCamelCase = (str) =>
  str.replace(/-([a-z])/g, (g) => (g[1] ?? '').toUpperCase());

/**
 * Convert a string to Title Case.
 * @param {string} str - The input string.
 * @returns {string} The title-cased string.
 */
const toTitleCase = (str) =>
  str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/^./, (s) => s.toUpperCase());

const [category, problemName] = process.argv.slice(2);

if (!category || !problemName) {
  console.log('Usage: node scripts/new-problem.js <category> <problemName>');
  console.log('Example: node scripts/new-problem.js arrays twoSum');
  process.exit(1);
}

const srcDir = `src/${category}`;
const testDir = `tests/${category}`;

fs.mkdirSync(srcDir, { recursive: true });
fs.mkdirSync(testDir, { recursive: true });

const fileName = toKebabCase(problemName);
const functionName = toCamelCase(fileName);
const displayName = toTitleCase(problemName);

const srcFile = `${srcDir}/${fileName}.js`;
const testFile = `${testDir}/${fileName}.test.js`;

const srcTemplate = `/**
 * ${displayName}
 *
 * [Add brief description of what this function does and the approach used]
 *
 * ## Algorithm
 * - [Step 1: Describe the first step]
 * - [Step 2: Describe the second step]
 * - [Step 3: Continue as needed]
 *
 * ## Constraints
 * - [List input constraints]
 * - [List behavioral constraints]
 * - [Note any guarantees about the input]
 *
 * ## Edge Cases
 * - [Describe edge case 1]
 * - [Describe edge case 2]
 * - [Describe edge case 3]
 *
 * ##### Complexity:
 * - Time: O(?) — [Explain why]
 * - Space: O(?) — [Explain why]
 *
 * @function ${functionName}
 * @memberof module:${category}
 * @since 1.0.0
 * @access public
 * @author Shonjoy
 * @param {*} param1 - [Description of first parameter]
 * @param {*} param2 - [Description of second parameter]
 * @returns {*} [Description of return value]
 * @throws {TypeError} [Describe when errors are thrown, if applicable]
 * @example
 * // [Describe what this example demonstrates]
 * ${functionName}(arg1, arg2); // → expectedOutput
 * @example
 * // [Another example demonstrating different behavior]
 * ${functionName}(arg1, arg2); // → expectedOutput
 */
export const ${functionName} = (param1, param2) => {
  // Your solution here
};
`;

const testTemplate = `import { describe, it, expect } from 'vitest';
import { ${functionName} } from '@/src/${category}/${fileName}';

describe('${functionName}', () => {
  it('should handle basic case', () => {
    // TODO: Add test case
    expect(${functionName}()).toBe(undefined);
  });

  it('should handle edge cases', () => {
    // TODO: Add edge case tests
    expect(${functionName}()).toBe(undefined);
  });

  it('should throw error for invalid input', () => {
    // TODO: Add error case tests if applicable
    expect(() => ${functionName}()).toThrow();
  });
});
`;

fs.writeFileSync(srcFile, srcTemplate);
fs.writeFileSync(testFile, testTemplate);

console.log(`✅ Created ${srcFile}`);
console.log(`✅ Created ${testFile}`);
console.log(`📝 Function name: ${functionName}`);
console.log(`\n📋 Next steps:`);
console.log(`   1. Fill in the problem description and algorithm`);
console.log(`   2. Update parameter types and descriptions`);
console.log(`   3. Implement the solution`);
console.log(`   4. Add comprehensive test cases`);
