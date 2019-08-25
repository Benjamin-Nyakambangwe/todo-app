var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//Form Submit Event
form.addEventListener('submit', addItem);
//Delete Event
itemList.addEventListener('click', removeItem);
//Filter Event
filter.addEventListener('keyup', filterItem);

//Add Items
function addItem(e) {
  e.preventDefault();

  //Get input value
  var newItem = document.getElementById('item').value;

  //Create new LI element
  var li = document.createElement('li');

  //Add class
  li.className = 'list-group-item';

  //add textnode with input value
  li.appendChild(document.createTextNode(newItem));

  //Create delete button Element
  var deleteBtn = document.createElement('button');

  //Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  //Append Text TextNode
  deleteBtn.appendChild(document.createTextNode('X'));

  //Append button to li
  li.appendChild(deleteBtn);

  //Append li to list
  itemList.appendChild(li)

}

//Remove Item
function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are you sure?')) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

//Filter Items
function filterItem(e) {
  //Convert to LOwercase
  var text = e.target.value.toLowerCase();
  //GEt LIs
  var items = itemList.getElementsByTagName('li');
  Array.from(items).forEach(function(item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block';
    }else {
      item.style.display = 'none';
    }
  });
}
