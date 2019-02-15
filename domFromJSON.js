var data = {
    "Fish": {
      "trout": {},
      "salmon": {}
    },
  
    "Tree": {
      "Huge": {
        "sequoia": {},
        "oak": {}
      },
      "Flowering": {
        "redbud": {},
        "magnolia": {
        }
      }
    }
  };
  
  
  
  const createDOMFromJSON = data => {
    if(!data) return [];
    
    return Object.entries(data).reduce((acc, curr) => {
      const [key, value] = curr;
     
      acc.push(`<li>${key}${Object.keys(value).length ? '<ul>'+ createDOMFromJSON(value) + '</ul>' : createDOMFromJSON(value)}</li>`);
      return acc;                                
    }, []).join('');
  }
  
  const createTree = (container, data) => {
    container.innerHTML = `<ul>${createDOMFromJSON(data)}</ul>`;
    
  };
  
  const container = document.getElementById('container');
  createTree(container, data);
  