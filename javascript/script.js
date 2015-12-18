/* 
NPSS Announcements JavaScript
By:Varun Khatri
Section C
Last Edited: 2015-11-26
-=+=-==+=-=+=-=+=-=+=-=+=-
*/ 

// Login Function without LocalStorage
var teacherNumber;

var password;

function login() {
	teacherNumber = document.getElementById("teacherNumber").value;
	password = document.getElementById("password").value;

	if (password === 'NPSS') {
		$('#login-name').html("Hello, " + teacherNumber + "!");
		$('#login').remove();
		$('#after-login-instructions').html("You can now add your own announcements by clicking on the manage button in the navagation bar.");
		return false;
	} else {
		alert("Wrong Password. Please try again!");
	}
};

// Save Announcement

var announcements = [];

var index = 0; 

function getData(){
    //Declare object
	announcements[index] = {
		title: $("#title-announcement").val(),
		description: $("#description-announcement").val(),
		tag: $("#tag-announcement").val(),
        gender: $("#gender-announcement").val(),
	}

	index ++;

	var post = JSON.stringify(announcements);
	localStorage.setItem("announcementPosts", post);
    
    $('#announcement-form').trigger("reset");
};

// Retrieve & Display Announcements

function displayData(){
	var temp = localStorage.getItem("announcementPosts");
    var post = JSON.parse(temp);
    //All Variables Used in the For Loop
    var index;
    var title = "";
    var description = "";
    var tag = "";
    var gender ="";
    var tagChoice; 
    var genderChoice;
    
    //Wipe what is in the box current
    
    $("#titlePost").empty();
    $("#descriptionPost").empty();
    $("#tagPost").empty();
    $("#genderPost").empty();
    
    // Displaying announcem    
    for	(index = 0; index < post.length; index++) {
        
        tagChoice = document.getElementById("tagChoice").value;
        genderChoice = document.getElementById("genderChoice").value;
        
        //Filtering with if statement
        if (post[index].tag === tagChoice && post[index].gender === genderChoice || post[index].tag === tagChoice && genderChoice === "All" || tagChoice === "All" && post[index].gender === genderChoice || tagChoice === "All" && genderChoice === "All"){
            title += post[index].title + "<br>";
            description += post[index].description + "<br>";
            tag += post[index].tag + "<br>";
            gender += post[index].gender + "<br>";
            
            $('#titlePost').html(title);
            $('#descriptionPost').html(description);
            $('#tagPost').html(tag);
            $('#genderPost').html(gender);
        }
    }
};