const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3002;
const dataFilePath = 'D:/Project1/photos-app-main/backend/photo.txt';
app.get('/photos', (req, res) => {
  fs.readFile(dataFilePath, 'utf-8', (err, data) => {
    if (err) {
      console.error('Ошибка при чтении данных:', err);
      res.status(500).send('Ошибка сервера');
      return;
    }
    try {
      const photosData = JSON.parse(data);
      res.json(photosData);
    } catch (parseError) {
      console.error('Ошибка при парсинге данных:', parseError);
      res.status(500).send('Ошибка сервера');
    }
  });
});
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});