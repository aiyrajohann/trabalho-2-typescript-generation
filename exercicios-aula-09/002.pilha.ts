import * as readline from 'node:readline';

// Classe Stack (Pilha)
class Stack<T> {
    private items: T[] = [];

    // Adiciona um elemento no topo da pilha
    push(element: T): void {
        this.items.push(element);
    }

    // Remove e retorna o elemento do topo da pilha
    pop(): T | undefined {
        return this.items.pop();
    }

    // Retorna o elemento do topo sem remover
    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    // Verifica se a pilha está vazia
    isEmpty(): boolean {
        return this.items.length === 0;
    }

    // Retorna o tamanho da pilha
    size(): number {
        return this.items.length;
    }

    // Lista todos os elementos da pilha (do topo para a base)
    listAll(): T[] {
        return [...this.items].reverse();
    }

    // Limpa a pilha
    clear(): void {
        this.items = [];
    }
}

// Configuração do readline para entrada do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pilha de livros
const pilhaLivros = new Stack<string>();

// Função para exibir o menu
function exibirMenu(): void {
    console.log('\n***************************************');
    console.log('       PILHA DE LIVROS');
    console.log('***************************************');
    console.log('1 - Adicionar Livro na Pilha');
    console.log('2 - Listar todos os Livros');
    console.log('3 - Retirar Livro da Pilha');
    console.log('0 - Sair');
    console.log('***************************************');
}

// Função para processar a opção escolhida
function processarOpcao(opcao: string): void {
    switch (opcao) {
        case '1':
            adicionarLivro();
            break;
        case '2':
            listarLivros();
            break;
        case '3':
            retirarLivro();
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

// Função para adicionar livro na pilha
function adicionarLivro(): void {
    rl.question('\nDigite o nome do Livro: ', (nome: string) => {
        if (nome.trim() === '') {
            console.log('\nNome inválido! O nome não pode estar vazio.');
        } else {
            pilhaLivros.push(nome.trim());
            console.log(`\nLivro "${nome}" adicionado à pilha!`);
        }
        mostrarMenu();
    });
}

// Função para listar todos os livros na pilha
function listarLivros(): void {
    console.log('\n***************************************');
    console.log('       LISTA DE LIVROS NA PILHA');
    console.log('***************************************');
    
    if (pilhaLivros.isEmpty()) {
        console.log('A pilha está vazia!');
    } else {
        const livros = pilhaLivros.listAll();
        console.log('Livros (do topo para a base):');
        livros.forEach((livro, index) => {
            console.log(`${index + 1}º - ${livro}`);
        });
        console.log(`\nTotal de livros na pilha: ${pilhaLivros.size()}`);
    }
    
    mostrarMenu();
}

// Função para retirar um livro da pilha
function retirarLivro(): void {
    console.log('\n***************************************');
    
    if (pilhaLivros.isEmpty()) {
        console.log('A pilha está vazia!');
    } else {
        const livroRetirado = pilhaLivros.pop();
        console.log(`Livro "${livroRetirado}" foi retirado da pilha!`);
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
console.log('\n*** BEM-VINDO AO SISTEMA DE PILHA DE LIVROS ***\n');
mostrarMenu();
