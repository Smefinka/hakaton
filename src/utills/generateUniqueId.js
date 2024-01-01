function generateUniqueId() {
    // Создаем текущую дату в миллисекундах
    const timestamp = new Date().getTime();
const twoDigitNumber = ('0' + new Date(timestamp).getSeconds()).slice(-2);
    // Генерируем случайное число от 0 до 99
    const random = Math.floor(Math.random() * 99);
    
    // Соединяем дату и случайное число для формирования уникального ID
    const uniqueId = `${twoDigitNumber}${random}`;
  
    return uniqueId;
  }
  
 export default generateUniqueId;
