javascript:(function () {
    setInterval(() => {
        const icon = document.getElementsByClassName("claimable-bonus__icon")[0];

        if (icon === undefined) return; 
        
        const button = icon.parentElement.parentElement;
        button.click();
    }, 10000);
})();
