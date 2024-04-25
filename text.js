
document.getElementById("formulaire").addEventListener("submit", function(envent){
    envent.preventDefault();
    // Récupérer les valeurs des champs
    let nom = document.getElementById('nom').value;
    let email = document.getElementById('email').value;
    let objet = document.getElementById('objet').value;
    let message = document.getElementById('message').value;




    // Vérifier si tous les champs sont remplis
    if (nom === '' || email === '' || objet === '' || message === '') {
        // Afficher un message d'alerte si un champ est vide
        alert('Veuillez remplir l\'ensemble des champs.');
    } else {
        // Tous les champs sont remplis, afficher les valeurs dans la console
        console.log('Nom :',nom);
        console.log('email:',email);
        console.log('objet:',objet);
        console.log('message:',message);

    }
})
    
