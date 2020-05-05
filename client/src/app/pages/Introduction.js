// import React, {Component}from 'react';
// import {Button, Card} from 'semantic-ui-react';
// import MessageStore from '../components/store/MessageStore';
// import HeaderNav from './HeaderNav';
// import * as Header from '../../flight.jpg';
//
// const HeaderStyle = {
//   backgroundImage: `url(${Header})`,
//   backgroundRepeat: 'no-repeat',
//   backgroundAttachment: 'fixed',
//   backgroundPosition: 'center',
//   backgroundSize: 'cover',
//   backgroundOrigin: 'border-box'
// };
//
// const HeaderTextStyle1 = {
//   color: '#ffb3b3',
//
// };
//
// const HeaderTextStyle2 = {
//   color: '#ffcccc',
//
// };
//
// class Introduction extends Component {
//   switchPage(pageName,params){
//     MessageStore.dispatch({
//       type:'switchPage',
//       data:{page:pageName,params:params}
//     });
//   }
//   render(){
//     return (
//       <div>
//         <header className="large-header light push" style={HeaderStyle}>
//           <HeaderNav />
//
//           <div className="header-container">
//             <div className="content">
//               <h1 style={HeaderTextStyle2}>Insure your time, </h1>
//               <h1 style={HeaderTextStyle1}>Insure your fortune.</h1>
//               <Button onClick={()=>{this.switchPage('Home')}} className="btn">
//                 BUY NOW!
//               </Button>
//             </div>
//           </div>
//         </header>
//           <Card>
//             <Card.Body>
//               <Card.Content>
//                 <Card.Header>Proposed Solution</Card.Header>
//               </Card.Content>
//               <Card.Content>
//                 <Card.meta>
//                   <div>Our policy will cover for the trip delay insurance benefits</div>
//                   <div>if the trip is delayed for more than a stipulated number of hours</div>
//                   <div>because of events described in the policy, such as common carrier delays, traffic accidents,</div>
//                   <div>weather conditions, lost or stolen money or travel documents, natural disaster, and terror strike.</div>
//                 </Card.meta>
//               </Card.Content>
//             </Card.Body>
//           </Card>
//
//         <Card>
//           <Card.Body>
//             <Card.Content>
//               <Card.Header>Oraclize</Card.Header>
//             </Card.Content>
//             <Card.Content>
//               <Card.meta>
//                 <div>Oraclize is the leading oracle service for smart contracts and blockchain applications, </div>
//                 <div>serving thousands of requests every day on platforms like Ethereum.</div>
//                 <div>In the blockchain space, an oracle is a party which provides data.</div>
//                 <div>The need for such figure arise from the fact that blockchain applications, </div>
//                  <div>such as Bitcoin scripts and smart contracts cannot access and fetch directly the data they require.</div>
//               </Card.meta>
//             </Card.Content>
//           </Card.Body>
//         </Card>
//
//         <Card>
//           <Card.Body>
//             <Card.Content>
//               <Card.Header>Future Enhancements</Card.Header>
//             </Card.Content>
//             <Card.Content>
//               <Card.meta>
//                 <div>Current platform enhancements: Flight cancellation, Lost or stolen baggage claim</div>
//                 <div>New platforms creation: Crypto wallet insurance, Social insurance</div>
//               </Card.meta>
//             </Card.Content>
//           </Card.Body>
//         </Card>
//       </div>
//     );
//   }
// };
//
// export default Introduction;
//
