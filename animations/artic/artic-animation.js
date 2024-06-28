const ARTIC = {
    selector: 'snow-container',
    create: function(imageFolder, background, cover) {
        app.utils.setBackground(background);
        app.utils.setImages(imageFolder);
        app.utils.setSideCover(cover);
        
        var newDiv = document.createElement("div");
        newDiv.classList.add(this.selector);
        document.body.appendChild(newDiv);

        var container = document.querySelector(`.${this.selector}`);
        var numberOfSnowFlakes = 35;

        for (let i = 0; i < numberOfSnowFlakes; i++) {
            const snowflake = document.createElement('div');
            snowflake.classList.add('snowflake');
            snowflake.classList.add('snowflake-1');
            snowflake.style.top = `${Math.random() * (-300)}px`;
            snowflake.style.left = `${Math.random() * window.innerWidth}px`;
            let rand = Math.random();
            snowflake.style.animationDuration = `${rand > 0.2 ? 3*rand : 1 }s`;
            container.appendChild(snowflake);
        }

        for (let i = 0; i < numberOfSnowFlakes; i++) {
            const snowflake = document.createElement('div');
            snowflake.classList.add('snowflake');
            snowflake.classList.add('snowflake-2');
            snowflake.style.top = `${Math.random() * (-300)}px`;
            snowflake.style.left = `${Math.random() * window.innerWidth}px`;
            let rand = Math.random();
            snowflake.style.animationDuration = `${rand > 0.2 ? 3*rand : 1}s`;
            container.appendChild(snowflake);
        }

        for (let i = 0; i < numberOfSnowFlakes; i++) {
            const snowflake = document.createElement('div');
            snowflake.classList.add('snowflake');
            snowflake.classList.add('snowflake-3');
            snowflake.style.top = `${Math.random() * (-300)}px`;
            snowflake.style.left = `${Math.random() * window.innerWidth}px`;
            let rand = Math.random();
            snowflake.style.animationDuration = `${rand > 0.2 ? 3*rand : 1}s`;
            container.appendChild(snowflake);
        }
    },
    destroy: function() {
        var container = document.querySelector(`.${this.selector}`);
        container.remove();
    }

}