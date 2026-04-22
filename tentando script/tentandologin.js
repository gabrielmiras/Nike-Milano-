const prism = document.getElementById("prism");

function movePrism(face) {
    const rotations = {
        'front':  'translateZ(-200px) rotateY(0deg)',
        'right':  'translateZ(-200px) rotateY(-90deg)',
        'back':   'translateZ(-200px) rotateY(-180deg)',
        'left':   'translateZ(-200px) rotateY(90deg)',
        'bottom': 'translateZ(-200px) rotateX(90deg)'
    };
    
    prism.style.transform = rotations[face];
}

function showSuccess() {

    const activeBtn = document.querySelector('.btn-nike');
    activeBtn.innerText = "WAITING...";
    
    setTimeout(() => {
        movePrism('bottom');
        activeBtn.innerText = "SIGN IN"; 
    }, 800);
}