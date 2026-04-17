const prism = document.getElementById("prism");

function movePrism(face) {
    const rotations = {
        'front':  'translateZ(-190px) rotateY(0deg)',
        'right':  'translateZ(-190px) rotateY(-90deg)',
        'back':   'translateZ(-190px) rotateY(-180deg)',
        'left':   'translateZ(-190px) rotateY(90deg)',
        'bottom': 'translateZ(-190px) rotateX(90deg)'
    };
    
    prism.style.transform = rotations[face];
}

function showSuccess() {
    // Simula um delay de processamento
    setTimeout(() => {
        movePrism('bottom');
    }, 500);
}