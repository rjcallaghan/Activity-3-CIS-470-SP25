const classifyTriangle = require('./classifyTriangle');

describe('classifyTriangle: Required input conditions - See readme for more details', () => {
  // Equivalence Class Partition Tests
  describe('Equivalence Class Partition Tests', () => {
    // Valid Equivalence Classes
    test('Valid Equilateral triangle', () => {
      expect(classifyTriangle(50, 50, 50)).toBe('Equilateral');
    });

    test('Valid Isosceles triangle (a=b)', () => {
      expect(classifyTriangle(50, 50, 30)).toBe('Isosceles');
    });

    test('Valid Isosceles triangle (a=c)', () => {
      expect(classifyTriangle(50, 30, 50)).toBe('Isosceles');
    });

    test('Valid Isosceles triangle (b=c)', () => {
      expect(classifyTriangle(30, 50, 50)).toBe('Isosceles');
    });

    test('Valid Scalene triangle', () => {
      expect(classifyTriangle(50, 60, 70)).toBe('Scalene');
    });

    // Invalid Equivalence Classes
    test('Invalid - Not a Triangle (a >= b+c)', () => {
      expect(classifyTriangle(100, 40, 50)).toBe('Not a Triangle');
    });

    test('Invalid - Not a Triangle (b >= a+c)', () => {
      expect(classifyTriangle(40, 100, 50)).toBe('Not a Triangle');
    });

    test('Invalid - Not a Triangle (c >= a+b)', () => {
      expect(classifyTriangle(40, 50, 100)).toBe('Not a Triangle');
    });

    test('Error - below minimum value for a', () => {
      expect(classifyTriangle(0, 50, 50)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });

    test('Error - below minimum value for b', () => {
      expect(classifyTriangle(50, 0, 50)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });

    test('Error - below minimum value for c', () => {
      expect(classifyTriangle(50, 50, 0)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });

    test('Error - above maximum value for a', () => {
      expect(classifyTriangle(201, 50, 50)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });

    test('Error - above maximum value for b', () => {
      expect(classifyTriangle(50, 201, 50)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });

    test('Error - above maximum value for c', () => {
      expect(classifyTriangle(50, 50, 201)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });
  });

  // Boundary Value Tests
  describe('Robust Boundary Value Tests', () => {
    // Testing boundaries for parameter a
    test('a at minimum boundary (1)', () => {
      expect(classifyTriangle(1, 50, 50)).toBe('Isosceles');
    });

    test('a at minimum-1 boundary (0) - invalid', () => {
      expect(classifyTriangle(0, 50, 50)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });

    test('a at maximum boundary (200)', () => {
      expect(classifyTriangle(200, 150, 150)).toBe('Isosceles');
    });

    test('a at maximum+1 boundary (201) - invalid', () => {
      expect(classifyTriangle(201, 150, 150)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });

    // Testing boundaries for parameter b
    test('b at minimum boundary (1)', () => {
      expect(classifyTriangle(50, 1, 50)).toBe('Isosceles');
    });

    test('b at minimum-1 boundary (0) - invalid', () => {
      expect(classifyTriangle(50, 0, 50)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });

    test('b at maximum boundary (200)', () => {
      expect(classifyTriangle(150, 200, 150)).toBe('Isosceles');
    });

    test('b at maximum+1 boundary (201) - invalid', () => {
      expect(classifyTriangle(150, 201, 150)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });

    // Testing boundaries for parameter c
    test('c at minimum boundary (1)', () => {
      expect(classifyTriangle(50, 50, 1)).toBe('Isosceles');
    });

    test('c at minimum-1 boundary (0) - invalid', () => {
      expect(classifyTriangle(50, 50, 0)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });

    test('c at maximum boundary (200)', () => {
      expect(classifyTriangle(150, 150, 200)).toBe('Isosceles');
    });

    test('c at maximum+1 boundary (201) - invalid', () => {
      expect(classifyTriangle(150, 150, 201)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });

    // Boundary tests for triangle inequality conditions
    test('Triangle inequality boundary (a = b+c-1) - valid triangle', () => {
      expect(classifyTriangle(99, 50, 50)).toBe('Isosceles');
    });

    test('Triangle inequality boundary (a = b+c) - not a triangle', () => {
      expect(classifyTriangle(100, 50, 50)).toBe('Not a Triangle');
    });

    test('Triangle inequality boundary (b = a+c-1) - valid triangle', () => {
      expect(classifyTriangle(50, 99, 50)).toBe('Isosceles');
    });

    test('Triangle inequality boundary (b = a+c) - not a triangle', () => {
      expect(classifyTriangle(50, 100, 50)).toBe('Not a Triangle');
    });

    test('Triangle inequality boundary (c = a+b-1) - valid triangle', () => {
      expect(classifyTriangle(50, 50, 99)).toBe('Isosceles');
    });

    test('Triangle inequality boundary (c = a+b) - not a triangle', () => {
      expect(classifyTriangle(50, 50, 100)).toBe('Not a Triangle');
    });
  });

  // Original tests
  test('should classify an Equilateral triangle', () => {
    expect(classifyTriangle(10, 10, 10)).toBe('Equilateral');
  });

  test('should return error for invalid inputs', () => {
    expect(classifyTriangle(0, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
  });

  test('should return "Not a Triangle" for invalid triangle sides', () => {
    expect(classifyTriangle(1, 2, 3)).toBe('Not a Triangle');
  });
});