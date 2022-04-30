import createDatabaseConnection from "./database.js";
import createWebserver from "./webserver.js";

export default function createCore(configurations = {}) {
  const database = configurations.database ?? createDatabaseConnection();
  const server = createWebserver();

  function start() {
    console.log('[core] Starting core');
    database.start();
    server.start();
    console.log('[core] Starting done');
  }

  function stop() {
    console.log('[core] Stopping core');
    server.stop();
    database.stop();
    console.log('[core] Stopping done');
  }

  return {
    start,
    stop
  }
}
