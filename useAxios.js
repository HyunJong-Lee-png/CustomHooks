import defalutAxios from 'axios';

const useAxios = (opts, axiosInstance = defalutAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  const [trigger, setTrigger] = useState(0);

  const refetch = () => {
    setTrigger(prev => prev + 1);
    setState({
      ...state,
      loading: false,
    })
  }

  if (!opts.url) return;
  useEffect(() => {
    console.log('리팻치되나?');
    axiosInstance.get(opts.url)
      .then((response) => response.data)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data,
        })
      })
      .catch((e) => {
        setState({
          ...state,
          loading: false,
          error: e.massage,
        })
      });
  }, []);
  return { ...state, refetch };
};

export default function App() {
  const { loading, data, error, refetch } = useAxios({
    url: 'https://nomad-movies.nomadcoders.workers.dev/movies',
  });
  return (
    <div className="App">
      {loading ? <div>is Loading...</div> :
        error ? <div>{error}</div> : <div>{JSON.stringify(data)}</div>}
      <button onClick={refetch}>Refetch</button>
    </div>
  );
}