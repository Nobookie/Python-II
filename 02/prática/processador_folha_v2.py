print("=== PROCESSADOR DE FOLHA TECHSOLUTIONS v2.0 ===")

total_salario = 0.0
total_bonus = 0.0
total_colaboradores = 0

while True:
    print("\n-------------------------")
    print("1. Adicionar holerite ao lote")
    print("2. Exibir parcial da sessão")
    print("3. Fechar lote e sair")
    opcao = input("Escolha uma operação: ").strip()

    if opcao == "1":
        try:
            nome = input("Nome do colaborador: ").strip()
            salario_base = float(input("Salário base (R$): ").replace(",", "."))
            bonus = float(input("Bônus de meta (R$): ").replace(",", "."))

            total_salario += salario_base
            total_bonus += bonus
            total_colaboradores += 1
        except ValueError:
            print("[ERRO] Digite apenas númeeros monetários.")
        finally:    
            print("-> Holerite contabilizado com sucesso!")

    elif opcao == "2":
        total_folha = total_salario + total_bonus
        print(f"\n[PARCIAL] Colaboradores: {total_colaboradores} | Salário base total R$ {total_salario:.2f} + Bônus total R$ {total_bonus:.2f} = R$ {total_folha:.2f}")

    elif opcao == "3":
        print("Encerrando lote...")
        break

    else:
        print("Operação inválida!")

