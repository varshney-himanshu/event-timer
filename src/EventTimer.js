import React from 'react';
import EventFormCard from "./components/EventFormCard";
import EventTimerCard from "./components/EventTimerCard";

class EventTimer extends React.Component {

  constructor(){
    super();
  
    this.state = {
                  events : [],
                  addEvent : true
                 }
}

  receiveEventData = (data) => {
    
        const event = {
          eventName : data.eName,
          deadline : data.deadline
        } 

       this.setState({events : [...this.state.events,event],addEvent : false});
    }

  stopTimer = (index)=>{
     let e = this.state.events;
     e.splice(index,1);
     this.setState({events : e},()=>{console.log(this.state.events)});
  }  

  render(){
  return (
    <div className="app row"> 

    <div className="col col-12 col-xl-9 col-lg-8 col-md-6 col-12 rb">           
     <div className="row">    
      {
        this.state.events.map((event,index)=>(
          <div className="col col-md-4"> 
          <EventTimerCard eName = {event.eventName} deadline = {event.deadline} stopTimer={this.stopTimer} eventId = {index} /></div> 
         ))
      }
      </div>
     </div>
    

    <div className="col col-12 col-xl-3 col-lg-4 col-md-6 col-12">
     { 
      this.state.addEvent 
            ? <EventFormCard sendEventData = {this.receiveEventData} /> 
            : <button className="btn btn-block btn-dark mt-3 addbtn" onClick={()=>{this.setState({addEvent:true})}}>Add Event</button>
     
     }
    </div>
          
   </div>
  );
 }
}

export default EventTimer;
