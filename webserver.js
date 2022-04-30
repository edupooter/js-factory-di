function createWebserver() {
  function start() {
    console.log('[webserver] Starting webserver');
    console.log('[webserver] Starting done');
  }

  function stop() {
    console.log('[webserver] Stopping webserver');
    console.log('[webserver] Stopping done');
  }

  return {
    start,
    stop
  }
}

export default createWebserver;
