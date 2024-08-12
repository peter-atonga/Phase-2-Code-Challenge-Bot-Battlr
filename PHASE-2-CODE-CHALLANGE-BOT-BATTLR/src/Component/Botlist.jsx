function Botlist(){
    const [bots, setBots] = useState([]);
    const [army, setArmy] = useState([]);
    
    useEffect(() => {
      fetch()
        .then(res => res.json())
        .then(data => setBots(data));
    }, []);
    
    
    
    return(
      <> 
      
      </>
    )
}