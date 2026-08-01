window.DATA_QUIZ = {
    id: 'quiz',
    title: '4. Revisão de Conhecimentos',
    icon: 'fa-solid fa-list-check',
    guidingQuestions: [
        {
            q: '1. O que justifica o uso de uma Tupla em vez de uma Lista em Ciências de Dados?',
            a: 'A Tupla garante a imutabilidade arquitetural. Ao capturarmos dados históricos (como uma cotação fechada de um dia anterior), esse dado não pode sofrer mutação acidental por algoritmos subsequentes. Tuplas operam como cofres blindados.'
        },
        {
            q: '2. Qual a grande vantagem arquitetural de usar uma Matriz como Lookup Table (Tabela de Pesquisa)?',
            a: 'Performace, limpeza e O(1) de complexidade. Em vez de empilhar dezenas de ramificações if/elif que tornam o código um espaguete frágil, as condições são traduzidas para matemática básica (índices), acessando a resposta instantaneamente cruzando linhas e colunas.'
        },
        {
            q: '3. Qual a diferença de papel entre Requests e Pandas na nossa pipeline?',
            a: 'A biblioteca requests atua como o engenheiro de extração de dados brutos (conversando com a internet e trazendo o JSON). Já o pandas é o analista financeiro: ele pega esses dados crus, organiza em um DataFrame estruturado, permite limpeza rápida e escreve relatórios corporativos.'
        },
        {
            q: '4. Como a extensão .ipynb altera a forma clássica de programar no VS Code?',
            a: 'Ao migrar de .py para .ipynb, mudamos de um fluxo sequencial estrito para um fluxo de blocos iterativos (células). Isso permite que análises estatísticas, execução de código isolado, plotagem de gráficos e documentação Markdown coexistam organicamente no mesmo relatório.'
        },
        {
            q: '5. Como a API "desacopla" o desenvolvimento de software?',
            a: 'Ela serve como uma ponte de comunicação agnóstica entre sistemas corporativos globais. Nosso código em Python, na máquina local, consegue consumir a inteligência e o banco de dados do Governo (via HTTPS) simplesmente pedindo o prato pronto ao garçom (a API) sem precisarmos manter banco de dados de cotações próprio.'
        }
    ],
    questions: [
        {
            q: "1. Sobre as Tuplas no Python, assinale a premissa verdadeira:",
            opts: ["São definidas por colchetes [] e podem ser modificadas com .append().", "São definidas por chaves {} e salvam dados em chave-valor.", "São definidas por parênteses () e seus valores não podem ser alterados após criados.", "São incompatíveis com a biblioteca Pandas."],
            correct: 2,
            exp: "Tuplas (ex: (data, valor)) aplicam a regra da imutabilidade, tornando-as extremamente rápidas e seguras para armazenar registros fixos."
        },
        {
            q: "2. Como chamamos uma matriz multidimensional dentro da estrutura padrão do Python?",
            opts: ["Um DataFrame nativo.", "Uma lista contendo outras listas dentro de seus índices.", "Um dicionário sem chaves.", "Uma tupla infinita."],
            correct: 1,
            exp: "Matrizes nativas em Python são listas aninhadas. Uma Matriz 2x2 é simplesmente uma lista pai contendo duas listas filhas."
        },
        {
            q: "3. Qual é o propósito de usar o Matplotlib em um ecossistema de Data Science?",
            opts: ["Consumir APIs governamentais.", "Converter arquivos XLSX em arquivos CSV.", "Renderizar componentes de visualização de dados, como gráficos de linhas, barras e dispersão.", "Instalar bibliotecas de terceiros via terminal."],
            correct: 2,
            exp: "Matplotlib é o motor visual primário, transformando vetores numéricos do Python em representações gráficas estáticas ou dinâmicas."
        },
        {
            q: "4. No paradigma das Lookup Tables que estudamos, o que substitui a necessidade do uso exaustivo de blocos 'if/elif/else'?",
            opts: ["O cruzamento de índices lógicos para consultar o resultado previamente posicionado dentro de uma Matriz.", "A biblioteca nativa 'os'.", "Um loop while infinito interativo.", "Funções importadas do Jupyter."],
            correct: 0,
            exp: "A Lookup Table converte lógica condicional em acesso direto de memória O(1). Mapeamos a situação (variáveis) para os eixos (índices X e Y) e retiramos o resultado pronto da célula correspondente."
        },
        {
            q: "5. Para extrair os dados da internet, nós utilizamos 'requests.get(url_api)'. Em qual formato a API pública moderna devolveu esses dados financeiros para a nossa máquina?",
            opts: ["Em uma string HTML renderizada.", "Como um arquivo físico .xlsx oculto.", "Em uma estrutura JSON (JavaScript Object Notation), amplamente adotada globalmente.", "Como um arquivo de imagem binária (PNG)."],
            correct: 2,
            exp: "A esmagadora maioria das APIs REST (Representational State Transfer) adota o JSON como payload de entrega de dados estruturados."
        },
        {
            q: "6. No contexto da biblioteca Pandas, o que é um DataFrame?",
            opts: ["Um componente gráfico para desenhar janelas de desktop.", "Uma estrutura de dados tabular e bidimensional em memória (semelhante ao funcionamento interno de uma aba de Excel).", "O instalador de dependências oficiais do Python.", "Um comando para exportar imagens do Matplotlib."],
            correct: 1,
            exp: "O DataFrame é o coração analítico do Pandas, permitindo filtragens estatísticas sofisticadas, junções e exportações sob tabelas alinhadas de alta performance."
        },
        {
            q: "7. Por qual motivo tivemos que instalar a biblioteca externa 'openpyxl'?",
            opts: ["Porque o Python nativamente não consegue calcular juros.", "Para hackear a API do Banco Central.", "Porque o Pandas utiliza o openpyxl como motor (engine) nos bastidores para gerar, ler e formatar os relatórios em formato .xlsx originais da Microsoft.", "Para gerar botões web interativos."],
            correct: 2,
            exp: "Arquivos .xlsx não são texto puro. Eles são arquivos complexos e zipados. O Pandas delega a engenharia dessa tradução física para o openpyxl."
        },
        {
            q: "8. O que significa o acrônimo JSON e por que ele é tão rápido para integração entre sistemas?",
            opts: ["Java Secure Operation Network - Pois usa criptografia pesada.", "JavaScript Object Notation - Pois é um formato texto ultra-leve, padronizado com chaves e chaves de valor fáceis de converter para dicionários Python.", "Jupyter Sequence Output Node - Pois é restrito ao Jupyter Notebook.", "Joint Server Optimization Net - Feito para servidores Cloud."],
            correct: 1,
            exp: "Originário da web, o formato é independente de linguagem e cruza a internet com peso mínimo, tornando-se o padrão ouro de intercâmbio de dados RESTful."
        },
        {
            q: "9. Por que escolhemos o Google Colab para o Deploy do nosso código analítico em vez do empacotador PyInstaller da Aula 1?",
            opts: ["Porque o PyInstaller é ilegal em ambiente corporativo.", "O Colab permite que qualquer diretoria abra o Notebook remotamente e execute o código Data Science interativo no próprio navegador de forma gratuita, sem instaladores complexos.", "O PyInstaller não roda em Windows.", "Porque o Colab é a única forma de salvar arquivos em formato .txt."],
            correct: 1,
            exp: "Ciência de Dados precisa ser compartilhada rapidamente para diretores que não possuem ambientes de TI locais. A nuvem elimina barreiras operacionais."
        },
        {
            q: "10. Qual a função do método .append() quando estamos trabalhando com listas dinâmicas em Python?",
            opts: ["Apagar o último item da lista.", "Ordenar a lista numericamente.", "Anexar cirurgicamente um novo elemento no final exato da fila estrutural de uma Lista existente.", "Garantir a imutabilidade da Tupla interior."],
            correct: 2,
            exp: "É a ferramenta de adição mais comum. Como as Listas são dinâmicas, o append() estende o bloco contíguo de memória para encaixar o novo registro na cauda da coleção."
        }
    ]
};