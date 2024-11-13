document.addEventListener("DOMContentLoaded", () => {
    const dreamForm = document.getElementById("dreamForm");
    const dreamList = document.getElementById("dreamList");
    const dreams = JSON.parse(localStorage.getItem("dreams")) || [];

    // Fonction pour afficher les rêves
    function displayDreams() {
        dreamList.innerHTML = "";
        dreams.forEach((dream, index) => {
            const dreamCard = document.createElement("div");
            dreamCard.classList.add("dream-card");

            dreamCard.innerHTML = `
                <h3>${dream.title}</h3>
                <p><strong>Description:</strong> ${dream.description}</p>
                <p><strong>Note:</strong> ${dream.rating}/10</p>
                <p><strong>Qualité:</strong> ${dream.quality}</p>
                <p><strong>Longueur:</strong> ${dream.length}</p>
                <p><strong>Type:</strong> ${dream.type}</p>
                <button onclick="deleteDream(${index})">Supprimer</button>
            `;

            dreamList.appendChild(dreamCard);
        });
    }

    // Fonction pour enregistrer un rêve
    dreamForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const newDream = {
            title: document.getElementById("dreamTitle").value,
            description: document.getElementById("dreamDescription").value,
            rating: document.getElementById("dreamRating").value,
            quality: document.getElementById("dreamQuality").value,
            length: document.getElementById("dreamLength").value,
            type: document.getElementById("dreamType").value,
        };

        dreams.push(newDream);
        localStorage.setItem("dreams", JSON.stringify(dreams));
        dreamForm.reset();
        displayDreams();
    });

    // Fonction pour supprimer un rêve
    window.deleteDream = function (index) {
        dreams.splice(index, 1);
        localStorage.setItem("dreams", JSON.stringify(dreams));
        displayDreams();
    };

    // Affiche les rêves au chargement de la page
    displayDreams();
});
