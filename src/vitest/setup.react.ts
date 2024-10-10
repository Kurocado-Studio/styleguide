import '@testing-library/jest-dom/vitest';
import { expect, vi } from 'vitest';
import 'vitest-axe/extend-expect';
import * as matchers from 'vitest-axe/matchers';

expect.extend(matchers);

// eslint @typescript-eslint/no-unsafe-call: 0
// eslint @typescript-eslint/no-unsafe-member-access: 0
// eslint @typescript-eslint/no-unsafe-assignment: 0
// @ts-expect-error since we are mocking HTMLCanvasElement.getContext
HTMLCanvasElement.prototype.getContext = () => {
  return {
    beginPath: vi.fn(),
    clearRect: vi.fn(),
    closePath: vi.fn(),
    createImageData: vi.fn(),
    drawImage: vi.fn(),
    fillRect: vi.fn(),
    fillText: vi.fn(),
    getImageData: vi.fn(() => ({
      data: new Uint8ClampedArray([255, 0, 0, 255]),
    })),
    lineTo: vi.fn(),
    moveTo: vi.fn(),
    putImageData: vi.fn(),
    restore: vi.fn(),
    save: vi.fn(),
    scale: vi.fn(),
    setTransform: vi.fn(),
    stroke: vi.fn(),
    translate: vi.fn(),
  };
};
