function execCommandWithPrevention(event, command) {
    event.preventDefault(); // Prevent form submission or default action
    document.execCommand(command);
  }

  function changeTextColor(color) {
    document.execCommand("foreColor", false, color);
  }

  const d = new Date();
  const formattedDate = d.toLocaleString();
  document.querySelector("#timestamp").innerText = `Timestamp: ${formattedDate}`;

  // Save function to prevent form submission and save content to localStorage

  const button= document.querySelector('#save').addEventListener('click',(event)=>{
    event.preventDefault(); // Prevent default form submission

    const notes = document.getElementById('message').innerText; // Retrieve content
    const title = document.getElementById('title').innerText; // Retrieve content
    localStorage.setItem('SavedNotes', notes); // Store in localStorage
    localStorage.setItem('SavedTitle', title); // Store in localStorage
    alert("Notes saved!");

    console.log('SavedNotes :', notes);
    console.log('SavedNotes :', title);
  })

  const retreiver = document.querySelector('#retreive').addEventListener('click',(event)=>{
    event.preventDefault();
    const savedNotes = localStorage.getItem('SavedNotes');
    const savedTitle = localStorage.getItem('SavedTitle');
            if (savedNotes) {
                document.getElementById('message').innerText = savedNotes;
                document.querySelector('#title').innerHTML = savedTitle;
                alert("Notes retrieved!");
            } else {
                alert("No notes found.");
            }
        
  })

  const clear= document.querySelector('#clear').addEventListener('click',(event)=>{
    event.preventDefault(); // Prevent default form submission
    document.getElementById("message").innerHTML = "";
  })