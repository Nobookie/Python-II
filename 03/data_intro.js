window.AULA_METADATA = {
    badge: "Aula 3: Ciência de Dados Aplicada",
    title: "Analytics, Estruturas & APIs",
    subtitle: "• Tuplas, Matrizes (Lookup Tables) e Consumo de APIs.<br>• Data Science com Jupyter, Matplotlib, Pandas e Excel."
};

const SVG_FLUXO_AULA3 = `
<svg width="100%" height="300" viewBox="0 0 850 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="850" height="300" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2"/>
    
    <!-- Extração API -->
    <rect x="50" y="110" width="140" height="80" rx="10" fill="#ffffff" stroke="#2563eb" stroke-width="3"/>
    <text x="80" y="145" fill="#0f172a" font-family="Inter" font-weight="700" font-size="14">Extrair (API)</text>
    <text x="80" y="165" fill="#64748b" font-family="Inter" font-size="12">JSON Cambial</text>
    <path d="M190 150 H240" stroke="#ea580c" stroke-width="4" stroke-linecap="round"/>
    
    <!-- Transformação (Tuplas/Matriz) -->
    <rect x="240" y="110" width="160" height="80" rx="10" fill="#ffffff" stroke="#8b5cf6" stroke-width="3"/>
    <text x="260" y="145" fill="#0f172a" font-family="Inter" font-weight="700" font-size="14">Transformação</text>
    <text x="260" y="165" fill="#64748b" font-family="Inter" font-size="12">Matriz / Lookup Table</text>
    <path d="M400 150 H450" stroke="#ea580c" stroke-width="4" stroke-linecap="round"/>
    
    <!-- Visualização (Gráfico) -->
    <rect x="450" y="110" width="140" height="80" rx="10" fill="#ffffff" stroke="#ec4899" stroke-width="3"/>
    <text x="475" y="145" fill="#0f172a" font-family="Inter" font-weight="700" font-size="14">Data Viz</text>
    <text x="475" y="165" fill="#64748b" font-family="Inter" font-size="12">Eixos Múltiplos</text>
    <path d="M590 150 H640" stroke="#ea580c" stroke-width="4" stroke-linecap="round"/>
    
    <!-- Exportação (XLSX) -->
    <path d="M640 110 H780 V190 H640 Z" fill="#ffffff" stroke="#16a34a" stroke-width="3"/>
    <text x="670" y="155" fill="#16a34a" font-family="Inter" font-weight="700" font-size="14">Exportar .XLSX</text>
</svg>
`;

window.DATA_INTRO = {
    id: "intro",
    title: "1. Introdução & Teoria",
    icon: "fa-solid fa-book-open",
    content: [
        {
            type: "card",
            title: "<i class='fa-solid fa-chart-line'></i> A Situação-Problema: O Radar Cambial",
            html: `
            <p>A diretoria de compras internacionais da <strong>TechSolutions</strong> precisa importar servidores mensais, mas o mercado cambial está volátil. Analisar o Dólar e o Euro manualmente todos os dias gera perda financeira.</p>
            <p><strong>O Desafio:</strong> Como Analista de Dados, você deve construir um robô que se conecte à internet, baixe a cotação histórica dos últimos 15 dias, cruze essas informações usando matrizes de decisão, plote um gráfico visual para a diretoria e exporte o relatório final auditável diretamente em Excel.</p>
            <div class="svg-wrapper">${SVG_FLUXO_AULA3}</div>
            `
        },
        {
            type: "card",
            title: "<i class='fa-solid fa-database'></i> Quadros Conceituais: Estruturas de Dados",
            html: `
            <div class="callout">
                <h4>1. Tuplas (Tuples)</h4>
                <p><strong>O que é:</strong> Uma coleção de dados <em>imutável</em> separada por parênteses. Ex: <code>coordenada = ("15-08-2026", 5.42)</code>.<br>
                <strong>Aplicação:</strong> Usamos Tuplas em Ciência de Dados para blindar registros que jamais devem ser alterados durante a execução do programa, como a cotação exata de um dia e hora específicos.</p>
            </div>
            
            <div class="callout">
                <h4>2. Listas e Matrizes Multidimensionais</h4>
                <p><strong>O que é:</strong> Listas (separadas por colchetes <code>[]</code>) são dinâmicas. Uma <em>Matriz</em> é simplesmente uma Lista contendo outras Listas dentro dela, formando eixos X e Y (linhas e colunas).<br>
                <strong>Aplicação Avançada (Lookup Tables):</strong> Em vez de criar um código confuso com 20 linhas de <code>if/elif/else</code> para decidir se o dólar está caro ou barato, usaremos uma Matriz como <em>Tabela de Pesquisa (Lookup Table)</em>. A lógica se torna puramente matemática: cruzamos o índice da volatilidade com o índice da tendência para obter a decisão instantaneamente (ex: <code>decisao = matriz_acao[0][1]</code>).</p>
            </div>
            `
        },
        {
            type: "card",
            title: "<i class='fa-solid fa-toolbox'></i> Quadros Conceituais: Ecossistema de Data Science",
            html: `
            <div class="callout" style="border-left-color: #8b5cf6; background: #f5f3ff;">
                <h4 style="color: #6d28d9;">3. Jupyter Notebook (.ipynb)</h4>
                <p>Diferente de um script clássico (.py) que roda tudo de uma vez no terminal, o Notebook divide o código em <strong>células interativas</strong>. O Cientista de Dados pode rodar um bloco, ver o gráfico ser desenhado logo abaixo dele e escrever suas análises em texto rico (Markdown) no mesmo documento.</p>
            </div>

            <div class="callout" style="border-left-color: #0ea5e9; background: #f0f9ff;">
                <h4 style="color: #0369a1;">4. APIs (Application Programming Interfaces)</h4>
                <p>É o "garçom" da internet. Nossa aplicação pedirá à API do Banco Central (via requisição HTTP) o histórico de moedas, e a API servirá esses dados prontos e organizados em formato JSON.</p>
            </div>

            <div class="callout" style="border-left-color: #10b981; background: #ecfdf5;">
                <h4 style="color: #047857;">5. O Arsenal de Bibliotecas</h4>
                <ul style="padding-left: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
                    <li><strong>Requests:</strong> A biblioteca que faz nosso Python "navegar" na internet e buscar os dados da API.</li>
                    <li><strong>Pandas:</strong> O motor de análise de dados. Ele transforma matrizes cruas em um <em>DataFrame</em> (uma super tabela em memória).</li>
                    <li><strong>Matplotlib:</strong> O motor gráfico capaz de renderizar eixos, linhas, barras e legendas com precisão estatística.</li>
                    <li><strong>OpenPyXL:</strong> O tradutor que permite ao Pandas escrever relatórios físicos nativos na extensão <code>.xlsx</code> (Excel).</li>
                </ul>
            </div>
            `
        }
    ]
};