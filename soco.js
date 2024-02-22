
    let searchInput = document.getElementById("searchInput");
    let searchIcon = document.getElementById("searchIcon");
    let iconsearch = document.getElementById("iconsearch");
    let colleges = document.querySelectorAll(".student .college");
    let stu = document.getElementById("st");
    

    searchIcon.addEventListener("click", function() {
        if (searchInput.style.display === "block") {
            searchInput.style.display = "none";
            iconsearch.style.display = "none";
        } else {
            searchInput.style.display = "block";
            iconsearch.style.display = "block";
        }
    });

   
    document.addEventListener("DOMContentLoaded", function() {
        let studentLink = document.getElementById("st");
        let instructorLink = document.getElementById("ins");
    
        let studentDiv = document.querySelector(".student");
        let instructorDiv = document.querySelector(".instructor");
    
        let closeStudentButton = document.querySelector(".student span");
        let closeInstructorButton = document.querySelector(".instructor span");
    
        studentLink.addEventListener("click", function() {
            studentDiv.style.display = "flex";
            event.stopPropagation() ;
        });
    
        instructorLink.addEventListener("click", function() {
            instructorDiv.style.display = "flex";
            event.stopPropagation() ;
        });
    
        closeStudentButton.addEventListener("click", function() {
            studentDiv.style.display = "none";
            event.stopPropagation() ;
        });
    
        closeInstructorButton.addEventListener("click", function() {
            instructorDiv.style.display = "none";
            event.stopPropagation();
        });

        
    });
    