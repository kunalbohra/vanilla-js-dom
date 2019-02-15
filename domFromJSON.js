var data = {
  Fish: {
    trout: {},
    salmon: {}
  },

  Tree: {
    Huge: {
      sequoia: {},
      oak: {}
    },
    Flowering: {
      redbud: {},
      magnolia: {}
    }
  }
};
/**
 *
 * @param {object} data
 * given a JSON structure, create dom nodes representing a tree
 */
const createDOMFromJSON = data => {
  if (!data) return [];

  return Object.entries(data)
    .reduce((acc, curr) => {
      const [key, value] = curr;
      //if the object has properties, then wrap all the properties within a <ul></ul>
      acc.push(
        `<li>${key}${
          Object.keys(value).length
            ? '<ul>' + createDOMFromJSON(value) + '</ul>'
            : createDOMFromJSON(value)
        }</li>`
      );
      return acc;
    }, [])
    .join('');
};

const createTree = (container, data) => {
  container.innerHTML = `<ul>${createDOMFromJSON(data)}</ul>`;
};

const container = document.getElementById('container');
createTree(container, data);
