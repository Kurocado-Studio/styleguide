/**
 * Made with ❤️ and adobo by Kurocado Studio
 * Copyright (c) 2024. All Rights Reserved.
 *
 * Learn more about Kurocado Studio: {@link https://www.kurocado.studio}
 *
 * Explore our open-source projects: {@link https://github.com/kurocado-studio}
 */
import '@testing-library/jest-dom/vitest';
import { config } from 'dotenv';
import { expect, vi } from 'vitest';
import 'vitest-axe/extend-expect.js';
import * as matchers from 'vitest-axe/matchers.js';

config({ path: '.env.test' });

expect.extend(matchers);
//  HTMLCanvasElement is a mock,hence is not defined
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
