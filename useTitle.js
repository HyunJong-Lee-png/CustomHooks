const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);

  const updateTitle = () => {
    const $title = document.querySelector("title");
    $title.textContent = title;
  };
  useEffect(() => {
    updateTitle();
  }, [title]);
  return setTitle;
};