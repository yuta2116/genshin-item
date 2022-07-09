/*
 * メインスレッドからメッセージ受信
 */
self.addEventListener("message", (e) => {
    const param = e.data;
  
    // メインスレッドにメッセージを返す
    self.postMessage(param.split("").join(""));
  });