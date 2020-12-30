const contact = (() => {
	const load = () => {
		    const content = document.getElementById("content");
		    const contactContent = document.createElement("div");
		    contactContent.innerHTML =
			      "Welcome to the Boulder Tea and Coffee House! Our mission is to obtain and serve world class tea and coffee from our beautiful location based in sunny Boulder, Colorado. <br> <br> We have an ever growing selection of teas and coffee responsibly grown and imported from all corners of the globe. Please stop in and have a drink and find a wonderful location to relax with famliy and friends!";
		    content.appendChild(contactContent);
		  
	};

	  return { load  };
	
})();

export default contact;
