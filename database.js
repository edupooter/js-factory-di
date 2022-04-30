function createDatabaseConnection() {
  function startConnection () {
    console.log('[database] Database starting');
    console.log('[database] Starting done');
  }

  function stopConnection () {
    console.log('[database] Database stoping');
    console.log('[database] Stopping done');
  }

  return {
    start: startConnection,
    stop: stopConnection
  }
}

export default createDatabaseConnection;
