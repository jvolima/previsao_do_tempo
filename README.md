# Previsão do tempo

## Projeto de previsão do tempo com Node e React

## O que a aplicação faz?
- Informa para o usuários as condições do tempo da sua cidade, como temperatura, condição do clima,entre outros

## Funcionalidades do back-end
- Através do ip do usuário, o back consegue buscar a localização do usuário utilizando uma API de geolocalização
- Após buscar a localização do usuário, o programa chama a API de clima informando o WOEID(Where on earth identifier), e consegue pegar as informações do clima e retornar para o cliente(no caso dessa aplicação, para o front)

## Funcionalidades do front-end
- Chamar o back para receber as informações relacionadas ao clima
- Renderizar em tela todos os dados recebidos do back 
