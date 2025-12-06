async function fetchData() {
    try{
    const response = await fetch('game.json');
    const data = await response.json();
    return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }           
}

//DOM Elements
const itemsContainer = document.getElementById('items-container');
const healthyFoodContainer = document.getElementById('healthy-container');
const trickyFoodContainer = document.getElementById('tricky-container');
const unhealthyFoodContainer = document.getElementById('unhealthy-container');

document.getElementById('play').addEventListener('click', async() => {
    try {
        const data = await fetchData();
        const healthyData = data.healthyFood;
        const trickyData = data.trickyFood;
        const unhealthyData = data.unhealthyFood;
        // use the spread operator to combine the arrays
        const allData = [...healthyData, ...trickyData, ...unhealthyData];
        // shuffle the combined array so that the items are in random order each time
        allData.sort(() => Math.random() - 0.5);
        // Clear previous items every time play is clicked
        itemsContainer.innerHTML = ''; 
        allData.map(createEle).forEach(itemEle=> {
            itemsContainer.appendChild(itemEle);
        });       
    } catch (error) {
        console.error('Error in play button handler:', error);
    }
});

// Create draggable item elements
function createEle(itemElement){
    const eachItem = document.createElement('div');
    eachItem.className = 'itemElement';
    eachItem.textContent = itemElement.name;
    eachItem.dataset.id = String(itemElement.id);
    eachItem.dataset.category = itemElement.category;
    // Set element’s draggable property to “true”
    eachItem.setAttribute('draggable', 'true');
    eachItem.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.dataset.id);
        e.dataTransfer.effectAllowed = 'move';
        eachItem.classList.add('dragging');
        setTimeout (() => eachItem.style.visibility = 'hidden', 0);
    });
    eachItem.addEventListener('dragend', (e) => {
        eachItem.classList.remove('dragging');
        eachItem.style.visibility = 'visible';
    });
    return eachItem;
}


// Drop zone functionality
[healthyFoodContainer, trickyFoodContainer, unhealthyFoodContainer].forEach(container => {
    container.addEventListener('dragover', (e) => {
        // Prevent default behavior 
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    });
    container.addEventListener('drop', (e) => {
        e.preventDefault();
        const id = e.dataTransfer.getData('text/plain');
        const draggedItem = document.querySelector(`[data-id='${id}']`);
        const category = draggedItem.dataset.category;
        if (
            (container.id === 'healthy-container' && category === 'healthy') ||
            (container.id === 'tricky-container' && category === 'tricky') ||
            (container.id === 'unhealthy-container' && category === 'junk')) {
            container.appendChild(draggedItem);
        } else {
            // Shake effect
            draggedItem.classList.add('shake');
            // Remove the class after animation ends
            draggedItem.addEventListener('animationend', () => {
                draggedItem.classList.remove('shake');
            }, { once: true });
        }
    });
}); 




// Success notification
function showSuccessMessage() {
    window.location.href = "/game/success.html";
}

// Check for completion
let completionCheckInterval = setInterval(() => {
    const totalItems = document.querySelectorAll('.itemElement').length;
    const sortedItems = healthyFoodContainer.querySelectorAll('.itemElement').length +
                        trickyFoodContainer.querySelectorAll('.itemElement').length +
                        unhealthyFoodContainer.querySelectorAll('.itemElement').length;
    if (totalItems > 0 && totalItems === sortedItems) {
        showSuccessMessage();
        clearInterval(completionCheckInterval);
    }
});
