function exe03() {
   let sexo = []
   let altura = []
   let idade = []
   let cor = []
   let cont = 0
   let maior = 0
   let cont1 = 0
   let cont2 = 0
   let cont3 = 0
   for(let i=0; i<4; i++){
        sexo =  prompt('Digite seu sexo M para masculino F para feminino').toUpperCase(),
        altura = Number(prompt('Digite a sua altura')),
        idade = Number(prompt('Digite a sua idade')),
        cor =  prompt('Digite a cor dos olhos A-AZUL, V-VERDE, C-CASTANHO').toUpperCase()
    if (cor == 'C'){
        if (altura > 1,60){
            cont = cont + 1
        }
    }
    if (idade > maior){
        maior = idade
    }
    if (sexo == 'F'){
        if (idade >= 20 && idade <=45){
            cont1 = cont1 + 1
        }
    }
    if (cor == 'V'){
        if (altura < 1,70){
            cont2 = cont2 + 1
        }
    }
    if(sexo == 'M'){
        cont3 = cont3 + 1
    }
   }
   let media = 100 / 4 * cont
   let porcentagem = 100 / 4 * cont3
   alert('Média de pessoas com olhos castanhos e altura superior de 1,60 em relação aos demais participantes: ' + media)
   alert('Maior idade entre os habitantes: ' + maior)
   alert('Quantidade de indivíduos do sexo Feminino com idade entre 20 e 45 anos: ' + cont1)
   alert('Quantidade de pessoas com olhos verdes e com altura superior a 1,70: ' + cont2)
   alert('Porcentagem de homens em relação a TODOS CANDIDATOS: ' + porcentagem)
}
function cadastraCliente(clientes){
    let objCliente = {
        numero: prompt('Número do cliente'), // código do cliente é incremental
        nome: prompt('Nome do cliente'),
        telefone: prompt('Telefone do cliente'),
        endereco: prompt('Endereço do cliente')
    }
    clientes.push(objCliente)
}
function exe6(){
    let opcao
    let clientes = []; let contas = [];
    do{
        opcao = Number(prompt(`Digite \n 1. Criar cliente \n 2. Criar conta \n 3. Listar contas \n 4. Listas clientes \n 5. Sair`))
        switch(opcao){
            case 1: cadastraCliente(clientes)
                    break
            case 2: let objConta = {
                        numero: contas.length,
                        nroCliente: Number(prompt('Informe número do cliente')),
                        saldo: Number(prompt('Saldo da conta'))
                    }
                    // verifica se o cliente existe
                    let achou = false
                    for(let i=0;i<clientes.length;i++){
                        if (objConta.nroCliente == clientes[i].numero){
                            contas.push(objConta)
                            achou = true // encontrou
                        }
                    }
                    if (!achou){ // não encontrou o cliente
                        let objCliente = {
                            numero: objConta.nroCliente, // código do cliente é incremental
                            nome: prompt('Nome do cliente'),
                            telefone: prompt('Telefone do cliente'),
                            endereco: prompt('Endereço do cliente')
                        }
                        clientes.push(objCliente)
                        contas.push(objConta)
                    }
                    break
                case 3: let tabelaContas = ""
                        for(let i=0;i<contas.length;i++){
                            tabelaContas = tabelaContas + `<tr><td> ${contas[i].numero} </td> <td> ${contas[i].nroCliente} </td> <td> ${contas[i].saldo} </td> </tr>` 
                        }
                        document.getElementById("tabelaContas").innerHTML = tabelaContas

                        break
                case 4: let tabelaClientes = ""
                        for(let i=0;i<clientes.length;i++){
                            tabelaClientes = tabelaClientes + `<tr><td> ${clientes[i].numero} </td> <td> ${clientes[i].nome} </td> <td> ${clientes[i].telefone} </td> <td> ${clientes[i].endereco} </td></tr>` 
                        }
                        document.getElementById("tabelaClientes").innerHTML = tabelaClientes
                        break
            }
    }
    while (opcao != 5)
}
function exe02(){
    // entrada de dados
    let vetor = []
    for(let i=0;i<4;i++){
        // cria o objeto contendo dados do usuário
        let obj = {
            salario: Number(prompt('Informe salário')),
            idade: Number(prompt('Informe idade')),
            filhos: Number(prompt('Informe número de filhos')),
            sexo: prompt('Informe M ou F').toUpperCase()
        }
        // insere o objeto no vetor
        vetor.push(obj) // objeto inserido
    }
    let somaSalario = 0 
    let somaFilhos = 0
    let maiorSalario = vetor[0].salario
    let contaF = 0; let contaFS = 0
    for(let i=0;i<4;i++){
        // soma dos salários
        somaSalario = somaSalario + vetor[i].salario       
        somaFilhos = somaFilhos + vetor[i].filhos       
        if (vetor[i].salario > maiorSalario){
            maiorSalario = vetor[i].salario
        }
        if (vetor[i].sexo == 'F'){
            contaF++ // conta as mulheres
            if (vetor[i].salario > 1000){ // salário > 1000
                contaFS++
            }
        }
    }
    alert(`A média de salário é ${somaSalario/vetor.length}`)
    alert(`A média de filhos é ${somaFilhos/vetor.length}`)
    alert(`Maior salário ${maiorSalario}`)
    alert(`% de mulheres salário > 1000 ${contaFS/contaF*100}`)
}
function exe07() {
    let opcao
    let clientes = []; let contas = [];
    do{
        opcao = Number(prompt(`Digite \n 1. Criar cliente \n 2. Registrar dados do cliente \n 3. Sair. \n 4. Excluir algum cliente`))
        switch(opcao){
            case 1: let objConta = {
                        numero: contas.length,
                        nroCliente: Number(prompt('Informe código do cliente')),
                        nome: Number(prompt('Nome do cliente'))
                    }
                    // verifica se o cliente existe
                    let achou = false
                    for(let i=0;i<clientes.length;i++){
                        if (objConta.nroCliente == clientes[i].numero){
                            // encontrou
                            contas.push(objConta)
                            achou = true
                            alert('Cliente já cadastrado')
                        }
                    }
                    if (!achou){ // não encontrou o cliente
                        let objCliente = {
                            numero: objConta.nroCliente, // código do cliente é incremental
                        }
                        clientes.push(objCliente)
                        contas.push(objConta)
                        alert('cliente cadastrado')
                    }
                    break
            case 2: let objConta2 = {
                        numero: contas.length,
                        nroCliente: Number(prompt('Informe código do cliente')),
                        numero: Number(prompt('Número da conta do cliente')),
                        valor: Number(prompt('Valor da compra do cliente'))
                    }
                    // verifica se o cliente existe
                    let achou2 = false
                    for(let i=0;i<clientes.length;i++){
                        if (objConta2.nroCliente == clientes[i].numero){
                            // encontrou
                            contas.push(objConta2)
                            achou2 = true
                            alert('Esse Cliente já está cadastrado no sistema !')
                        }
                    }
                    if (!achou2){ // não encontrou o cliente
                        let objCliente3 = {
                            numero: objConta2.nroCliente, // código do cliente é incremental
                        }
                        clientes.push(objCliente3)
                        contas.push(objConta2)
                        alert(' Cliente cadastrado com sucesso ! ')
                    }
                    break
            case 4: let objConta3 = {
                        numero: contas.length,
                        nroCliente: Number(prompt('Informe código do cliente que deseja excluir')),
                    }
                    // verifica se o cliente está no sistema
                    let achou3 = false
                    for(let i=0;i<clientes.length;i++){
                        if (objConta3.nroCliente == contas[i].numero){
                            // encontrou
                            contas.push(objConta3)
                            achou3 = true
                            alert('Não foi possível excluir o cliente porque ele está associado a uma compra')
                        }
                    }
                    if (!achou3){ // cliente não está associado a alguma compra
                            let valorr = indexOf(objConta3.nroCliente)
                            clientes.splice(valorr)
                            alert('Cliente excluido com sucesso ! ') 
                    }
                    break                                           
}
}
while (opcao != 3)
alert('Finalizando...')
}

