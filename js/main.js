function hide_demo(){
	document.getElementById("demo").style.display="none";
	document.getElementById("hide_demo").style.display="none";
	document.getElementById("show_demo").style.display="inline";
}
function show_demo(){
	document.getElementById("demo").style.display="inline";
	document.getElementById("hide_demo").style.display="inline";
	document.getElementById("show_demo").style.display="none";	
}
function hide_live(){
	document.getElementById("live").style.display="none";
	document.getElementById("hide_live").style.display="none";
	document.getElementById("show_live").style.display="inline";
}
function show_live(){
	document.getElementById("live").style.display="inline";
	document.getElementById("hide_live").style.display="inline";
	document.getElementById("show_live").style.display="none";	
}
function hide_g_sites(){
	document.getElementById("g_sites").style.display="none";
	document.getElementById("hide_g_sites").style.display="none";
	document.getElementById("show_g_sites").style.display="inline";
}
function show_g_sites(){
	document.getElementById("g_sites").style.display="inline";
	document.getElementById("hide_g_sites").style.display="inline";
	document.getElementById("show_g_sites").style.display="none";	
}
function gdp_vid(){
	document.getElementById("gdp_video").style.display="inline";
}
function gdp_v_hide(){
	document.getElementById("gdp_video").style.display="none";
}
function bc_vid(){
	document.getElementById("bc_video").style.display="inline";
}
function bc_v_hide(){
	document.getElementById("bc_video").style.display="none";
}
function fv_vid(){
	document.getElementById("fruit_videos").style.display="inline";
}
function fv_hide(){
	document.getElementById("fruit_videos").style.display="none";
};
function htm_vid(){
	document.getElementById("htm_videos").style.display="inline";
}
function htm_hide(){
	document.getElementById("htm_videos").style.display="none";
};
function ccm_vid(){
	document.getElementById("ccm_videos").style.display="inline";
}
function ccm_hide(){
	document.getElementById("ccm_videos").style.display="none";
}
function ht_vid(){
	document.getElementById("ht_videos").style.display="inline";
}
function ht_hide(){
	document.getElementById("ht_videos").style.display="none";
};

function projectsPages(productId){
	var xmlhttp = new XMLHttpRequest();
	var url = "js/projects.txt";
	xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var projectsOutput = JSON.parse(xmlhttp.responseText);
        projectsFunction(projectsOutput, productId);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();
}

function projectsFunction(projectsOutput, productId){

	document.getElementById('main_content').style.display="inline";
	document.getElementById("project_title").innerHTML = "<h3 class='modal-title'>" + projectsOutput[productId].projectTitle + "</h3>";
	document.getElementById("project_image").innerHTML = "<a href=" + '"' + projectsOutput[productId].projectLinks + '"' + '>' + "<img src=" + '"' + projectsOutput[productId].projectImagesrc + '"' + "alt=" + '"' + projectsOutput[productId].projectImagesalt + '"' + "class='img-responsive'></a>";
	document.getElementById("project_description").innerHTML = "<p>" + projectsOutput[productId].projectDescription + "</p>";
	document.getElementById("project_links").innerHTML = "<button class='btn btn-primary'><a href=" + '"' + projectsOutput[productId].projectLinks + '"' + 'style="color:white; text-decoration: none;">' + "Link to the site" + "</a></button>";
	document.getElementById("project_videos").innerHTML = '<iframe width="425" height="315" src=' + '"' + projectsOutput[productId].projectVideos + '"' + 'frameborder="0" allowfullscreen></iframe>';
	document.getElementById("project_code").innerHTML = '<p style="padding-top:0.5%;"><strong>Code Utilized:' + projectsOutput[productId].projectCode + '</strong></p>';
}
function project_hide(){
	document.getElementById("main_content").style.display="none";
}
