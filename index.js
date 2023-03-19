function App(){
    /**
     * setData is called after fetching data from json file
     * setLoaded is called after setData
     */
    const [data, setData] = React.useState(null);        
    const [loaded, setLoaded] = React.useState(false);
    /**
     * fetch JSON and call setData and setLoaded
     */
    React.useEffect(() => {
        async function getData() {
            const response = await fetch('./books.json');
            const json     = await response.json();
            setData(json);
            setLoaded(true);
        }
        getData();
    },[])
    console.log('loaded:', loaded, 'data:', data);

    return (<>
        <div className="container">
            <h1>React Components</h1>
            {loaded && data.books.map((book,i) => 
                <mit-book key={i}
                    title={book.title} 
                    subtitle={book.subtitle}
                    author={book.author}
                    publisher={book.publisher}
                    description={book.description}
                />
            )}
        </div>        
    </>);   
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
