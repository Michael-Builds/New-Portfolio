let tablinks = document.getElementsByClassName('tab_links');
let tabcontents = document.getElementsByClassName('tab_content');

function openTab(tabname){
     for(tablink of tablinks){
        tablink.classList.remove("active_link");
     }
     for(tabcontent of tabcontents){
        tabcontent.classList.remove("active_tab");

     }
     event.currentTarget.classList.add("active_link");
     document.getElementById(tabname).classList.add("active_tab");
}

