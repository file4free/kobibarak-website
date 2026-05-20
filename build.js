import * as esbuild from 'esbuild';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Build analytics script
await esbuild.build({
  entryPoints: [join(__dirname, 'src/analytics.js')],
  bundle: true,
  minify: true,
  format: 'iife',
  outfile: join(__dirname, 'public/analytics.js'),
  platform: 'browser',
});

console.log('✓ Analytics script built successfully');
