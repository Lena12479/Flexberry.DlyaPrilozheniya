import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISDlyaPrilozheniyaАктПриемкиLForm from './forms/i-i-s-dlya-prilozheniya-акт-приемки-l';
import IISDlyaPrilozheniyaЗаказLForm from './forms/i-i-s-dlya-prilozheniya-заказ-l';
import IISDlyaPrilozheniyaОтпускМатериалаLForm from './forms/i-i-s-dlya-prilozheniya-отпуск-материала-l';
import IISDlyaPrilozheniyaПоставщикиLForm from './forms/i-i-s-dlya-prilozheniya-поставщики-l';
import IISDlyaPrilozheniyaСкладскоеМестоLForm from './forms/i-i-s-dlya-prilozheniya-складское-место-l';
import IISDlyaPrilozheniyaСотрудникиLForm from './forms/i-i-s-dlya-prilozheniya-сотрудники-l';
import IISDlyaPrilozheniyaТоварLForm from './forms/i-i-s-dlya-prilozheniya-товар-l';
import IISDlyaPrilozheniyaАктПриемкиEForm from './forms/i-i-s-dlya-prilozheniya-акт-приемки-e';
import IISDlyaPrilozheniyaЗаказEForm from './forms/i-i-s-dlya-prilozheniya-заказ-e';
import IISDlyaPrilozheniyaОтпускМатериалаEForm from './forms/i-i-s-dlya-prilozheniya-отпуск-материала-e';
import IISDlyaPrilozheniyaПоставщикиEForm from './forms/i-i-s-dlya-prilozheniya-поставщики-e';
import IISDlyaPrilozheniyaСкладскоеМестоEForm from './forms/i-i-s-dlya-prilozheniya-складское-место-e';
import IISDlyaPrilozheniyaСотрудникиEForm from './forms/i-i-s-dlya-prilozheniya-сотрудники-e';
import IISDlyaPrilozheniyaТоварEForm from './forms/i-i-s-dlya-prilozheniya-товар-e';
import IISDlyaPrilozheniyaАктПриемкиModel from './models/i-i-s-dlya-prilozheniya-акт-приемки';
import IISDlyaPrilozheniyaЗаказModel from './models/i-i-s-dlya-prilozheniya-заказ';
import IISDlyaPrilozheniyaОтпускМатериалаModel from './models/i-i-s-dlya-prilozheniya-отпуск-материала';
import IISDlyaPrilozheniyaПоставщикиModel from './models/i-i-s-dlya-prilozheniya-поставщики';
import IISDlyaPrilozheniyaСкладскоеМестоModel from './models/i-i-s-dlya-prilozheniya-складское-место';
import IISDlyaPrilozheniyaСотрудникиModel from './models/i-i-s-dlya-prilozheniya-сотрудники';
import IISDlyaPrilozheniyaТЧАктаПриемкиModel from './models/i-i-s-dlya-prilozheniya-т-ч-акта-приемки';
import IISDlyaPrilozheniyaТЧЗаказаModel from './models/i-i-s-dlya-prilozheniya-т-ч-заказа';
import IISDlyaPrilozheniyaТоварModel from './models/i-i-s-dlya-prilozheniya-товар';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-dlya-prilozheniya-акт-приемки': IISDlyaPrilozheniyaАктПриемкиModel,
    'i-i-s-dlya-prilozheniya-заказ': IISDlyaPrilozheniyaЗаказModel,
    'i-i-s-dlya-prilozheniya-отпуск-материала': IISDlyaPrilozheniyaОтпускМатериалаModel,
    'i-i-s-dlya-prilozheniya-поставщики': IISDlyaPrilozheniyaПоставщикиModel,
    'i-i-s-dlya-prilozheniya-складское-место': IISDlyaPrilozheniyaСкладскоеМестоModel,
    'i-i-s-dlya-prilozheniya-сотрудники': IISDlyaPrilozheniyaСотрудникиModel,
    'i-i-s-dlya-prilozheniya-т-ч-акта-приемки': IISDlyaPrilozheniyaТЧАктаПриемкиModel,
    'i-i-s-dlya-prilozheniya-т-ч-заказа': IISDlyaPrilozheniyaТЧЗаказаModel,
    'i-i-s-dlya-prilozheniya-товар': IISDlyaPrilozheniyaТоварModel
  },

  'application-name': 'Dlya prilozheniya',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Dlya prilozheniya',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Dlya prilozheniya',
          title: 'Dlya prilozheniya'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'приемка-товара': {
          caption: 'Приемка товара',
          title: 'Приемка товара',
          'i-i-s-dlya-prilozheniya-поставщики-l': {
            caption: 'Поставщики',
            title: ''
          },
          'i-i-s-dlya-prilozheniya-акт-приемки-l': {
            caption: 'Акт приемки',
            title: ''
          },
          'i-i-s-dlya-prilozheniya-заказ-l': {
            caption: 'Заказ',
            title: ''
          },
          'i-i-s-dlya-prilozheniya-складское-место-l': {
            caption: 'Складское место',
            title: ''
          },
          'i-i-s-dlya-prilozheniya-отпуск-материала-l': {
            caption: 'Отпуск материала',
            title: ''
          },
          'i-i-s-dlya-prilozheniya-товар-l': {
            caption: 'Товар',
            title: ''
          },
          'i-i-s-dlya-prilozheniya-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          }
        },
        заказ: {
          caption: 'Заказ',
          title: 'Заказ',
          'i-i-s-dlya-prilozheniya-отпуск-материала-l': {
            caption: 'Отпуск материала',
            title: ''
          },
          'i-i-s-dlya-prilozheniya-заказ-l': {
            caption: 'Заказ',
            title: ''
          }
        },
        'каталог-товаров': {
          caption: 'Каталог товаров',
          title: 'Каталог товаров',
          'i-i-s-dlya-prilozheniya-товар-l': {
            caption: 'Товар',
            title: ''
          }
        },
        'доп-справочники': {
          caption: 'Доп.справочники',
          title: 'Доп.справочники',
          'i-i-s-dlya-prilozheniya-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-dlya-prilozheniya-складское-место-l': {
            caption: 'Складское место',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-dlya-prilozheniya-акт-приемки-l': IISDlyaPrilozheniyaАктПриемкиLForm,
    'i-i-s-dlya-prilozheniya-заказ-l': IISDlyaPrilozheniyaЗаказLForm,
    'i-i-s-dlya-prilozheniya-отпуск-материала-l': IISDlyaPrilozheniyaОтпускМатериалаLForm,
    'i-i-s-dlya-prilozheniya-поставщики-l': IISDlyaPrilozheniyaПоставщикиLForm,
    'i-i-s-dlya-prilozheniya-складское-место-l': IISDlyaPrilozheniyaСкладскоеМестоLForm,
    'i-i-s-dlya-prilozheniya-сотрудники-l': IISDlyaPrilozheniyaСотрудникиLForm,
    'i-i-s-dlya-prilozheniya-товар-l': IISDlyaPrilozheniyaТоварLForm,
    'i-i-s-dlya-prilozheniya-акт-приемки-e': IISDlyaPrilozheniyaАктПриемкиEForm,
    'i-i-s-dlya-prilozheniya-заказ-e': IISDlyaPrilozheniyaЗаказEForm,
    'i-i-s-dlya-prilozheniya-отпуск-материала-e': IISDlyaPrilozheniyaОтпускМатериалаEForm,
    'i-i-s-dlya-prilozheniya-поставщики-e': IISDlyaPrilozheniyaПоставщикиEForm,
    'i-i-s-dlya-prilozheniya-складское-место-e': IISDlyaPrilozheniyaСкладскоеМестоEForm,
    'i-i-s-dlya-prilozheniya-сотрудники-e': IISDlyaPrilozheniyaСотрудникиEForm,
    'i-i-s-dlya-prilozheniya-товар-e': IISDlyaPrilozheniyaТоварEForm
  },

});

export default translations;
