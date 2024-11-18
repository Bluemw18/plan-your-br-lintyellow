document.addEventListener('DOMContentLoaded', function() {
    // Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Save form data
    const formElements = [
        'business-why',
        'mission-statement',
        'personal-why',
        'style-inspiration',
        'fonts',
        'design-assets'
    ];

    formElements.forEach(id => {
        const element = document.getElementById(id);
        
        // Load saved data
        const savedContent = localStorage.getItem(id);
        if (savedContent) {
            element.value = savedContent;
        }

        // Save on change
        element.addEventListener('input', function() {
            localStorage.setItem(id, this.value);
        });
    });

    // Color picker functionality
    const colorCircles = document.querySelectorAll('.color-circle');
    colorCircles.forEach((circle, index) => {
        const savedColor = localStorage.getItem(`color-${index}`);
        if (savedColor) {
            circle.style.backgroundColor = savedColor;
        }

        circle.addEventListener('click', function() {
            const input = document.createElement('input');
            input.type = 'color';
            input.value = this.style.backgroundColor || '#ffffff';
            
            input.addEventListener('input', (e) => {
                this.style.backgroundColor = e.target.value;
                localStorage.setItem(`color-${index}`, e.target.value);
            });
            
            input.click();
        });
    });
});