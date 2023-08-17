const divProfile = document.querySelector(".profile");

const parseJSON = response => response.json();
const displayProfile = profile => {
  for(let attr in profile){
  	const label = document.createElement("label");
    label.innerText = (attr + ": ");
    label.classList.add("profile_label");

    const span = document.createElement("span");
       
    if(profile[attr] instanceof Array){
        profile[attr].forEach(item =>{
            span.innerText += item + " - ";
        });
        //Remove o traço no final
        span.innerText = span.innerText.slice(0,-3);
    }else{
        span.innerText = profile[attr];
    }
    span.classList.add("profile_item");
    
     const p = document.createElement("p");
     p.appendChild(label);
     p.appendChild(span);

     divProfile.appendChild(p);
  }  
	//TODO: Impleentar
}

const urlProfile = "https://run.mocky.io/v3/35672ec7-fd55-47fe-a561-0453a67e4ec5";

fetch(urlProfile)
	.then(parseJSON)
  .then(displayProfile)
  .catch(error => console.log(error));