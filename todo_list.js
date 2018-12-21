var $ = function (id) { return document.getElementById(id); }

var taskList = [];

//Adding an element

var add_element = function (){	
	if($('new_task').value==""||$('new_task').value==null){
		alert("No task provided")
	}
	else{
		taskList.unshift($('new_task').value); // adding element to array
		$('new_task').value=''; // Making the text box blank
		disp(); // displaying the array elements
	}
	$("new_task").focus();
}

var disp = function (){
	var str='';
	for (i=0;i<taskList.length;i++) { 
		str += taskList[i] + "\n";  // adding an element to variable
	} 
		$('task_list').innerHTML=str; // Display the elements of the array
		$("show_next_task").disabled=false;
	}

//Showing next task

var show_task = function (){
	var firstElement = taskList.pop(); //dropping the last element
	$('next_task').value=firstElement; // Displaing the task to do in the textbox
	disp(); // displaying the array elements
	showLastTask(); // verifying if the task will be the last
	$("new_task").focus();
}
	
var showLastTask = function (){
	if(taskList[0]==null){
		$("show_next_task").disabled=true;
		alert("This is the last task to do!")
    }
    else{
		// Do nothing
    }
}

var removeTask = function () {
	$('next_task').value = "";
}

var backToList = function () {
	taskList.unshift($('next_task').value);
	disp();
}

window.onload = function () {
    $("new_task").focus();
    $("add_task").onclick = add_element;
	$("show_next_task").onclick = show_task;
	$("back_list").onclick = backToList;
	$("remove").onclick = removeTask;
}

