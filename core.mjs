import createDatabaseConnection from "./database.mjs";
import createWebserver from "./webserver.mjs";

function createCore() {
  const database = createDatabaseConnection();
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

export default createCore;
