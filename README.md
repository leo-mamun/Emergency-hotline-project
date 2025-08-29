1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

   -- getElementById

    1. Find one element using its id.  
    2. Only works with id.  
    3. Returns single element 

        -- getElementsByClassName 

      1.Find all elements with same class name.  
      2.Returns a HTMLCollection kind of array .  

               --querySelector  

  1. Finds first element   
  2.  Can use id, class.

          -- querySelectorAll  
  1. Finds all elements that match  
  2. Returns NodeList 



 2. How to create and insert a new element into DOM?

//create a new element ,

 const li = document.createElement("li");

//insert a new element

li.textContent = "New item";

// OR add inner HTML

li.innerHTML = "<div>New item</div>";






 3. What is Event Bubbling and how it works?

 When event happens on child element, it goes up to parent, then grandparent and so on.  




4. What is Event Delegation and why useful?
 
 Instead of adding event on many child elements, we put event on parent and check which child was clicked. 

// Useful because:
   1. Less memory 
  2. No repetitive event listener code for every child



 5. Difference between preventDefault() and stopPropagation()?

// preventDefault()  

  1.  Stops page reload when  use <form> field

// stopPropagation()  
  1. Stops event from going to parent elements.  
