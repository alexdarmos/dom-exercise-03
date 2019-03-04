(() => {
    

    window.addEventListener(`mouseup`, (event) => {
        let circle = document.getElementById(`circle`);

        let quipList = [`Wow.`, `so Internet meme`, `such neutral`, `how to article?`];

        let colorList = [`Pink`, `Blue`, `Purple`, `Green`];

        let rotateList = [`rotate(30deg)`, `rotate(320deg)`];

        let quip = document.getElementById(`quips`);

        const quipGenerator = () =>    {
            let number = Math.floor(Math.random() * quipList.length);
            return quipList[number];
        }

        const colorGenerator = () =>    {
            let number = Math.floor(Math.random() * colorList.length);
            return colorList[number];
        }

        const rotateGenerator = () =>    {
            let number = Math.floor(Math.random() * rotateList.length);
            return rotateList[number];
        }

        
        
        let positionX = (event.clientX);
        let positionY = (event.clientY);
        console.log(`X:${positionX} Y:${positionY}`);
       
        quip.innerText = quipGenerator();
        circle.style.top = `${positionY + 25}px`;
        circle.style.left = `${positionX}px`;
        
        quip.style.top = `${positionY}px`;
        quip.style.left = `${positionX}px`;
        quip.style.color = colorGenerator();
        quip.style.transform = rotateGenerator();

       


    });

})();