import React, {View} from "react";
import './post.css'
import ExpandedPost from './expandedPost'



class Post extends React.Component  {
    constructor() {
        super();
        this.state = {
          show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
      }
    
      showModal = () => {
        this.setState({ show: true });
      };
    
      hideModal = () => {
        this.setState({ show: false });
      };
    render() {
        return (
            <div className="rectangle">
                Looking for group for project
                <hr></hr>
                Project XYZ
                <button className="button" type="button" onClick={this.showModal}>...</button>
                <ExpandedPost show={this.state.show} handleClose={this.hideModal}>
                    <p>Modal</p>
                </ExpandedPost>
            </div>
        );
      }
}

export default Post