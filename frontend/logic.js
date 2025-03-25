
function submitDogData(e){
        const nameValue = document.getElementById('name').value;
        const emailValue = document.querySelector('#email').value;
    
        postData(nameValue, emailValue)
    }
  

async function postData (userName, emailValue){
    const url = "/adddog";
  
    try {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' // or other content type
        },
        body: JSON.stringify({name: userName, email:emailValue}) // or other data format
      });

    const json = await response.json();
    document.getElementById("firstname").innerHTML = json.name
    document.getElementById("email").innerHTML = json.email
  } catch (error) {
    console.error(error.message);
  }
}