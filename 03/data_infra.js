window.DATA_INFRA = {
    id: 'infra',
    title: '3. Deploy',
    icon: 'fa-brands fa-google',
    content: [
        {
            type: 'card',
            title: '<i class="fa-solid fa-cloud"></i> A Nuvem do Cientista de Dados: Google Colab',
            html: `
            <p>Ao trabalhar com relatórios analíticos, a diretoria frequentemente quer interagir com os dados, atualizar o gráfico de hoje e exportar a planilha, mesmo sem ter o Python ou o VS Code instalados na máquina deles. Para "empacotar" esse ecossistema, utilizaremos o poder de nuvem do <strong>Google Colaboratory</strong>.</p>
            <div class="callout" style="border-left-color: #2563eb; background: #eff6ff;">
                <h4 style="color: #1d4ed8;">O Efeito Badge (Selo Dinâmico)</h4>
                <p>Nossa meta é gerar um botão público. Quando a diretoria clicar nele no LinkedIn ou no repositório da empresa, um supercomputador do Google vai ligar, baixar o seu código <code>.ipynb</code> do GitHub e abrir o Jupyter Notebook direto no navegador deles, de graça e pronto para executar!</p>
            </div>
            `
        },
        {
            type: 'card',
            title: '<i class="fa-solid fa-code-merge"></i> Tutorial: O Deploy em 3 Passos',
            html: `
            <h4 style="color: var(--text-title);"><span class="badge" style="margin-bottom:0.5rem">Passo 1</span> Upload do Artefato</h4>
            <p>Suba o seu arquivo <code>analise_cambio.ipynb</code> para um repositório público no seu GitHub.</p>

            <h4 style="margin-top: 2rem; color: var(--text-title);"><span class="badge" style="margin-bottom:0.5rem">Passo 2</span> Engenharia de URL</h4>
            <p>Pegue a URL padrão do seu arquivo no GitHub. Ela terá esse formato:<br>
            <code>https://github.com/SeuUsuario/SeuRepo/blob/main/analise_cambio.ipynb</code></p>
            <p>Substitua o trecho inicial <code>https://github.com/</code> pelo prefixo de orquestração do Colab <code>https://colab.research.google.com/github/</code>.</p>
            <p><strong>A URL Mágica ficará assim:</strong><br>
            <code style="color:var(--secondary)">https://colab.research.google.com/github/SeuUsuario/SeuRepo/blob/main/analise_cambio.ipynb</code></p>

            <h4 style="margin-top: 2rem; color: var(--text-title);"><span class="badge" style="margin-bottom:0.5rem">Passo 3</span> Markdown Badge (O Botão de Ouro)</h4>
            <p>Adicione o seguinte código no arquivo <code>README.md</code> do seu GitHub para criar o botão oficial azul de execução:</p>
            <pre><code>[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](A_SUA_URL_MAGICA_AQUI)</code></pre>
            <p>Pronto! Sua solução de Data Science foi empacotada na nuvem e está distribuída para o mundo globalizado.</p>
            `
        },
        {
            type: 'card',
            title: '<i class="fa-brands fa-markdown"></i> Construindo o README.md',
            html: `
            <p>Um repositório profissional no GitHub precisa de uma boa documentação. O arquivo <code>README.md</code> é o cartão de visitas do seu projeto.</p>
            <p>Veja o prompt que utilizamos para a IA gerar a nossa documentação e o código final (já com o botão mágico do Google Colab integrado). Use o botão de copiar e adapte para o seu repositório!</p>
            
            <div style="margin-top: 2rem; margin-bottom: 1.5rem;">
                <div style="font-size: 0.85rem; font-weight: 700; color: var(--secondary); margin-bottom: 0.5rem;"><i class="fa-solid fa-robot"></i> PROMPT ENVIADO PARA A IA</div>
                <div style="border-left: 4px solid var(--secondary); background: #eff6ff; padding: 1.25rem; border-radius: 0 8px 8px 0; font-style: italic; color: #1e293b;">
                    "Atue como um Desenvolvedor Sênior. Crie o código de um arquivo README.md para um projeto chamado 'Radar Cambial'. O projeto é um script em Python (Jupyter Notebook) que extrai dados de uma API, aplica matrizes de decisão e exporta um relatório em Excel. Inclua uma breve descrição, as tecnologias utilizadas e, no topo, adicione o markdown badge do Google Colab com o link para rodar o projeto."
                </div>
            </div>

            <div>
                <div style="font-size: 0.85rem; font-weight: 700; color: var(--primary); margin-bottom: 0.5rem;"><i class="fa-brands fa-markdown"></i> CÓDIGO FINAL (README.md)</div>
                <pre style="white-space: pre-wrap; word-break: break-word;"><code># 📊 Radar Cambial - TechSolutions

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/SeuUsuario/SeuRepo/blob/main/analise_cambio.ipynb)

Um robô de Ciência de Dados construído em Python para monitorar a cotação histórica do Dólar e apoiar a diretoria em decisões estratégicas.

## 🚀 Funcionalidades
- **Extração de Dados:** Consumo de API pública (AwesomeAPI).
- **Análise Inteligente:** Uso de Matrizes Multidimensionais (Lookup Tables) no lugar de estruturas condicionais complexas.
- **Data Viz:** Geração de gráficos de linha para acompanhamento de tendências usando Matplotlib.
- **Exportação Executiva:** Criação automática de planilhas \`.xlsx\` formatadas via Pandas e OpenPyXL.

## 🛠️ Tecnologias Utilizadas
- \`Python 3\`
- \`Jupyter Notebook\`
- \`Pandas\` & \`OpenPyXL\`
- \`Matplotlib\` & \`Requests\`

## ▶️ Como Executar
A maneira mais fácil de rodar e interagir com este projeto é clicando no botão **Open in Colab** no topo desta página. O Google Colaboratory criará um ambiente virtual temporário diretamente no seu navegador, executando o Jupyter Notebook sem necessidade de configurações locais!</code></pre>
            </div>
            `
        }
    ]
};