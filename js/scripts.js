// 1: Set the text of the <h1> element
const myH1 = document.getElementsByTagName("h1")
myH1[0].textContent = "Bucket List"


// 2: Set the color of the <h1> to a different color

myH1[0].style.color = 'red'

// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag
const desc = document.getElementsByClassName('desc')
desc[0].textContent = 'This is my Buket List    '

// 4: Set the class of the <ul> to 'list'

const ulCLass = document.querySelector('ul')
ulCLass.setAttribute('class','List')


// 5: Create a new list item and add it to the <ul>
    const item = document.createElement('li')
    item.innerHTML = '<input >Surfing'
    ulClass.appendchild(item);
    // const node = document.createElement("LI");         
    // const textnode = document.createTextNode("surfing"); 
    // node.appendChild(textnode);                           
    // myUl.appendChild(node);                               


// 6: Change all <input> elements from text fields to checkboxes



// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>


// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button
