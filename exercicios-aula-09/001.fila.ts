import * as readline from 'node:readline';

// Classe Queue (Fila)
class Queue<T> {
    private items: T[] = [];

    // Adiciona um elemento no final da fila
    enqueue(element: T): void {
        this.items.push(element);
    }

    // Remove e retorna o primeiro elemento da fila
    dequeue(): T | undefined {
        return this.items.shift();
    }

    // Retorna o primeiro elemento sem remover
    peek(): T | undefined {
        return this.items[0];
    }

    // Verifica se a fila está vazia
    isEmpty(): boolean {
        return this.items.length === 0;
    }

    // Retorna o tamanho da fila
    size(): number {
        return this.items.length;
    }

    // Lista todos os elementos da fila
    listAll(): T[] {
        return this.items;
    }

    // Limpa a fila
    clear(): void {
        this.items = [];
    }
}

// Configuração do readline para entrada do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Fila de clientes do banco
const filaClientes = new Queue<string>();

// Função para exibir o menu
function exibirMenu(): void {
    console.log('\n***************************************');
    console.log('       FILA DO BANCO');
    console.log('***************************************');
    console.log('1 - Adicionar Cliente na Fila');
    console.log('2 - Listar todos os Clientes');
    console.log('3 - Chamar Cliente');
    console.log('0 - Sair');
    console.log('***************************************');
}

// Função para processar a opção escolhida
function processarOpcao(opcao: string): void {
    switch (opcao) {
        case '1':
            adicionarCliente();
            break;
        case '2':
            listarClientes();
            break;
        case '3':
            chamarCliente();
            break;
        case '0':
            console.log('\nPrograma Finalizado!');
            rl.close();
            break;
        default:
            console.log('\nOpção inválida! Tente novamente.');
            mostrarMenu();
            break;
    }
}

// Função para adicionar cliente na fila
function adicionarCliente(): void {
    rl.question('\nDigite o nome do Cliente: ', (nome: string) => {
        if (nome.trim() === '') {
            console.log('\nNome inválido! O nome não pode estar vazio.');
        } else {
            filaClientes.enqueue(nome.trim());
            console.log(`\nCliente ${nome} adicionado à fila!`);
        }
        mostrarMenu();
    });
}

// Função para listar todos os clientes na fila
function listarClientes(): void {
    console.log('\n***************************************');
    console.log('       LISTA DE CLIENTES NA FILA');
    console.log('***************************************');
    
    if (filaClientes.isEmpty()) {
        console.log('A fila está vazia!');
    } else {
        const clientes = filaClientes.listAll();
        clientes.forEach((cliente, index) => {
            console.log(`${index + 1}º - ${cliente}`);
        });
        console.log(`\nTotal de clientes na fila: ${filaClientes.size()}`);
    }
    
    mostrarMenu();
}

// Função para chamar (retirar) um cliente da fila
function chamarCliente(): void {
    console.log('\n***************************************');
    
    if (filaClientes.isEmpty()) {
        console.log('A fila está vazia!');
    } else {
        const clienteChamado = filaClientes.dequeue();
        console.log(`Cliente ${clienteChamado} foi chamado!`);
    }
    
    mostrarMenu();
}

// Função para mostrar o menu e aguardar escolha
function mostrarMenu(): void {
    exibirMenu();
    rl.question('\nEntre com a opção desejada: ', (opcao: string) => {
        processarOpcao(opcao.trim());
    });
}

// Inicia o programa
console.log('\n*** BEM-VINDO AO SISTEMA DE FILA DO BANCO ***\n');
mostrarMenu();
