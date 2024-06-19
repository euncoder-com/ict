import '../App.css';

function Button(props){
    return(
        <button className={`App-${props.css}`}>
            {props.label}
        </button>
    )
}

function App(){
    return (
        <div className='App'>
            <Button css='link' label='확인'></Button>
            <Button css='logo' label='입장'></Button>
        </div>
    );
}

export default App;