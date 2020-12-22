# Challenge JavaScript - Dashboard
#### Tiago Sestari


## Estrutura da aplicação

- App
  - Header
  - Dash  
    - Resumo Principal
    - Lista Parcelas
  - Footer
  
![Diagrama da estrutura da aplicação](https://github.com/tiagosestari/challenge_javascript/blob/master/desafio-dash-tiagosestari/src/imgs/estruturadaaplicacao.PNG)


O Componente Dash bate no endpoint da API usando a bibliotéca Axios transfere os dados para os componentes Resumo Principal e Lista Parcelas por props.

### Componente Resumo Principal

Contém as principais informações que provavelmente um usuário está buscando: quantidade emprestada, quantidade paga e valor restante.

![Componente Resumo Principal](https://github.com/tiagosestari/challenge_javascript/blob/master/desafio-dash-tiagosestari/src/imgs/telaprincipal.PNG)

### Componente Lista Parcelas

O componente Lista Parcelas tem renderização condicional por ser um nível de detalhe mais especifico que não precisa ser carregado junto com a página caso o usuário não queira esse apronfudamento.
A lista de parcelas é renderizada com valor, status do pagamento, data de vencimento e um botão que redireciona para o pagamento daquela parcela.

![Componente Detalhamento de Parcelas](https://github.com/tiagosestari/challenge_javascript/blob/master/desafio-dash-tiagosestari/src/imgs/detalhamentodeparcelas.PNG)

É possível filtrar as parcelas por status, Pagas ou Em aberto, para facilitar a análise do usuário.
![alt text](https://github.com/tiagosestari/challenge_javascript/blob/master/desafio-dash-tiagosestari/src/imgs/filtro.PNG)
