import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаПроводки: DS.attr('date'),
  заказ: DS.belongsTo('i-i-s-dlya-prilozheniya-заказ', { inverse: null, async: false }),
  складскоеМесто: DS.belongsTo('i-i-s-dlya-prilozheniya-складское-место', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-dlya-prilozheniya-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  датаПроводки: {
    descriptionKey: 'models.i-i-s-dlya-prilozheniya-отпуск-материала.validations.датаПроводки.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  заказ: {
    descriptionKey: 'models.i-i-s-dlya-prilozheniya-отпуск-материала.validations.заказ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  складскоеМесто: {
    descriptionKey: 'models.i-i-s-dlya-prilozheniya-отпуск-материала.validations.складскоеМесто.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-dlya-prilozheniya-отпуск-материала.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтпускМатериалаE', 'i-i-s-dlya-prilozheniya-отпуск-материала', {
    датаПроводки: attr('Дата проводки', { index: 0 }),
    складскоеМесто: belongsTo('i-i-s-dlya-prilozheniya-складское-место', 'Складское место', {
      номерМеста: attr('Отпускающее СМ', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'номерМеста' }),
    сотрудники: belongsTo('i-i-s-dlya-prilozheniya-сотрудники', 'Сотрудники', {
      фИОСотрудника: attr('Провел отпуск', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'фИОСотрудника' }),
    заказ: belongsTo('i-i-s-dlya-prilozheniya-заказ', 'Заказ', {
      номерЗаказа: attr('Номер заказа', { index: 6 }),
      фИОЗаказчика: attr('Ф и о заказчика', { index: 7, hidden: true }),
      адресЗаказа: attr('Адрес заказа', { index: 8 }),
      способПолучения: attr('Способ получения', { index: 9 }),
      датаПолучения: attr('Дата получения', { index: 10 })
    }, { index: 5, displayMemberPath: 'фИОЗаказчика' })
  });

  modelClass.defineProjection('ОтпускМатериалаL', 'i-i-s-dlya-prilozheniya-отпуск-материала', {
    датаПроводки: attr('Дата проводки', { index: 0 }),
    сотрудники: belongsTo('i-i-s-dlya-prilozheniya-сотрудники', 'Провел отпуск', {
      фИОСотрудника: attr('Провел отпуск', { index: 1 })
    }, { index: -1, hidden: true }),
    заказ: belongsTo('i-i-s-dlya-prilozheniya-заказ', 'Ф и о заказчика', {
      фИОЗаказчика: attr('Ф и о заказчика', { index: 2 })
    }, { index: -1, hidden: true }),
    складскоеМесто: belongsTo('i-i-s-dlya-prilozheniya-складское-место', 'Отпускающее СМ', {
      номерМеста: attr('Отпускающее СМ', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
