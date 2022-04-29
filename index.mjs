import createCore from './core.mjs';

const core = createCore();

try {
  core.start();
  core.stop();
} catch (error) {
  console.error('[index] Uncaught error!');
  console.error(error);
}
