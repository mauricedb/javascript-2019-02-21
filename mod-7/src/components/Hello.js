import React, { Component, useState } from 'react';

// class Hello extends Component {
//   render() {
//     const { firstName, teller } = this.props;

//     return (
//       <div>
//         Hallo {firstName} daar om {new Date().toLocaleTimeString()}
//         <br />
//         De teller is {teller}
//       </div>
//     );
//   }
// }

const Hello = ({ firstName, teller }) => {
  const [lastName, setLastName] = useState('de Beijer');

  return (
    <div>
      Hallo {firstName} {lastName} daar om {new Date().toLocaleTimeString()}
      <br />
      <input
        type="text"
        value={lastName}
        onChange={e => setLastName(e.target.value)}
      />
      <br />
      De teller is {teller}
    </div>
  );
};

export default Hello;
