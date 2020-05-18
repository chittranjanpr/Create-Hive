import React from "react";
import { connect } from 'react-redux';

class Home extends React.Component {
  render() {
    console.log("121", this.props.loginDetails)
    return (
      <div>
          Home Page
      </div>
    );
  }
}

export default Home;


// function mapStateToProps(state) {
//   const { loginDetails } = state;
//   return {
//     loginDetails,
//   };
// }

// const connectedHomePage = connect(mapStateToProps)(Home);
// export { connectedHomePage as Home };