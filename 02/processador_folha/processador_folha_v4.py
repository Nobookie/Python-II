import streamlit as st
import pandas as pd
import json

st.set_page_config(page_title="TechSolutions Folha Web", page_icon="💼", layout="wide")

# Inicializando memória de sessão reativa no navegador
if "lote_folha" not in st.session_state:
    st.session_state["lote_folha"] = []

# Título corrigido conforme solicitação
st.title("💼 Sistema de Processamento de Folha Web")
st.markdown("Ambiente corporativo de auditoria e exportação em lote.")

# Formulário Lateral
with st.sidebar.form(key="form_holerite", clear_on_submit=True):
    st.header("➕ Novo Holerite")
    nome = st.text_input("Nome do Colaborador")
    cargo = st.selectbox("Cargo", ["Analista", "Desenvolvedor", "Gerente", "Diretor"])
    valor = st.number_input("Salário Líquido (R$)", min_value=0.0, step=100.0)
    submit = st.form_submit_button("Adicionar ao Lote")
    
    if submit and nome and valor > 0:
        st.session_state["lote_folha"].append({"Colaborador": nome, "Cargo": cargo, "Líquido (R$)": valor})
        st.success(f"{nome} adicionado!")

# Renderização Principal
if st.session_state["lote_folha"]:
    df = pd.DataFrame(st.session_state["lote_folha"])
    
    col1, col2 = st.columns(2)
    col1.metric("Colaboradores no Lote", len(df))
    col2.metric("Montante Total da Folha", f"R$ {df['Líquido (R$)'].sum():,.2f}")
    
    st.subheader("📑 Base Consolidada")
    st.dataframe(df, use_container_width=True)
    
    # Exportação Web Dinâmica
    csv_buffer = df.to_csv(index=False).encode("utf-8")
    json_buffer = json.dumps(st.session_state["lote_folha"], indent=4, ensure_ascii=False).encode("utf-8")
    
    d1, d2 = st.columns(2)
    d1.download_button("📥 Baixar Lote (.CSV)", data=csv_buffer, file_name="folha.csv", mime="text/csv", use_container_width=True)
    d2.download_button("📥 Baixar Lote (.JSON)", data=json_buffer, file_name="folha.json", mime="application/json", use_container_width=True)
else:
    st.info("👈 Utilize a barra lateral esquerda para cadastrar o primeiro holerite da folha.")