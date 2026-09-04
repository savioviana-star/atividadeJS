function calcular_horas_minutos_segundos() {
    let numero = 3665;
    let horas = Math.floor(numero / 3600);
    let minutos = Math.floor((numero % 3600) / 60);
    let segundos = numero % 60;

    console.log(`Horas: ${horas}`);
    console.log(`Minutos: ${minutos}`);
    console.log(`Segundos: ${segundos}`);
}

calcular_horas_minutos_segundos();

function celsius_para_fahrenheit_e_kelvin() {
    let celsius = 25;
    let fahrenheit = (celsius * 9/5) + 32;
    let kelvin = celsius + 273.15;

    console.log(`Celsius: ${celsius}`);
    console.log(`Fahrenheit: ${fahrenheit}`);
    console.log(`Kelvin: ${kelvin}`);
}

celsius_para_fahrenheit_e_kelvin();

function desconto_progressivo() {
    const prompt = require('prompt-sync')();
    let preco = parseFloat(prompt("Digite o preço do produto: "));
    let quantidade = parseInt(prompt("Digite a quantidade comprada: "));
    let subtotal = preco * quantidade;
    let desconto;
    if (subtotal > 300) {
        desconto = subtotal * 0.10;
    } else if (subtotal > 100) {
        desconto = subtotal * 0.05;
    } else {
        desconto = 0;
    }
    let total = subtotal - desconto;
    console.log(`Subtotal: R$ ${subtotal.toFixed(2)}`);
    console.log(`Desconto: R$ ${desconto.toFixed(2)}`);
    console.log(`Total: R$ ${total.toFixed(2)}`);
}

desconto_progressivo();

function pode_votar_servico_militar() {
    let dataNascimento = new Date('2000-01-01');
    let dataAtual = new Date();
    let idade = dataAtual.getFullYear() - dataNascimento.getFullYear();
    let mes = dataAtual.getMonth() - dataNascimento.getMonth();
    if (mes < 0 || (mes === 0 && dataAtual.getDate() < dataNascimento.getDate())) {
        idade--;
    }
    if (idade >= 16) {
        console.log("Você pode votar.");
    } else if (idade >= 18) {
        console.log("Você pode se alistar no serviço militar.");
    } else {
        console.log("Você não pode votar nem se alistar no serviço militar.");
    }
}

pode_votar_servico_militar();

function calculadora_simples() {
    const prompt = require('prompt-sync')();
    let operacao = prompt("Escolha a operação: +, -, *, /");
    let num1 = parseFloat(prompt("Digite o primeiro número:"));
    let num2 = parseFloat(prompt("Digite o segundo número:"));
    let resultado;
    switch (operacao) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            resultado = num1 / num2;
            break;
        default:
            console.log("Operação inválida.");
            return;
    }
    console.log(`Resultado: ${resultado}`);
}

calculadora_simples();

function IMC() {
    const prompt = require('prompt-sync')();
    let peso = parseFloat(prompt("Digite seu peso em kg:"));
    let altura = parseFloat(prompt("Digite sua altura em metros:"));
    let imc = peso / (altura * altura);
    console.log(`Seu IMC é: ${imc.toFixed(2)}`);
    if (imc < 18.5) {
        console.log("Você está abaixo do peso.");
    } else if (imc >= 18.5 && imc <= 24.9) {
        console.log("Você está no peso ideal.");
    } else {
        console.log("Você está acima do peso.");
    }
}

IMC();

function pedra_papel_tesoura() {
    const prompt = require('prompt-sync')();
    let opcoes = ["pedra", "papel", "tesoura"];
    let escolhaUsuario = prompt("Escolha pedra, papel ou tesoura:").toLowerCase();
    let escolhaComputador = opcoes[Math.floor(Math.random() * 3)];
    console.log(`Você escolheu: ${escolhaUsuario}`);
    console.log(`O computador escolheu: ${escolhaComputador}`);
    if (escolhaUsuario === escolhaComputador) {
        console.log("Empate!");
    } else if (
        (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
        (escolhaUsuario === "papel" && escolhaComputador === "pedra") ||
        (escolhaUsuario === "tesoura" && escolhaComputador === "papel")
    ) {
        console.log("Voce ganhou!");
    } else {
        console.log("O computador ganhou!");
    }
}

pedra_papel_tesoura();

function palindromo() {
    const prompt = require('prompt-sync')();
    let palavra = prompt("Digite uma palavra:").toLowerCase();
    let palavraInvertida = palavra.split('').reverse().join('');
    if (palavra === palavraInvertida) {
        console.log(`${palavra} é um palíndromo.`);
    } else {
        console.log(`${palavra} não é um palíndromo.`);
    }
}

palindromo();

function media_turma() {
    const prompt = require('prompt-sync')();
    let turma1 = [];
    let numAlunos1 = parseInt(prompt("Digite o número de alunos da turma 1:"));
    for (let i = 0; i < numAlunos1; i++) {
        let nota = parseFloat(prompt(`Digite a nota do aluno ${i + 1} da turma 1:`));
        turma1.push(nota);
    }
    let soma1 = turma1.reduce((a, b) => a + b, 0);
    let media1 = soma1 / numAlunos1;
    console.log(`A média da turma 1 é: ${media1.toFixed(2)}`);
    let maiorNota1 = Math.max(...turma1);
    let menorNota1 = Math.min(...turma1);
    console.log(`A maior nota da turma 1 é: ${maiorNota1}`);
    console.log(`A menor nota da turma 1 é: ${menorNota1}`);
}

media_turma();

function fibonacci() {
    const prompt = require('prompt-sync')();
    let n = parseInt(prompt("Digite o número de termos da sequência de Fibonacci:"));
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    console.log(`Sequência de Fibonacci de ${n} termos: ${fib.join(', ')}`);
}

fibonacci();

function validar_senha() {
    const prompt = require('prompt-sync')();
    let senha = prompt("Digite uma senha (mínimo 8 caracteres, pelo menos uma letra maiúscula, uma letra minúscula e um número):");
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (regex.test(senha)) {
        console.log("Senha válida.");
    } else {
        console.log("Senha inválida.");
    }
}

validar_senha();

function calcular_valor_total_estoque() {
    const prompt = require('prompt-sync')();
    let produtos = [];
    let numProdutos = parseInt(prompt("Digite o número de produtos:"));
    for (let i = 0; i < numProdutos; i++) {
        let nome = prompt(`Digite o nome do produto ${i + 1}:`);
        let preco = parseFloat(prompt(`Digite o preço do produto ${i + 1}:`));
        let quantidade = parseInt(prompt(`Digite a quantidade do produto ${i + 1}:`));
        produtos.push({ nome, preco, quantidade });
    }
    let valorTotal = produtos.reduce((total, produto) => total + produto.preco * produto.quantidade, 0);
    console.log(`O valor total do estoque é: ${valorTotal}`);

    let produtoMaisCaro = produtos.reduce((maisCaro, produto) => {
        return (produto.preco > maisCaro.preco) ? produto : maisCaro;
    }, produtos[0]);
    console.log(`O produto mais caro é: ${produtoMaisCaro.nome} com preço de ${produtoMaisCaro.preco}`);

    let valorMinimoInformado = parseInt(prompt("Digite o valor mínimo informado:"));
    let listarprodutos = produtos.filter(produto => produto.quantidade < valorMinimoInformado);
    console.log("Produtos com quantidade abaixo do valor mínimo informado:");
    listarprodutos.forEach(produto => {
        console.log(`- ${produto.nome}: ${produto.quantidade}`);
    });
}

calcular_valor_total_estoque();

function agenda_telefonica() {
    function adicionar_contato(agenda, nome, telefone) {
        agenda[nome] = telefone;
    }

    function exibir_contatos(agenda) {
        console.log("Contatos na agenda:");
        for (let nome in agenda) {
            console.log(`${nome}: ${agenda[nome]}`);
        }
    }
    function buscar_contato(agenda, nome) {
        if (agenda[nome]) {
            console.log(`Telefone de ${nome}: ${agenda[nome]}`);
        } else {
            console.log(`${nome} não encontrado na agenda.`);
        }
    }
    function remover_contato(agenda, nome) {
        if (agenda[nome]) {
            delete agenda[nome];
            console.log(`${nome} removido da agenda.`);
        } else {
            console.log(`${nome} não encontrado na agenda.`);
        }
    }
    let agenda = {};
    const prompt = require('prompt-sync')();
    let opcao;
    do {
        console.log("\nAgenda Telefônica");
        console.log("1. Adicionar contato");
        console.log("2. Exibir contatos");
        console.log("3. Buscar contato");
        console.log("4. Remover contato");
        console.log("5. Sair");
        opcao = prompt("Escolha uma opção: ");
        switch (opcao) {
            case "1":
                let nome = prompt("Digite o nome do contato: ");
                let telefone = prompt("Digite o telefone do contato: ");
                adicionar_contato(agenda, nome, telefone);
                break;
            case "2":
                exibir_contatos(agenda);
                break;
            case "3":
                let nomeBusca = prompt("Digite o nome do contato para buscar: ");
                buscar_contato(agenda, nomeBusca);
                break;
            case "4":
                let nomeRemover = prompt("Digite o nome do contato para remover: ");
                remover_contato(agenda, nomeRemover);
                break;
            case "5":
                console.log("Saindo...");
                break;
            default:
                console.log("Opção inválida.");
        }
    } while (opcao !== "5");
}

agenda_telefonica();

function remover_numeros_duplicados_array() {
    const prompt = require('prompt-sync')();
    let numeros = [];
    let quantidade = parseInt(prompt("Digite a quantidade de números:"));
    for (let i = 0; i < quantidade; i++) {
        let numero = parseInt(prompt(`Digite o número ${i + 1}:`));
        numeros.push(numero);
    }
    let numerosUnicos = [...new Set(numeros)];
    console.log(`Números unicos: ${numerosUnicos.join(', ')}`);
}

remover_numeros_duplicados_array();

function conta_bancaria_POO() {
    class ContaBancaria {
        constructor(titular, saldo) {
            this.titular = titular;
            this.saldo = saldo;
        }
        depositar(valor) {
            this.saldo += valor;
            console.log(`Depósito de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
        }
        sacar(valor) {
            if (valor <= this.saldo) {
                this.saldo -= valor;
                console.log(`Saque de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
            } else {
                console.log("Saldo insuficiente.");
            }
        }
    }
    const prompt = require('prompt-sync')();
    let titular = prompt("Digite o titular da conta: ");
    let saldo = parseFloat(prompt("Digite o saldo inicial: "));
    let conta = new ContaBancaria(titular, saldo);
    let opcao;
    do {
        console.log("\nConta Bancária");
        console.log("1. Depositar");
        console.log("2. Sacar");
        console.log("3. Sair");
        opcao = prompt("Escolha uma opção: ");
        switch (opcao) {
            case "1":
                let valorDeposito = parseFloat(prompt("Digite o valor do depósito: "));
                conta.depositar(valorDeposito);
                break;
            case "2":
                let valorSaque = parseFloat(prompt("Digite o valor do saque: "));
                conta.sacar(valorSaque);
                break;
            case "3":
                console.log("Saindo...");
                break;
            default:
                console.log("Opção inválida.");
        }
    } while (opcao !== "3");
}

conta_bancaria_POO();

function calcular_area_retangulo_POO() {
    class Retangulo {
        constructor(largura, altura) {
            this.largura = largura;
            this.altura = altura;
        }
        calcularArea() {
            return this.largura * this.altura;
        }
        calcularPerimetro() {
            return 2 * (this.largura + this.altura);
        }
    }
    const prompt = require('prompt-sync')();
    let largura = parseFloat(prompt("Digite a largura do retângulo: "));
    let altura = parseFloat(prompt("Digite a altura do retângulo: "));
    let retangulo = new Retangulo(largura, altura);
    console.log(`Área do retângulo: ${retangulo.calcularArea()}`);
    console.log(`Perímetro do retângulo: ${retangulo.calcularPerimetro()}`);
}

calcular_area_retangulo_POO();

function agenda_telefonica_POO() {
    class Contato {
        constructor(nome, telefone) {
            this.nome = nome;
            this.telefone = telefone;
        }
    }
    class Agenda {
        constructor() {
            this.contatos = [];
        }
        adicionarContato(contato) {
            this.contatos.push(contato);
        }
        exibirContatos() {
            console.log("Contatos na agenda:");
            this.contatos.forEach(contato => {
                console.log(`${contato.nome}: ${contato.telefone}`);
            });
        }
        buscarContato(nome) {
            let contato = this.contatos.find(contato => contato.nome === nome);
            if (contato) {
                console.log(`Telefone de ${nome}: ${contato.telefone}`);
            } else {
                console.log(`${nome} não encontrado na agenda.`);
            }
        }
        removerContato(nome) {
            let index = this.contatos.findIndex(contato => contato.nome === nome);
            if (index !== -1) {
                this.contatos.splice(index, 1);
                console.log(`${nome} removido da agenda.`);
            } else {
                console.log(`${nome} não encontrado na agenda.`);
            }
        }
    }
    const prompt = require('prompt-sync')();
    let agenda = new Agenda();
    let opcao;
    do {
        console.log("\nAgenda Telefônica");
        console.log("1. Adicionar contato");
        console.log("2. Exibir contatos");
        console.log("3. Buscar contato");
        console.log("4. Remover contato");
        console.log("5. Sair");
        opcao = prompt("Escolha uma opção: ");
        switch (opcao) {
            case "1":
                let nome = prompt("Digite o nome do contato: ");
                let telefone = prompt("Digite o telefone do contato: ");
                let contato = new Contato(nome, telefone);
                agenda.adicionarContato(contato);
                break;
            case "2":
                agenda.exibirContatos();
                break;
            case "3":
                let nomeBusca = prompt("Digite o nome do contato para buscar: ");
                agenda.buscarContato(nomeBusca);
                break;
            case "4":
                let nomeRemover = prompt("Digite o nome do contato para remover: ");
                agenda.removerContato(nomeRemover);
                break;
            case "5":
                console.log("Saindo...");
                break;
            default:
                console.log("Opção inválida.");
        }
    } while (opcao !== "5");
}

agenda_telefonica_POO();
