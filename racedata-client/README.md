# Запуск docker клиента:
1) 'docker build -t client:dev .'
2) 'docker run -itd --rm -v ${PWD}:/racedata-client -v /racedata-client/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true client:dev'
3001 - порт для доступа к localhost
3000 - порт для доступа к образу клиента других образов контейнера