# Isuues faced during this project

1. I have a global variable winScore and I would like to update it every time the user wins a game however why is the winScore not being updated?
    -
    - This is what is happening in the code : the user clicks the button, it fires the event, the event contains playRound(), inside it the if statement runs and if won adds 1 to the winScore, the result gets return to the eventListener and stays there. Since the updated value stays in there I will need to update the winScore value inside it by doing this (winResult.textContent = winScore)
    - REMEMBER THAT THE CODE ENDS IN THE EVENT LISTENER AND DOES NOT GOES BEYOND IT.


2. Removing the event listener from a single element.
    - 
    - First you have to create a seperate function for the addEventListener.
    - Invoke the function inside the eventListener.
    - Then write a seperate code to stop the event.
    - E.g
    - `scissor.addEventListener('click', eventOfScissor)` <-- Invoking
    - `function eventOfScissor() ` <-- Seperate function
    - `{`//block of codes`}`
    - `scissor.removeEventListener('click', eventOfScissor)` <-- seperate code.

3. Practise more on `forEach`
    -
    - You understand it but practise next level steps such as using for loop to create removeEventListener.

4. Creating a child element inside a parent
    - 
    - Create the parent element `const div = document.createElement('div');`
    - Create the child element `const cuteCat = document.createElement('img')`
    - Add the child to the parent `div.appendChild(cuteCat)`
    - Invoke the parent to the DOM `document.body.appendChild(div)`

5. Adding images to JS
    - 
    - Create the element `const cuteCat = document.createElement('img')`
    - Add the image `cuteCat.src = './Img/cat-cute.gif`
    - You will see, you will need to manually enter the location of the image.
    - Then append it into the html. ` document.body.appendchild(cutecat)`

6. In a scoring system make sure you add the `0` data type so that it understands that the number is to be added when using incrementation `winScore++`. Else it will be read as undefined and while trying to add it will return a NAN.

