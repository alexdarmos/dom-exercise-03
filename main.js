(() => {
    

    window.addEventListener(`mouseup`, (event) => {
        let circle = document.getElementById(`circle`);
        console.log(event);
        let positionX = (event.clientX);
        let positionY = (event.clientY);
        console.log(`X:${positionX} Y:${positionY}`);
       
        circle.style.top = `${positionY}px`;
        circle.style.left = `${positionX}px`;
        // circle.style.top = "10px";

    });

})();