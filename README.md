# Request Stress Tester

Para fazer um teste rápido de estresse.

## Instruções para Metamap

- Baixe o repositório;
- Modifique os valores de `URL`, `INSTANCES_QTY` e `JWT_TOKEN` no arquivo index.ts;
- O valor de `JWT_TOKEN` pode ser obtido através da rota `Authentication` no Postman do Metamap;
- Rode o comando `npm start` no terminal;
- Verifique se existe algum `Status: 429`.