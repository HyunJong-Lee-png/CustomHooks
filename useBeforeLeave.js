const useBeforeLeave = (onBefore) => {
  const handle = (e) => {
    if (e.clientY <= 0) {
      onBefore();
    }
  }
  useEffect(() => {
    document.addEventListener('mouseleave', handle);
    return () => {
      document.removeEventListener('mouseleave', handle);
    }
  }, []);
}