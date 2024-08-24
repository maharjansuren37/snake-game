// Storage Contoller
const StorageCtrl = (function() {

})();

// User controller
const UserCtrl = (function(){

})();

// UI controller
const UICtrl = (function () {
    const UISelectors = {
        gameCanvas: '#game-canvas',
        snake: '.snake'
    }

    const gameContent = {
        gameSpeed: 100,
        canvasBorderColor: 'black',
        canvasBackgroundColor: 'white',
        snakeColor: 'lightgreen',
        snakeBorderColor: 'darkgreen',
        foodColor: 'red',
        foodBorderColor: 'darkred'
    }

    const gameCanvas = document.querySelector(UISelectors.gameCanvas);

    if (gameCanvas.getContext) {
        ctx = gameCanvas.getContext("2d");
    }

    const drawCanvas = () => {
        ctx.fillStyle = gameContent.canvasBackgroundColor;
        ctx.strokestyle = gameContent.canvasBorderColor;

        ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
        ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);
    }

    const drawFood = () => {
        ctx.fillStyle = gameContent.foodColor;
        ctx.strokeStyle = gameContent.foodBorderColor;

        ctx.fillRect(10, 10, 10, 10);
        ctx.strokeRect(10, 10, 10, 10);
    }

    return {
        getSelectors: function() {
            return UISelectors;
        },
        drawCanvas: drawCanvas,

    }
})();

// App controller
const app = (function(UserCtrl, StorageCtrl, UICtrl) {
    // load event listeners
    const loadEventListeners = () => {
        window.addEventListener("load", UICtrl.drawCanvas);
    }

    // UICtrl.draw();

    // public methods
    return {
        init: function() {
            loadEventListeners();
        }
    }
})(UserCtrl, StorageCtrl, UICtrl);

app.init();






