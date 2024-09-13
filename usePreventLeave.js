const usePreventLeave = () => {

  const leave = (e) => {
    e.preventDefault();
    e.returnValue = '';
  };

  const preventLeave = () => window.addEventListener('beforeunload', leave);
  const unPreventLeave = () => window.removeEventListener('beforeunload', leave);

  return { preventLeave, unPreventLeave };
}