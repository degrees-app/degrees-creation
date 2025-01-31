'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        title: 'Первый сид',
        category: 'sound',
        fileName: 'file1.txt',
        desc: 'Описание первого сида',
      },
      {
        title: 'Второй сид',
        category: 'interface',
        fileName: 'file2.txt',
        desc: 'Описание второго сида',
      },
      {
        title: 'Третий сид',
        category: 'sound',
        fileName: 'file3.txt',
        desc: 'Описание третьего сида',
      },
      {
        title: 'Четвертый сид',
        category: 'interface',
        fileName: 'file4.txt',
        desc: 'Описание четвертого сида',
      },
      {
        title: 'Пятый сид',
        category: 'sound',
        fileName: 'file5.txt',
        desc: 'Описание пятого сида',
      },
      {
        title: 'Шестой сид',
        category: 'environment',
        fileName: 'file6.txt',
        desc: 'Описание шестого сида',
      },
      {
        title: 'Седьмой сид',
        category: 'interface',
        fileName: 'file7.txt',
        desc: 'Описание седьмого сида',
      },
      {
        title: 'Восьмой сид',
        category: 'environment',
        fileName: 'file8.txt',
        desc: 'Описание восьмого сида',
      },
      {
        title: 'Девятый сид',
        category: 'environment',
        fileName: 'file9.txt',
        desc: 'Описание девятого сида',
      },
      {
        title: 'Десятый сид',
        category: 'entity',
        fileName: 'file10.txt',
        desc: 'Описание десятого сида',
      },
      {
        title: 'Одиннадцатый сид',
        category: 'entity',
        fileName: 'file11.txt',
        desc: 'Описание одиннадцатого сида',
    },
    {
        title: 'Двенадцатый сид',
        category: 'sound',
        fileName: 'file12.txt',
        desc: 'Описание двенадцатого сида',
    },
    {
        title: 'Тринадцатый сид',
        category: 'entity',
        fileName: 'file13.txt',
        desc: 'Описание тринадцатого сида',
    },
    {
        title: 'Четырнадцатый сид',
        category: 'interface',
        fileName: 'file14.txt',
        desc: 'Описание четырнадцатого сида',
    },
    {
        title: 'Пятнадцатый сид',
        category: 'entity',
        fileName: 'file15.txt',
        desc: 'Описание пятнадцатого сида',
    },
    {
        title: 'Шестнадцатый сид',
        category: 'environment',
        fileName: 'file16.txt',
        desc: 'Описание шестнадцатого сида',
    },
    {
        title: 'Семнадцатый сид',
        category: 'entity',
        fileName: 'file17.txt',
        desc: 'Описание семнадцатого сида',
    },
    {
        title: 'Восемнадцатый сид',
        category: 'sound',
        fileName: 'file18.txt',
        desc: 'Описание восемнадцатого сида',
    },
    {
        title: 'Девятнадцатый сид',
        category: 'entity',
        fileName: 'file19.txt',
        desc: 'Описание девятнадцатого сида',
    },
    {
        title: 'Двадцатый сид',
        category: 'interface',
        fileName: 'file20.txt',
        desc: 'Описание двадцатого сида',
    },
    {
        title: 'Двадцать первый сид',
        category: 'entity',
        fileName: 'file21.txt',
        desc: 'Описание двадцать первого сида',
    },
    {
        title: 'Двадцать второй сид',
        category: 'environment',
        fileName: 'file22.txt',
        desc: 'Описание двадцать второго сида',
    },
    {
        title: 'Двадцать третий сид',
        category: 'entity',
        fileName: 'file23.txt',
        desc: 'Описание двадцать третьего сида',
    },
    {
        title: 'Двадцать четвертый сид',
        category: 'sound',
        fileName: 'file24.txt',
        desc: 'Описание двадцать четвертого сида',
    },
    {
        title: 'Двадцать пятый сид',
        category: 'interface',
        fileName: 'file25.txt',
        desc: 'Описание двадцать пятого сида',
    }
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
