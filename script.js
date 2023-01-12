// ? ls = local storage


//writes to local storage
function writels(key){
 
  let value = ""
  value = $(`#t-${key}`).val()
  localStorage.setItem(key, value)

}

window.writels = writels


//writes from local storage
function readls(key){
  let value = ""
  value = localStorage.getItem(key)
  if(value == null){
    return""
  } else {
    return value
  }
}

window.readls = readls


//fills timeblocks with unique id and also its coresponding text and "past" "present "future" value.
function createTimeBlock(index){

  let timeClass = ""
  let timeHours = new Date().getHours()

  if (index == timeHours) {
    timeClass = 'present'
  } else if (index > timeHours) {
    timeClass = 'future'
  } else {
    timeClass = 'past'
  }

  let text = readls(index)

  return `<div id="${index}" class="row time-block ${timeClass}">
  <div class="col-2 col-md-1 hour text-center py-3">${index}:00</div>
  <textarea class="col-8 col-md-10 description" rows="3" id="t-${index}">${text}</textarea>
  <button onclick="window.writels(${index})" class="btn saveBtn col-2 col-md-1" aria-label="save">
    <i class="fas fa-save" aria-hidden="true"></i>
  </button>
</div>`
}

$(document).ready(function() { 

  //generates time bases on system time, and creates timeblocks.
  $('#currentDay').text(new Date().toLocaleString())
  
  let timeBlocks = []

  for(let i = 0; i < 24; i++){
    timeBlocks.push(createTimeBlock(i))
  }

  $('#timeblock-Parent').html(timeBlocks.join("")) 


});




