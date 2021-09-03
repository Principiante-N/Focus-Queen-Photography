// dark theme
let darkMode = localStorage.getItem('darkMode');

	var moon =document.getElementById("moon");
	var moonIcon =document.getElementById("moon-icon");
	var moonText=document.getElementById("moon-text")


    // check if dark mode is enabled
    // if it's enabled, turn it off
    // if it's disabled, turn it on


    const enableDarkMode = function(){
        // 1. add the class darkmode to the body
        document.body.classList.add('dark-theme');
        moonIcon.innerHTML="brightness_5"
        moonText.innerText="Light Mode"

        // 2. update darkmode in the localstorage
        localStorage.setItem("darkMode","enabled");
    };


    const disableDarkMode = function(){
        // 1. add the class darkmode to the body
        document.body.classList.remove("dark-theme");

        // 2. update darkmode in the localstorage
        localStorage.setItem("darkMode", null);
    };


    if (darkMode === 'enabled'){
        enableDarkMode();
    }

    moon.addEventListener('click', function(){
        darkMode = localStorage.getItem("darkMode");
       if(darkMode !== 'enabled'){
           enableDarkMode();
           console.loglog(darkMode)
       }else{
           disableDarkMode();
           console.log(darkMode)
       }
    });


	// moon.onclick = function(){
	// 	document.body.classList.toggle("dark-theme");
	// 	if(document.body.classList.contains("dark-theme")){
	// 		moonIcon.innerHTML="brightness_5"
	// 	}else{
	// 		moonIcon.innerHTML="brightness_7",
	// 		moonText.innerText="White Mode"
	// 	}
	// }
