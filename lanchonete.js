/*
    Um sistema para uma lanchonete que pretendo implementar com HTML5+CSS3 futuramente.

    by Guilherme Zalla

*/
(function() {
    const tabelaDePreços = (código = 0, quantidade = 0) => {
        switch (código) {
            case 100:
                return `Cachorro quente(${quantidade}) - Total: R$ ${(3.00 * quantidade).toFixed(2).toString().replace('.', ',')}`;
                break;
            case 200:
                return `Hambúrguer Simples(${quantidade}) - Total: R$ ${(4.00 * quantidade).toFixed(2).toString().replace('.', ',')}`;
                break;
            case 300:
                return `Cheeseburguer(${quantidade}) - Total: R$ ${(5.50 * quantidade).toFixed(2).toString().replace('.', ',')}`;
                break;
            case 400:
                return `Bauru(${quantidade}) - Total: R$ ${(7.50 * quantidade).toFixed(2).toString().replace('.', ',')}`;
                break;
            case 500:
                return `Refrigerante(${quantidade}) - Total: R$ ${(3.50 * quantidade).toFixed(2).toString().replace('.', ',')}`;
                break;
            case 600:
                return `Suco(${quantidade}) - Total R$ ${(2.80 * quantidade).toFixed(2).toString().replace('.', ',')}`;
                break;
            default:
                return `Não vendemos esse produto.`
        }
    }
    let i = true;
    while (i != false) {
        let resp = window.prompt("Deseja realizar um pedido na lanchonete? Digite 'S' para sim e 'N' para não");
        if (resp.toLowerCase() === 's') {
            let pedido = parseInt(window.prompt("Informe qual pedido deseja pedir"));
            let quant = parseInt(window.prompt("Informe a quantidade que deseja"));
            alert(tabelaDePreços(pedido, quant));
            i = true;
        } else if (resp.toLowerCase() === 'n') {
            i = false;
            alert("Obrigado por comprar conosco, volte sempre!");
        }
    }
})();