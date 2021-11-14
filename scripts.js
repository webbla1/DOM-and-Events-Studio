window.addEventListener("DOMContentLoaded", ()=> {
    //shuttle starting location
    let height = 0;
    let left = 175;
    let bottom = 0;
    
    //HTML Elements
    const rocket = document.getElementById("rocket");
    const takeoffButton = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const landingButton = document.getElementById("landing");
    const missionAbortButton = document.getElementById("missionAbort");
    const upButton = document.getElementById("upControl");
    const downButton = document.getElementById("downControl");
    const leftButton = document.getElementById("leftControl");
    const rightButton = document.getElementById("rightControl");

    //Event Listeners
    takeoffButton.addEventListener('click', ()=> {
        const flightConfirmation = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (flightConfirmation) {
            flightStatus.innerText = 'Houston! We have liftoff!';
            shuttleBackground.style.backgroundColor = "blue";
            height += 10000;
            spaceShuttleHeight.innerText = height;
        }
      });
      landingButton.addEventListener('click', ()=>{
          window.alert("The shuttle is landing. Landing gear engaged.");
          height = 0;
          spaceShuttleHeight.innerText = height;
          flightStatus.innerText = "The shuttle has landed.";
          shuttleBackground.style.backgroundColor = "green";
      })
      const missionAbortHandler = ()=>{
          const abortConfirmation = window.confirm("Confirm that you want to abort the mission.");
          if(abortConfirmation){
              height = 0;
              spaceShuttleHeight.innerText = height;
              shuttleBackground.style.backgroundColor = "green";
          }
      }
      missionAbortButton.addEventListener('click', missionAbortHandler);

      upButton.addEventListener('click', ()=>{
        height += 10000;
        spaceShuttleHeight.innerText = height;
        bottom += 10;  
        rocket.style.bottom = `${bottom}px`;
        

      })
      downButton.addEventListener('click', ()=>{
        height -= 10000;
        spaceShuttleHeight.innerText = height;  
        bottom -= 10;  
        rocket.style.bottom = `${bottom}px`;
      })
      leftButton.addEventListener('click', ()=>{
        left -= 10;  
        rocket.style.left = `${left}px`;
      })
      rightButton.addEventListener('click', ()=>{
        left += 10;  
        rocket.style.left = `${left}px`;
      })
});