import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';
import EntriesChartTracker from './Components/EntriesChartTracker/EntriesChartTracker';


function App() {
  
  const [entries, setEntries] = useState([{weight: 175, date: '11-23-2021'}, {weight: 176, date: '11-24-2021'}])
  
  function addNewEntry(entry){

    let tempEntries = [ ...entries, entry];

    setEntries(tempEntries);
  }
  
  
  return (
    <div className= 'container-fluid'>
      <div className='row'>
        <div className='col-md-6'>
        </div>
        <div className='col-md-6'>
        <DisplayEntries parentEntries={entries} />
        <AddEntryForm addNewEntry={addNewEntry} />
        </div>
           <EntriesChartTracker parentEntries={entries} />
      </div>
           <EntriesChartTracker parentEntries={entries} />
    
    </div>
  );
}

export default App;

      
     
      
    
