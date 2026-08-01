print("=== PROCESSADOR DE FOLHA TECHSOLUTIONS v1.0 ===")

total_folha = 0.0

while True:
    nome = input("\nNome do colaborador: ").strip()
    salario_base = float(input("Salário base (R$): "))
    bonus = float(input("Bônus de meta (R$): "))

    salario_final = salario_base + bonus
    total_folha += salario_final

    print(f"-> Holerite calculado: {nome} | Líquido: R$ {salario_final:.2f}")

    continuar = input("Deseja processar outro colaborador? [S/N]: ").strip().upper()
    if continuar == "N":
        break

print(f"\n=== FECHAMENTO DO LOTE ===\nTotal acumulado na folha: R$ {total_folha:.2f}")