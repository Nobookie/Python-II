import csv
import json
import os

arquivo_csv = "folha_lote.csv"
arquivo_json = "folha_lote.json"

print("=== PROCESSADOR DE FOLHA TECHSOLUTIONS v3.0 ===")

total_salario = 0.0
total_bonus = 0.0
total_colaboradores = 0

if not os.path.exists(arquivo_csv):
    with open(arquivo_csv, "w", newline="", encoding="utf-8") as f_csv:
        writer = csv.writer(f_csv)
        writer.writerow(["Nome", "SalarioBase", "Bonus"])

while True:
    print("\n-------------------------")
    print("1. Adicionar holerite ao lote")
    print("2. Exibir parcial da sessão")
    print("3. Fechar lote e sair")
    opcao = input("Escolha uma operação: ").strip()

    if opcao == "1":
        try:
            nome = input("Nome do colaborador (ou \"VOLTAR\" para voltar): ").strip()

            if nome == "VOLTAR":
                print("-> Voltando ao menu principal")
                continue

            salario_base = float(input("Salário base (R$): ").replace(",", "."))
            bonus = float(input("Bônus de meta (R$): ").replace(",", "."))

            total_salario += salario_base
            total_bonus += bonus
            total_colaboradores += 1

            with open(arquivo_csv, "a", newline="", encoding="utf-8") as f_csv:
                csv.writer(f_csv).writerow([nome, salario_base, bonus])
            
            lista_dados = []
            if os.path.exists(arquivo_json):
                with open(arquivo_json, "r", encoding="utf-8") as f_json:
                    lista_dados  = json.load(f_json)
            
            lista_dados.append({"colaborador":nome, "salariobase": salario_base, "bonus": bonus})

            with open(arquivo_json, "w", encoding="utf-8") as f_json:
                json.dump(lista_dados, f_json, indent=4, ensure_ascii=False)
            
            print("-> Holerite contabilizado com sucesso!")
        except ValueError:
            print("[ERRO] Digite apenas números monetários.")

    elif opcao == "2":
        total_folha = total_salario + total_bonus
        print(f"\n[PARCIAL] Colaboradores: {total_colaboradores} | Salário base total R$ {total_salario:.2f} + Bônus total R$ {total_bonus:.2f} = R$ {total_folha:.2f}")

    elif opcao == "3":
        print("Encerrando lote...")
        break

    else:
        print("Operação inválida!")

