import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import { CORE_CONCEPTS,EXAMPLES } from './data.js';
import TabButton from './components/TabButton.jsx';
import { Component } from 'react';
import { useState } from 'react';
function App() {
  const [selectedTopic, setselectedTop ]=useState('components');
  function handleSelect(selectedButton){
    // selectedButton ='components', 'jsx', 'props', 'event'
    setselectedTop(selectedButton);
}
  return (
    <div>
    <Header/>
      <main>
        <section id="core-concepts">
        <h2>Core concepts</h2>
        <ul>
          <CoreConcept 
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image} 
          />
          <CoreConcept {...CORE_CONCEPTS[1]}/>
          <CoreConcept {...CORE_CONCEPTS[2]}/> 
          <CoreConcept {...CORE_CONCEPTS[3]}/>
        </ul>
        </section>
        <section id="examples">
          <h2>Example</h2>
          <menu>
            {/* <TabButton onSelect={handleSelect} label='Components'/>
            <TabButton onSelect={handleSelect} label='JSX'/>
            <TabButton onSelect={handleSelect} label='Props'/>
            <TabButton onSelect={handleSelect} label='State'/> */}
            <TabButton onSelect={()=>handleSelect('components')}>
              Components
            </TabButton>
            <TabButton onSelect={()=>handleSelect('jsx')}>
              JSX
            </TabButton>
            <TabButton onSelect={()=>handleSelect('props')}>
              Props
            </TabButton>
            <TabButton onSelect={()=>handleSelect('state')}>
              State
            </TabButton>
          </menu> 
          <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
