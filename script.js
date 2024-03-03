function showMessage() {
    var message = document.getElementById("secretMessage");
    message.style.display = "block";
	// Hide the note
    var note = document.querySelector('.note');
    note.style.display = 'none';
    
    // Create and animate hearts
    createHearts();
}
function showcode() {
	 var message = document.getElementById("secretcode");
    message.style.display = "block";
	
	
	
	 // Create and animate hearts
    createHearts();
}

function createHearts() {
    var hearts = 10; // Number of hearts to create
    var container = document.createElement("div");
    container.className = "heart-container";
    document.body.appendChild(container);

    for (var i = 0; i < hearts; i++) {
        var heart = document.createElement("div");
        heart.className = "heart";
        container.appendChild(heart);

        var x = Math.floor(Math.random() * window.innerWidth);
        var y = Math.floor(Math.random() * window.innerHeight);

        heart.style.left = x + "px";
        heart.style.top = y + "px";

        animateHeart(heart);
    }

    setTimeout(function() {
        document.body.removeChild(container);
    }, 2000);
}

function animateHeart(heart) {
    var duration = Math.random() * 2 + 1; // Random duration between 1 and 3 seconds
    var size = Math.random() * 30 + 10; // Random size between 10 and 40 pixels

    heart.style.width = size + "px";
    heart.style.height = size + "px";
    heart.style.opacity = 1;

    var keyframes = [
        { transform: "translateY(0) scale(1)", opacity: 1 },
        { transform: "translateY(-100px) scale(1.3)", opacity: 0 }
    ];

    var timing = {
        duration: duration * 1000,
        iterations: 1,
        fill: "forwards"
    };

    heart.animate(keyframes, timing);
}
