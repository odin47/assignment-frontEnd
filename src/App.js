import React, {useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import './App.css';

// COMPONENTS
import Button from './components/Button';
import Input from './components/Input';
import Table from './components/Table';

function App() {
  const [state, setState] = useState({
    file: null,
    data: [],
    delimiter: ',',
    rows: 2
  });


  useEffect(() => {
    axios.get('http://localhost:8000/list').then(response => {
      setState(prevState => ({...prevState, data: response.data.result.split("\n")}));
    });
  }, [])

  const handleFileSelection = (event) => {
    setState({
      ...state,
      file: event.target.files[0]
    })
  };

  const handleFileUpload = () => {
    const data = new FormData();
    data.append('file', state.file);
    axios.post("http://localhost:8000/upload", data, { 
      })
      .then(res => {
        setState({...state});
      })
  };

  const handleTableInput = useCallback((event) => {
      const {name, value} = event.target;
      setState({...state, [name]: value})
  },[state]);

  return (
    <div className="App">
      <h1>Upload File Here:</h1>
      <div className="table-container">
      <Input type="file" handleChange={handleFileSelection}>Upload</Input>
      <Button handleAction={handleFileUpload}>Upload</Button>
      </div>
      <div className="table-container">
        <Input title="Delimiter:&nbsp;" name="delimiter" handleChange={handleTableInput} value={state.delimiter}/>
        <Input  title="Lines:&nbsp;" name="rows" handleChange={handleTableInput} value={state.rows}/>
      </div>
      <div className="table-container">
      {
        state.data.length > 0 && <Table data={state.data} delimitter={state.delimiter} rows={state.rows}/>
      }
      </div>
    </div>
  );
}

export default App;
