const menuImage = document.getElementById("menuimage");
const overlayMenu = document.getElementById("overlayMenu");
const closeButton = document.getElementById("closeButton");


menuImage.addEventListener("click", function() {
  overlayMenu.style.display = "block";
});


closeButton.addEventListener("click", function() {
  overlayMenu.style.display = "none";
});

const morebtn=document.getElementById("more")
const moresp=document.getElementById("moresp")
morebtn.addEventListener("click",function(){
  moresp.style.display="block"
  morebtn.style.display="none"
});




const speakers = [
    {
      name: "Yochai Benkler",
      image: "yo.jpeg",
      title: "Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School",
      description: "Benkler studies common-based peer production, and published his seminal book, *The Wealth of Networks*, in 2006."
    },
    {
      name: "SohYeong Noh",
      image: "so.jpeg",
      title: "Director of Art Center Nabi and a board member of CC Korea",
      description: "As the main venue for her media arts production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science, technology, humanities, and the arts."
    },
    
  ];

 
  function createSpeakers() {
    const container = document.getElementById("speakers");

    speakers.forEach(speaker => {
      // Create the speaker div
      const speakerDiv = document.createElement("div");
      speakerDiv.className = "speaker";

      // Create the image element
      const img = document.createElement("img");
      img.src = speaker.image;
      img.alt = speaker.name;

      // Create the items div
      const itemsDiv = document.createElement("div");
      itemsDiv.className = "items";

      // Create the name heading
      const nameHeading = document.createElement("h3");
      nameHeading.textContent = speaker.name;

      // Create the title paragraph
      const titleParagraph = document.createElement("p");
      titleParagraph.className = "red";
      titleParagraph.textContent = speaker.title;

      // Create the description paragraph
      const descriptionParagraph = document.createElement("p");
      descriptionParagraph.textContent = speaker.description;

      // Append all elements to the items div
      itemsDiv.appendChild(nameHeading);
      itemsDiv.appendChild(titleParagraph);
      itemsDiv.appendChild(descriptionParagraph);

      // Append the image and items div to the speaker div
      speakerDiv.appendChild(img);
      speakerDiv.appendChild(itemsDiv);

      // Append the speaker div to the container
      container.appendChild(speakerDiv);
    });
  }


  window.onload = createSpeakers;