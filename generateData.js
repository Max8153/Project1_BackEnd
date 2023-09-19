const fs = require('fs');
const path = require('path');
const photosData = [];
for (let i = 1; i <= 25; i++) {
  const photo = {
    id: i,
    url: `photos/${i}.jpg`,
    description: 'Описание фотографии',
    likes: getRandom(15, 200),
    comments: generateComments(),
  };
  photosData.push(photo);
}
const filePath = 'D:/Project1/photos-app-main/backend/photo.txt';
const jsonData = JSON.stringify(photosData, null, 2);
fs.writeFileSync(filePath, jsonData, 'utf-8');
console.log('Данные успешно записаны в photos.txt');
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function generateComments() {
  const comments = [
    'Все отлично!',
    'Загалом все непогано. Але не всі.',
    'Коли ви робите фотографію, добре б прибирати палець із кадру. Зрештою, це просто непрофесійно.',
    'Моя бабуся випадково чхнула з фотоапаратом у руках і у неї вийшла фотографія краща.',
    'Я послизнувся на банановій шкірці і впустив фотоапарат на кота і у мене вийшла фотографія краще.',
    'Обличчя людей на фотці перекошені, ніби їх побивають. Як можна було зловити такий невдалий момент?',
  ];
  const randomComments = [];
  const numberOfComments = getRandom(1, 6);
  for (let i = 0; i < numberOfComments; i++) {
    const randomComment = comments[getRandom(0, comments.length - 1)];
    randomComments.push({
      id: i + 1,
      avatar: `img/avatar-${getRandom(1, 6)}.svg`,
      message: randomComment,
      name: [
        'Алексей',
        'Андрей',
        'Владимир',
        'Владислав',
        'Олег',
        'Максим',
        'Катя',
        'Маша',
        'Аня',
        'Виолетта',
      ][getRandom(0, 9)],
    });
  }
  return randomComments;
}