import React, { Component } from 'react';
import { Card,Row, Container,ListGroup } from 'react-bootstrap';
import axios from 'axios';

class PostList extends Component {
    constructor (props)
    {
        super(props);
        this.state = {
            postdata: []
        } ;
    }
    
    componentDidMount = () => {
        let url = 'https://jsonplaceholder.typicode.com/posts';
        
               axios.get(url)
                .then(response => {
                  this.setState({ postdata: response.data });
                })
                .catch(error => {
                    alert("Can not get data .Please Contact to developer")
                    //TODO: handle the error when implemented
            })
    }

     postdataList(){
                return     this.state.postdata.map((key,value)  => (
                            <Card key={value}
                                style={{ width: '100%' }}
                                className="m-2"
                            >
                                        <Card.Header>
                                        <Card.Title>Post {key.id}: {key.title} </Card.Title>
                                        </Card.Header>
                                            <Card.Body>
                                            
                                            <ListGroup as="ul">
                                            {
                                                key.body.split('\n').map((para)=>(
                                                    <ListGroup.Item as="li" key={para}>
                                                        {/* Cras justo odio */}
                                                        {para}
                                                    </ListGroup.Item>
                                                    ))
                                            }
                                        </ListGroup>
                                    </Card.Body>
                            </Card>
                        ));
    }

  render() {
    return (
        <Container>
             <Row >
                 <h3 className="p-4 text-light">TOP 100 POSTS - Digiqt </h3>
                 {this.postdataList()}
            </Row>
        </Container>
    )
  }
}

export default PostList;
