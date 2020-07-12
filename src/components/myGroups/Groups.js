import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import NavbarIn from "../navbar/NavbarIn";
import IndividualGroup from './IndividualGroup';

let name = "";
let subject = "";
let potCode = "";
let joinError;
let joinSucces = "woo"; 
let Holder; 
let createError = "";
let createSuccess = "";
let myGroupArray = []; 
let rightSide = <div>

</div>;
class Groups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a:1,
      b:3
    }
  }

  changeRoute = (name) => { 
    this.props.changeRoute(name); 
    
  }

  unloadUser = () => {
  this.props.unloadUser();
}
create = () => {
  if(name !== "" && subject !== ""){
    if(name.length >20){//Check this!!
      createError = "Please enter a shorter name";
      createSuccess = "";
    }
    else{
      if(subject.length > 49){
        createError = 'Please enter a shorter subject';
        createSuccess = "";
      }else{
        this.createId();
        createError = ""; 
        createSuccess = "Group successfully created";   
      }
    }
  }
  else{
    createError = "You must fill all fields.";
    createSuccess = "";
  }
  this.setState({a:11});
}

commit = (id) => {
  fetch('http://localhost:3000/makeGroup', {
             method: 'post',
             headers: {'Content-Type': 'application/json'},
             body:JSON.stringify({
               id: id,
               name: name,
               subject: subject,
               email: 'j@gmail.com'
           })
        })
         .then(response => response.json())
         .then(user => {
          if(user === "Success"){
            
            window.scrollTo(0, 0); 
            createSuccess = "Success";
            this.stateSetter();
       }
       if(user === "Too many"){
        createError = "You are a part of the maximum amount of groups. Consider leaving one.";
       }
          console.log(user);
         
         })

       }

stateSetter = () => {
  console.log("I guess i ran");
  this.setState({a:129});
  //this.setState({toSet:setTo});
  if(this.state.a === '1'){
    this.setState({a:25});
  }else{
    this.setState({a: 1});
  }
}


handleChange = (newer) => {
  name = newer.target.value.toLowerCase();
}
handleChangeSubject = (newer) => {
  subject = newer.target.value.toLowerCase();
}
handleChangeCode = (newer) => {
  potCode = newer.target.value;
}
componentDidMount(){  
  this.getGroups('QtYYi');
  this.setRight();
}

 join = () => {

    fetch('http://localhost:3000/joinGroup', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({
              userid: 'Ht?tq',
              code:potCode,
              email: 'j@gmail.com'
          })
        })
         .then(response => response.json())
         .then(user => {
              if(user === 'Already in'){
                console.log("Is it run");
                joinError = "You have already joined this group.";
                
              }
              if(user === 'Success'){
                console.log("success happened");
                joinSucces = "success";
                joinError = "";
                this.stateSetter();
                this.setState({b:155});
              
              }
              console.log(user);
         })
         
  }

setRight = () => {
 rightSide = <div>
<h3 className='i pointer'>Join a group</h3>
            <hr/>
            <br/>
              <span className = 'f4'>
              Join a group by simply entering the groups code. Note, the code is case sensitive.
              <br/>
               <Form>
            <Form.Row>
              <Col>
                Group Code: <b className='red f3'></b>
              </Col>
              <Col className=''>
                <Form.Control onChange={this.handleChangeCode} placeholder="XXXXXXX" />
              </Col>
            </Form.Row>

          </Form>
              </span>
              <br/>
           <Button className='pa5' variant="outline-secondary" size='lg' block onClick={this.tryJoin}>Join Group</Button>
              <br/>
              <span className='red i f4'> {joinError} </span>
              <span className='green i f4'> {joinSucces}</span>
              <hr/>
              <span className='f4'>
              What is a group?
              <br/>
              If you do not want a bet to be open to every user, you can create a bet that 
              is only avaliable to a group. You can control who is in each group by only giving 
              the group code to people you want in the group. 
              <br/>
              Each normal user will be able to join up to 10 groups. If you want 
              to join more groups, please consider getting premium.   
              </span>
  
</div>;
this.setState({a:43});

}

leave = () => {

}

swapRight = (id) => {

  window.scrollTo(0, 0); 
  let name = "";
  let subject = "";
  for(let i = 0; i < myGroupArray.length; i ++){
    if(myGroupArray[i].id === id){
      name = myGroupArray[i].name;
      subject = myGroupArray[i].subject;
       
    }
  }
  rightSide = <div>
    <h3 className='i pointer'>Group Infomation</h3>
            <hr/>
            <br/>
              <span className = 'f4'>
              Group Name: {name}
              <br/>
              Group subject: {subject}
              <br/>
              Group members: Find members
              <br/>
              Join code: {id}              
              </span>
              <br/>
              <br/>
              <hr/>
              Are you sure? Although the members will not be notified, your name
              will no longer appear on the members list.
              <Button className='ma2' variant="outline-secondary" size='lg' block onClick={this.leave}>Leave Group</Button>
              <hr/>
              <Button className='ma2' variant="outline-secondary" size='lg' block onClick={this.setRight}>Back</Button>
              
 

  </div>
  this.setState({a:29});
}

getGroups = (id) => {
  fetch('http://localhost:3000/getGroups', {
       method: 'post', 
       headers: {'Content-Type': 'application/json'},
       body: JSON.stringify({ 
        email:'j@gmail.com',
        id: id
       })
      })   
      .then(response => response.json())
      .then(group => {
        console.log(group);
        myGroupArray = group;
        Holder = group.map((group, i) => { 
          console.log(group[i].groupid)
            return <IndividualGroup key={i} name={group[i].name} amount={group[i].size} 
                    swapRight={this.swapRight} code={group[i].id} />
           })
         if(this.state.a === '1'){
         this.setState({a:'2'});
        }else{
         this.setState({a: '1'});
        }
      })
    }

createId = () => {
    let id = "";
    for(let a = 0; a < 5; a++){
      id += this.generate();
    }
    fetch('http://localhost:3000/checkId', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({
              id: id,
              table: 'groups'
          })
        })
         .then(response => response.json())
         .then(user => {
            if(user !== 'Good'){
                this.redo();
            }else{
              this.commit(id);
            }
         })

  }

  tryJoin = () => {
    if(potCode !== ""){
      if(potCode.length === 5){
        fetch('http://localhost:3000/checkId', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({
              id: potCode,
              table: 'groups'
          })
        }) 
        .then(response => response.json())
        .then(user => {
          if(user === 'Good'){
            joinError = "Incorrect code"; 
            
            this.setState({a:23});
          }else{
            this.join();
          }
       })

    }else{
      joinError = "Incorrect code";
      
      console.log("I am about to run");
       this.setState({a:274});
      }
    }
    
     if(this.state.a === '1'){
        this.setState({a:'23'});
       }else{
        this.setState({a: '13'});
       }
  }

 

  generate = () => {
   const first = Math.round(Math.random() * 64);
   let a;
   if(first < 10){
      a = String.fromCharCode(first + 48);
   }
   if(first > 9 && first < 38){
      a = String.fromCharCode(first + 53);
   }
   if(first > 37 && first < 64){
      a = String.fromCharCode(first + 59);
   }
   return a;
  }

  redo = () => {
  this.createId();
}


  render() {
    return (
      <div>  
        <NavbarIn changeRoute={this.changeRoute} unloadUser={this.unloadUser} userId={this.props.userId}/>
         <br />
        <br />
        <h1 className="tc i f1 font white">My Groups</h1>
        <br />
        

        <Container className='tc f3 solidBR'>
        <br/>

          <Row>

          <Col className='pa3 ma3 ba'>
          <br/>
            <h3 className='i pointer'>My Groups</h3>
            <hr/>
            <br/>
            <Container>
              <Row>
                <Col md>
                  Name 
                </Col>
                <Col xs={3}>
                  users
                </Col>
              </Row>
            </Container> 
            {Holder}
            
          </Col>       

            <Col className='pa3 ma3 ba'>
            <br/>
            {rightSide}
          </Col>



          </Row>
              
       
      
        <Row>
          
          <Col className='pa3 ma3 ba'>
            <h3 className='i pointer'>Create a group</h3>
            <br/>
            <hr/>
          <Container>
            <Row> 
              <Col className='pa3'>
                <Form>
            <Form.Row>
              <Col>
                Group name: <b className='red f3'></b>
              </Col>
              <Col className=''>
                <Form.Control onChange={this.handleChange} placeholder="The A Team" />
              </Col>
            </Form.Row>

            </Form>
            <br/>
  


              </Col>
              <Col className='pa3'>
                <Form>
            <Form.Row>
              <Col>
                Subject: <b className='red f3'></b>
              </Col>
              <Col className=''>
                <Form.Control onChange={this.handleChangeSubject} placeholder="Keep it short" />
              </Col>
            </Form.Row> 

          </Form>
              </Col>
                <Button className='ma2' variant="outline-secondary" size='lg' block onClick={this.create}>Create Group!</Button>
            </Row>

            <span className='red ma2 f4 i '>{createError}</span>
            <span className='green ma2 f4 i '>{createSuccess}</span>
          </Container>
          <br/>
            
              <span className='f6 black bt bb pa1' onClick={this.terms}>Our Terms of Service and stuff</span>   
          </Col>    

          </Row> 
          <br/>
        
        </Container>
        <br/>
        <br/>
         
        </div>
    );
  }
}

export default Groups;