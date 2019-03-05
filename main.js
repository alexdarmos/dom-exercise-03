(() => {
    

    document.addEventListener(`click`, (event) => {
        // console.log(`Event: ${event}`)
        let circle = document.getElementById(`circle`);

        let quipList = [`Wow.`, `so Internet meme`, `such neutral`, `how to article?`, `so score`, `what r you doing`];

        let colorList = [`Pink`, `Blue`, `Purple`, `Green`, `Orange`];

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

        console.log(rotateGenerator());
        
        let positionX = (event.clientX);
        let positionY = (event.clientY);
        console.log(`X:${positionX} Y:${positionY}`);
       
        
        circle.style.top = `${positionY}px`;
        circle.style.left = `${positionX}px`;
        
        quip.innerText = quipGenerator();
        quip.style.left = `${positionX - 40}px`;
        quip.style.top = `${positionY - 50}px`;
        quip.style.color = colorGenerator();
        quip.style.transform = rotateGenerator();
        
        // if (rotateGenerator() === "rotate(320deg") {
        //     quip.style.left = `${positionX - 205}px`;
        // } else {
        //     quip.style.left = `${positionX}px`;
        // }

        

       


    });

})();