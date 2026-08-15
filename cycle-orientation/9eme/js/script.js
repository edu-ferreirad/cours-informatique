document.addEventListener('DOMContentLoaded', () => {
    const draggables = document.querySelectorAll('.draggable-item');
    const dropZones = document.querySelectorAll('.drop-zone');
    const sourceContainer = document.getElementById('images-container');

    draggables.forEach(item => {
        item.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', e.target.dataset.file);
            e.dataTransfer.setData('ext', e.target.dataset.ext);
        });
    });

    dropZones.forEach(zone => {
        zone.addEventListener('dragover', (e) => {
            e.preventDefault();
            zone.classList.add('drag-over');
        });

        zone.addEventListener('dragleave', () => {
            zone.classList.remove('drag-over');
        });

        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            zone.classList.remove('drag-over');
            
            const fileName = e.dataTransfer.getData('text/plain');
            const draggedElement = document.querySelector(`[data-file="${fileName}"]`);

            if (draggedElement) {
                const folderContent = zone.querySelector('.folder-content');
                folderContent.appendChild(draggedElement);
            }
        });
    });

    // Permettre de ramener l'élément dans la zone source si besoin
    sourceContainer.addEventListener('dragover', (e) => e.preventDefault());
    sourceContainer.addEventListener('drop', (e) => {
        e.preventDefault();
        const fileName = e.dataTransfer.getData('text/plain');
        const draggedElement = document.querySelector(`[data-file="${fileName}"]`);
        if (draggedElement) {
            sourceContainer.appendChild(draggedElement);
        }
    });

    // Bouton de validation de l'exercice
    document.getElementById('check-btn').addEventListener('click', () => {
        let allPlaced = true;
        let correct = true;

        if (sourceContainer.querySelectorAll('.draggable-item').length > 0) {
            allPlaced = false;
        }

        dropZones.forEach(zone => {
            const targetFolder = zone.dataset.folder;
            const items = zone.querySelectorAll('.draggable-item');
            
            items.forEach(item => {
                if (item.dataset.ext !== targetFolder) {
                    correct = false;
                }
            });
        });

        if (!allPlaced) {
            alert('Il reste des fichiers à classer dans la zone de départ !');
        } else if (correct) {
            alert('Félicitations ! Tous les fichiers sont triés dans les bons dossiers de format.');
        } else {
            alert('Attention, certains fichiers ne sont pas dans le bon dossier d’extension.');
        }
    });
});
