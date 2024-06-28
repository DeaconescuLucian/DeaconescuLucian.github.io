window.onload = () => { 
    app.utils.hideSideWhenPassingThrough();
    effectChain();
}

async function effectChain() {
    while(true)
    {
        for (const ef of effects) {
            await ef.play();
        }
        app.settings.effectDuration += app.settings.effectDurationIncrement;
    }
}

