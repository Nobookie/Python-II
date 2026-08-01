const codeStr = (lines) => lines.join('\n');

window.DATA_OFICINA = {
    id: 'oficina',
    title: '2. Mão na Massa',
    icon: 'fa-solid fa-laptop-code',
    content: [
        {
            type: 'card',
            title: '<i class="fa-solid fa-rocket"></i> Marco Zero: Setup do Ambiente de Dados no VS Code',
            html: `
            <p>Antes de codificar, precisamos equipar nosso editor para o paradigma de Ciência de Dados:</p>
            <ol style="margin-left: 1.5rem; margin-bottom: 1.5rem;">
                <li>Abra o <strong>VS Code</strong> e clique no ícone de Extensões (quadrados na barra lateral esquerda).</li>
                <li>Pesquise por <strong>Jupyter</strong> (fabricada pela Microsoft) e clique em Instalar.</li>
                <li>Crie um novo arquivo vazio chamado <code>analise_cambio.ipynb</code> e abra-o.</li>
                <li>No terminal do VS Code, instale o arsenal de bibliotecas executando o comando abaixo:</li>
            </ol>
            <pre><code>pip install requests pandas matplotlib openpyxl</code></pre>
            <p><strong>A Magia do Notebook:</strong> A partir de agora, você não programará em um bloco único. Você criará <em>Células Textuais (Markdown)</em> para documentar seu raciocínio e <em>Células de Código (Python)</em> para rodar o script!</p>
            `
        },
        {
            type: 'accordion',
            items: [
                {
                    title: 'PMV 1.0: Ingestão de Dados (API e Tuplas)',
                    markdown: codeStr([
                        '### Etapa 1: Ingestão e Blindagem de Dados',
                        '',
                        'Nesta célula, nosso "garçom" (biblioteca `requests`) vai à internet buscar o formato JSON contendo o histórico do Dólar dos últimos 15 dias.',
                        '',
                        '**Proteção Cloud:** Como rodaremos este script na nuvem, a AwesomeAPI pode bloquear nosso acesso achando que somos um ataque automatizado. Para evitar isso, instruímos a IA a enviar um "User-Agent", disfarçando nosso robô como um navegador Google Chrome comum.',
                        '',
                        '**🤖 PROMPT ENVIADO PARA A IA:**',
                        '> "Crie um script em Python que acesse a AwesomeAPI para buscar a cotação do dólar dos últimos 15 dias em formato JSON. Muito importante: passe um cabeçalho (header) de \'User-Agent\' simulando o navegador Google Chrome para evitar bloqueios de segurança (erro 403) no Google Colab. Percorra os dados, extraia a data convertendo o \'timestamp\' numérico para o formato Ano-Mês-Dia e extraia o valor. Guarde essas duas informações blindadas dentro de uma Tupla e adicione em uma lista chamada historico_dolar."'
                    ]),
                    python: codeStr([
                        '<span class="c-keyword">import</span> requests',
                        '<span class="c-keyword">from</span> datetime <span class="c-keyword">import</span> datetime',
                        '',
                        '<span class="c-comment"># URL da API pública AwesomeAPI</span>',
                        'url_api = <span class="c-string">"https://economia.awesomeapi.com.br/json/daily/USD-BRL/15"</span>',
                        '',
                        '<span class="c-comment"># Camuflagem: Finge ser o navegador Google Chrome para evitar bloqueio no Colab</span>',
                        'headers = {<span class="c-string">"User-Agent"</span>: <span class="c-string">"Mozilla/5.0 (Windows NT 10.0; Win64; x64)"</span>}',
                        '',
                        'resposta = requests.get(url_api, headers=headers)',
                        'dados_json = resposta.json()',
                        '',
                        'historico_dolar = []',
                        '',
                        '<span class="c-keyword">for</span> dia <span class="c-keyword">in</span> dados_json:',
                        '    <span class="c-comment"># Extraímos a data via \'timestamp\' universal.</span>',
                        '    ts_inteiro = <span class="c-func">int</span>(dia[<span class="c-string">"timestamp"</span>])',
                        '    data = datetime.fromtimestamp(ts_inteiro).strftime(<span class="c-string">"%Y-%m-%d"</span>)',
                        '    valor = <span class="c-func">float</span>(dia[<span class="c-string">"bid"</span>])',
                        '    ',
                        '    <span class="c-comment"># Empacotando em Tupla (imutável)</span>',
                        '    tupla_diaria = (data, valor)',
                        '    historico_dolar.append(tupla_diaria)',
                        '',
                        '<span class="c-func">print</span>(<span class="c-string">"Coleta concluída! Últimos 3 dias carregados:"</span>)',
                        '<span class="c-func">print</span>(historico_dolar[:3])'
                    ])
                },
                {
                    title: 'Versão 2.0: Matriz Multidimensional (Lookup Table)',
                    markdown: codeStr([
                        '### Etapa 2: Transformação de Dados via Lookup Table',
                        '',
                        'Para evitar um código espaguete cheio de `if/elif/else`, utilizamos uma Matriz (Listas dentro de Listas). Cruzando o Eixo Y (Volatilidade) com o Eixo X (Tendência), a aplicação acessa a decisão de compra de forma instantânea através dos índices!',
                        '',
                        '**🤖 PROMPT ENVIADO PARA A IA:**',
                        '> "Refatore a lógica de decisão de compra cambial baseada na variação do dia. Não utilize múltiplos blocos if/elif/else para a decisão final. Crie uma Matriz Multidimensional (Lookup Table) onde a Linha representa a Volatilidade (Baixa/Alta) e a Coluna representa a Tendência (Queda/Estável/Alta). Calcule os índices matematicamente e consulte a matriz diretamente para obter o status estratégico de cada dia."'
                    ]),
                    python: codeStr([
                        '<span class="c-comment"># Eixo Y (Linhas 0, 1) | Eixo X (Colunas 0, 1, 2)</span>',
                        'matriz_decisao = [',
                        '    [<span class="c-string">"✅ Comprar"</span>, <span class="c-string">"⏸️ Manter"</span>, <span class="c-string">"⏳ Aguardar Queda"</span>],       <span class="c-comment"># Vol. Baixa</span>',
                        '    [<span class="c-string">"⚠️ Risco: Comprar"</span>, <span class="c-string">"⚠️ Risco: Manter"</span>, <span class="c-string">"🛑 Paralisar"</span>] <span class="c-comment"># Vol. Alta</span>',
                        ']',
                        '',
                        'relatorio_analitico = []',
                        '',
                        '<span class="c-comment"># Lendo do dia mais antigo para o mais novo</span>',
                        '<span class="c-keyword">for</span> i <span class="c-keyword">in</span> <span class="c-func">range</span>(<span class="c-func">len</span>(historico_dolar)-2, -1, -1):',
                        '    hoje = historico_dolar[i][1]',
                        '    ontem = historico_dolar[i+1][1]',
                        '    variacao = hoje - ontem',
                        '    ',
                        '    <span class="c-comment"># Convertendo cenário em índices (Matemática pura)</span>',
                        '    tendencia_idx = 0 <span class="c-keyword">if</span> variacao < -0.02 <span class="c-keyword">else</span> (2 <span class="c-keyword">if</span> variacao > 0.02 <span class="c-keyword">else</span> 1)',
                        '    vol_idx = 1 <span class="c-keyword">if</span> <span class="c-func">abs</span>(variacao) > 0.06 <span class="c-keyword">else</span> 0',
                        '    ',
                        '    <span class="c-comment"># Consulta instantânea O(1)</span>',
                        '    decisao = matriz_decisao[vol_idx][tendencia_idx]',
                        '    ',
                        '    relatorio_analitico.append({',
                        '        <span class="c-string">"Data"</span>: historico_dolar[i][0],',
                        '        <span class="c-string">"Cotacao_USD"</span>: hoje,',
                        '        <span class="c-string">"Variacao_Dia"</span>: <span class="c-func">round</span>(variacao, 4),',
                        '        <span class="c-string">"Acao_Estrategica"</span>: decisao',
                        '    })',
                        '',
                        '<span class="c-func">print</span>(<span class="c-string">"Lógica de Matriz O(1) processada com sucesso!"</span>)'
                    ])
                },
                {
                    title: 'Versão 3.0: Data Viz (Gráfico com Matplotlib)',
                    markdown: codeStr([
                        '### Etapa 3: Visualização de Dados (Data Viz)',
                        '',
                        'Como estamos em um arquivo iterativo `.ipynb`, podemos renderizar imagens nativamente! Utilizamos o `matplotlib` para plotar um gráfico de linhas dinâmico, evidenciando a tendência da cotação.',
                        '',
                        '**🤖 PROMPT ENVIADO PARA A IA:**',
                        '> "Crie uma célula de código importando a biblioteca matplotlib. Extraia as datas e os valores do nosso dicionário relatorio_analitico e construa um gráfico de linhas (lineplot). Formate o visual de forma profissional: adicione grid tracejado, rotacione o eixo X em 45 graus para facilitar a leitura das datas, pinte a linha do dólar de verde e garanta que a prancheta seja renderizada nativamente abaixo da célula."'
                    ]),
                    python: codeStr([
                        '<span class="c-keyword">import</span> matplotlib.pyplot <span class="c-keyword">as</span> plt',
                        '',
                        '<span class="c-comment"># Preparando vetores para o gráfico</span>',
                        'datas = [item[<span class="c-string">"Data"</span>] <span class="c-keyword">for</span> item <span class="c-keyword">in</span> relatorio_analitico]',
                        'valores_usd = [item[<span class="c-string">"Cotacao_USD"</span>] <span class="c-keyword">for</span> item <span class="c-keyword">in</span> relatorio_analitico]',
                        '',
                        '<span class="c-comment"># Configurando a prancheta (Figure)</span>',
                        'fig, eixo1 = plt.subplots(figsize=(10, 5))',
                        '',
                        'eixo1.plot(datas, valores_usd, color=<span class="c-string">"green"</span>, marker=<span class="c-string">"o"</span>, linewidth=2, label=<span class="c-string">"Dólar (BRL)"</span>)',
                        'eixo1.set_xlabel(<span class="c-string">"Timeline"</span>, fontweight=<span class="c-string">"bold"</span>)',
                        'eixo1.set_ylabel(<span class="c-string">"Preço USD"</span>, color=<span class="c-string">"green"</span>, fontweight=<span class="c-string">"bold"</span>)',
                        'eixo1.tick_params(axis=<span class="c-string">"x"</span>, rotation=45)',
                        '',
                        'plt.title(<span class="c-string">"Monitoramento Cambial - TechSolutions"</span>, fontsize=14, pad=15)',
                        'plt.grid(<span class="c-keyword">True</span>, linestyle=<span class="c-string">"--"</span>, alpha=0.6)',
                        'plt.tight_layout()',
                        '',
                        '<span class="c-comment"># Exibe o gráfico nativamente no Jupyter</span>',
                        'plt.show()'
                    ])
                },
                {
                    title: 'Versão Final: UX e Exportação Oficial para Excel (.xlsx)',
                    markdown: codeStr([
                        '### Etapa 4: Geração de Artefato e UX no Excel',
                        '',
                        'A diretoria consome relatórios. O Pandas assume a liderança transformando nossos dicionários em um `DataFrame`. Após salvar o arquivo, entraremos com a biblioteca `openpyxl` para formatar nativamente a planilha.',
                        '',
                        '**Magia Cloud:** Como o Jupyter está rodando em um servidor do Google, nós implementamos um bloco de "UX Automática" no final que força o navegador a fazer o download da planilha pronta diretamente para a máquina do usuário final.',
                        '',
                        '**🤖 PROMPT ENVIADO PARA A IA:**',
                        '> "Crie a etapa final chamando o Pandas para converter a base (relatorio_analitico) em DataFrame. Mostre um preview com display() e exporte para Excel (relatorio_auditoria_cambial.xlsx) sem index. Após isso, utilize o módulo openpyxl para estilizar a planilha recém-criada: formate o intervalo como uma Tabela (Table), centralize os dados e aplique tamanhos de fonte (16 no cabeçalho, 14 nos dados). Por fim, aplique wb.close() para evitar arquivos corrompidos na nuvem e crie um bloco try/except importando google.colab.files para forçar o download automático da planilha para o usuário."'
                    ]),
                    python: codeStr([
                        '<span class="c-keyword">import</span> pandas <span class="c-keyword">as</span> pd',
                        '<span class="c-keyword">from</span> openpyxl <span class="c-keyword">import</span> load_workbook',
                        '<span class="c-keyword">from</span> openpyxl.styles <span class="c-keyword">import</span> Font, Alignment',
                        '<span class="c-keyword">from</span> openpyxl.worksheet.table <span class="c-keyword">import</span> Table, TableStyleInfo',
                        '<span class="c-keyword">from</span> openpyxl.utils <span class="c-keyword">import</span> get_column_letter',
                        '',
                        '<span class="c-comment"># 1. Transformando num DataFrame tabular do Pandas</span>',
                        'df = pd.DataFrame(relatorio_analitico)',
                        '',
                        '<span class="c-func">print</span>(<span class="c-string">"--- PREVIEW DO RELATÓRIO EXECUTIVO ---"</span>)',
                        '<span class="c-func">display</span>(df.head())',
                        '',
                        '<span class="c-comment"># 2. Exportação Bruta inicial para .xlsx</span>',
                        'nome_arquivo = <span class="c-string">"relatorio_auditoria_cambial.xlsx"</span>',
                        'df.to_excel(nome_arquivo, index=<span class="c-keyword">False</span>)',
                        '',
                        '<span class="c-comment"># 3. Engenharia de UX: Estilizando nativamente com OpenPyXL</span>',
                        'wb = load_workbook(nome_arquivo)',
                        'ws = wb.active',
                        '',
                        'fonte_cabecalho = Font(bold=<span class="c-keyword">True</span>, size=16)',
                        'fonte_dados = Font(size=14)',
                        'alinhamento = Alignment(horizontal=<span class="c-string">"center"</span>, vertical=<span class="c-string">"center"</span>)',
                        '',
                        '<span class="c-comment"># Varrendo células para aplicar alinhamento e fontes</span>',
                        '<span class="c-keyword">for</span> linha <span class="c-keyword">in</span> ws.iter_rows(min_row=1, max_row=ws.max_row, min_col=1, max_col=ws.max_column):',
                        '    <span class="c-keyword">for</span> celula <span class="c-keyword">in</span> linha:',
                        '        celula.alignment = alinhamento',
                        '        celula.font = fonte_cabecalho <span class="c-keyword">if</span> celula.row == 1 <span class="c-keyword">else</span> fonte_dados',
                        '',
                        '<span class="c-comment"># Expandindo a largura das colunas</span>',
                        '<span class="c-keyword">for</span> col <span class="c-keyword">in</span> ws.columns:',
                        '    ws.column_dimensions[col[0].column_letter].width = 25',
                        '',
                        '<span class="c-comment"># Aplicando componente de Tabela Interativa (Zebrada)</span>',
                        'ref_tabela = f<span class="c-string">"A1:{get_column_letter(ws.max_column)}{ws.max_row}"</span>',
                        'tabela = Table(displayName=<span class="c-string">"TabelaCambio"</span>, ref=ref_tabela)',
                        'estilo = TableStyleInfo(name=<span class="c-string">"TableStyleMedium9"</span>, showRowStripes=<span class="c-keyword">True</span>)',
                        'tabela.tableStyleInfo = estilo',
                        'ws.add_table(tabela)',
                        '',
                        '<span class="c-comment"># 4. Fechamento de Memória Crucial para Ambientes Linux/Colab!</span>',
                        'wb.save(nome_arquivo)',
                        'wb.close()',
                        '',
                        '<span class="c-func">print</span>(f<span class="c-string">"\\n✅ SUCESSO! Planilha {nome_arquivo} gerada e finalizada!"</span>)',
                        '',
                        '<span class="c-comment"># 5. UX Automática: Se estiver no Google Colab, baixa o arquivo na hora!</span>',
                        '<span class="c-keyword">try</span>:',
                        '    <span class="c-keyword">from</span> google.colab <span class="c-keyword">import</span> files',
                        '    files.download(nome_arquivo)',
                        '<span class="c-keyword">except</span> ImportError:',
                        '    <span class="c-keyword">pass</span> <span class="c-comment"># Rodando no VS Code local, ignora e segue a vida normal</span>'
                    ])
                }
            ]
        }
    ]
};