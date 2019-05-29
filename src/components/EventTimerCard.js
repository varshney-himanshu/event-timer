import React from 'react';

class EventTimerCard extends React.Component{
   
   constructor(){
    super();
     
    this.state = {
         timerDisplay : "",
     }

   }

   componentDidMount(){
  
     if(this.props.deadline){
       this.interval = setInterval(()=>{
         var now = new Date();
         var rt = this.props.deadline - now;
         var days = Math.floor((rt/(1000*60*60*24)));
         var hours = Math.floor(((rt%(1000*60*60*24))/(1000*60*60)));
         var minutes = Math.floor(((rt%(1000*60*60))/(1000*60)));
         var seconds = Math.floor((rt%(1000*60))/1000);  
          
          var str = days.toString() + ":" + hours.toString() + ":" + minutes.toString() + ":" + seconds.toString();
         
         this.setState({timerDisplay : str});
        if(rt<=0) {
          this.setState({timerDisplay : "0:0:0:0"});
          clearInterval(this.interval);
        } 
     },1000);
    }
   } 

   stopTimer = ()=>{
       this.props.stopTimer(this.props.eventId);
        //console.log("stop timer in EventTimer!!")
   }
    
    render(){
        return(
            <div className="eventtimer mx-auto">
               <p>{this.props.eName}</p>
              <h1>{this.state.timerDisplay}</h1> 
              <button onClick={this.stopTimer} className="btn btn-outline-danger">Stop Timer</button>
            </div>
        );
    }

}

export default EventTimerCard;