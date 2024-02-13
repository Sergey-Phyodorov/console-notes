# console-notes

Это командное приложение Node.js для управления заметками. Это приложение позволяет создавать новые заметки, выводить список всех заметок и удалять заметки по id.

## Установка

Сначала склонируйте репозиторий и перейдите в директорию приложения. Затем установите зависимости проекта с помощью `npm install`.

## Использование

Вы можете использовать следующие команды для взаимодействия с приложением:

#### Добавить новую заметку
node index add --title "Ваша заметка"
Эта команда создаст новую заметку с указанным заголовком.

#### Вывести все заметки
node index list
Эта команда выведет список всех ваших заметок.

#### Удалить заметку по id
node index remove --id id_Заметки
Эта команда удалит заметку с указанным id.
