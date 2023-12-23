const heading1 = React.createElement('h1', {id:'title'}, 'Root-> container-> h1');
const heading2 = React.createElement('h1',{id:'title2'}, 'Root-> container-> h2');
const div2 = React.createElement('div', {id:'container'}, [heading1, heading2]);

const root2 = ReactDOM.createRoot(document.getElementById('root'));
root2.render(div2);