window.addEventListener('load', function() {
    var alternativas = document.querySelectorAll('button.option')

    alternativas.forEach(a => {
        a.addEventListener('click', function() {

            // restaurar a cor original dos botões
            // alternativas.forEach(x => {
            //     x.style.backgroundColor = 'cadetblue'
            // })

            var alternativaCorreta = a.dataset.correto;
            console.log(alternativaCorreta);

            if (alternativaCorreta == 'true') {
                // alert('Acertou!!!')
                a.style.backgroundColor = 'green'
            } else {
                // alert('Errou!!!')
                a.style.backgroundColor = 'red'
            }

            alternativas.forEach(x => {
                x.setAttribute('disabled', true)
            })

            document.querySelector('a.next').classList.remove('disabled')

        })

    });
})



// Contabilizar ao final do quiz quantas acertou e quantas errou