const useNotification = (title, options) => {
  if (!("Notification" in window)) return;

  const fireNotif = () => {
    if (window.Notification.permission !== 'granted') {
      Notification.requestPermission()
        .then((permission) => {
          if (permission === 'granted') {
            new Notification(title, options);
          }
        })
    } else {
      new window.Notification(title, options);
    }
  }
  return fireNotif;
}