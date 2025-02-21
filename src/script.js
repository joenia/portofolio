const projectData = {
    website: {
        title: "Website Eco Friendly",
        description: "HTML, CSS, Javascript",
        image: "img/project_web.png"
    },
    uiux: {
        title: "Mobile App Design",
        description: "Figma, Adobe XD",
        image: "img/project_uiux.png"
    },
    modelling: {
        title: "3D Model Showcase",
        description: "Blender, Maya",
        image: "img/project_3d.png"
    }
};

document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.tab-button').forEach(btn => {
            btn.classList.remove('text-[#00BFFF]', 'border-b-2', 'border-[#00BFFF]');
            btn.classList.add('text-gray-400');
        });
        this.classList.add('text-[#00BFFF]', 'border-b-2', 'border-[#00BFFF]');
        
        const category = this.getAttribute('data-category');
        document.getElementById('project-content').innerHTML = `
            <h3 class="text-xl font-semibold">${projectData[category].title}</h3>
            <p class="text-gray-300">${projectData[category].description}</p>
            <div class="mt-6 flex justify-center">
                <img src="${projectData[category].image}" alt="${projectData[category].title}" class="w-96 rounded-lg shadow-lg">
            </div>
        `;
    });
});