import React from 'react';

class EventFormCard extends React.Component{
     
    constructor(){
        super();
        this.state={
            eName : "",     //eName = Event Name
            day : "",       //day = Deadline of the Event
            time : ""       //time = time of the event
        }  

    }

    componentDidMount(){
      var dateInput = document.querySelector('input[type=date]');  //-----------start------------------
      var todaysDate = new Date();
      var year = todaysDate.getFullYear();                            //this block of code restricts the entry of earlier
      var month = ("0" + (todaysDate.getMonth() + 1)).slice(-2);      //date then current date
      var day = ("0" + todaysDate.getDate()).slice(-2); 
      var minDate = (year +"-"+ month +"-"+ day);     
      dateInput.setAttribute("min",minDate);                  //---------------end----------------
      
    }

    oninputchange = (e)=>{   //oninputchange : updates the state of the component as the input changes
        this.setState({[e.target.name] : e.target.value}) 
    }

    onsubmit = (e)=>{                        //onsubmit : submits the form data to form component through props
        e.preventDefault();
        const {eName,day,time} = this.state;  
        
        var d = day.split("-");
        var t = time.split(":");  
         
         var date = d[1].toString() + " " + d[2].toString() + " " + d[0].toString() + " " + t[0].toString() + ":" + t[1].toString() + ":00";
         
         const dline = new Date(date);

        const data = {
                 eName,
                 deadline : dline,
             }
        this.props.sendEventData(data);
    }

    render(){
      return(
      <form className="eventformcard mx-auto mt-3" onSubmit={this.onsubmit} >
          <h2 style={{textAlign:"center"}}> Create an event </h2>
        <div className="form-group"> 
         <label htmlFor="eName">Event Name</label>
         <input type="text" className="form-control form-control-sm" name="eName" onChange={this.oninputchange} required/> 
        </div>
        <div className="form-group">
         <label htmlFor="day">Day</label>  
         <input type="date" className="form-control form-control-sm" name="day" onChange={this.oninputchange} required/>  
        </div>  
        <div className="form-group">
         <label htmlFor="time">Time</label>  
         <input type="time" className="form-control form-control-sm" name="time" onChange={this.oninputchange} required/>           </div>           
      
         <input type="submit" className="btn btn-block btn-primary " value="Start Event Timer"/>
      </form>
      );
    }
}


export default EventFormCard;