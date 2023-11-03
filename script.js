const nome = document.querySelector("#nome")
const sobreNome = document.querySelector("#sob")
const email = document.querySelector("#email")
const idade = document.querySelector("#idade")
const sibling= document.querySelector('#irma')

const arrayEstado= ['Solteiro(a)','Casado(a)','Viuvo(a)','Namorando']

arrayEstado.forEach((el,i)=>{
    const novaDiv = document.createElement('div')
    const novoLabel = document.createElement('label')
    const novoSelect = document.createElement('select')
    novoSelect.setAttribute('id','inscri')

    novoLabel.setAttribute('for','inscri')
    novoLabel.innerHTML = `Estado civil:`

    const novoOption = document.createElement('option')
    novoOption.setAttribute('value',i)
    novoOption.innerHTML = el

    novoSelect.appendChild(novoOption)
    novaDiv.appendChild(novoLabel)
    novaDiv.appendChild(novoSelect)
    novaDiv.insertBefore(sibling)
    // pai.appendChild(novaDiv)
    // vo.appendChild(pai)
    // vovo.appendChild(vo)
})
