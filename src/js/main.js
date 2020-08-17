//1.
const cep = document.querySelector("#cep")


//3.
const showData = (result) => {
    for (const campo in result) {
        if (document.querySelector("#" + campo)) {
            document.("#" + campo).value = result[campo]
        }
    }
}

//2. Adicionar o evento
cep.addEventListener("blur", (e) => {       //blur - perder o foco
    let search = cep.value.replace("-", "") //na API passamos o CEP sem o "-"

    //cross origin/domain - consultar diferentes servidores
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    //`https://viacep.com.br/ws/${search}/json/` - template string `  ` crase
    fetch(`https://viacep.com.br/ws/${search}/json/`, options)

        //consigo tratar a resposta no fotmato json que também retorna uma promise
        .then(response => {
            response.json()
                .then(data => showData(data))
        })
        .catch(e => console.log('Ocorreu algum erro: ' + e, message))
})

