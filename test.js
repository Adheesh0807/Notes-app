function execCommandWithPrevention(event, command) {
    event.preventDefault(); // Prevent form submission or default action
    document.execCommand(command);
  }

  function changeTextColor(color) {
    document.execCommand("foreColor", false, color);
  }

  function updateTimestamp(){
  const d = new Date();
  const formattedDate = d.toLocaleString();
  document.querySelector("#timestamp").innerText = `${formattedDate}`;}


  setInterval(updateTimestamp, 1000);

    // Call it once immediately to avoid delay
    updateTimestamp();

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
    document.getElementById("title").innerHTML = "";
    document.getElementById("message").innerHTML = "";
  })

// Image File Input
const imageInput = document.getElementById('imageUpload');
const imageFileName = document.getElementById('image-file-name');

imageInput.addEventListener('change', function() {
    if (imageInput.files.length > 0) {
        imageFileName.textContent = imageInput.files[0].name;
    } else {
        imageFileName.textContent = "No file chosen";
    }
});

// Audio File Input
const audioInput = document.getElementById('audioUpload');
const audioFileName = document.getElementById('audio-file-name');

audioInput.addEventListener('change', function() {
    if (audioInput.files.length > 0) {
        audioFileName.textContent = audioInput.files[0].name;
    } else {
        audioFileName.textContent = "No file chosen";
    }
});
