import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адресЗаказа: DS.attr('string'),
  датаПолучения: DS.attr('date'),
  номерЗаказа: DS.attr('number'),
  способПолучения: DS.attr('i-i-s-dlya-prilozheniya-получение'),
  фИОЗаказчика: DS.attr('string'),
  тЧЗаказа: DS.hasMany('i-i-s-dlya-prilozheniya-т-ч-заказа', { inverse: 'заказ', async: false })
});

export let ValidationRules = {
  адресЗаказа: {
    descriptionKey: 'models.i-i-s-dlya-prilozheniya-заказ.validations.адресЗаказа.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  датаПолучения: {
    descriptionKey: 'models.i-i-s-dlya-prilozheniya-заказ.validations.датаПолучения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерЗаказа: {
    descriptionKey: 'models.i-i-s-dlya-prilozheniya-заказ.validations.номерЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  способПолучения: {
    descriptionKey: 'models.i-i-s-dlya-prilozheniya-заказ.validations.способПолучения.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИОЗаказчика: {
    descriptionKey: 'models.i-i-s-dlya-prilozheniya-заказ.validations.фИОЗаказчика.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  тЧЗаказа: {
    descriptionKey: 'models.i-i-s-dlya-prilozheniya-заказ.validations.тЧЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказE', 'i-i-s-dlya-prilozheniya-заказ', {
    номерЗаказа: attr('Номер заказа', { index: 0 }),
    фИОЗаказчика: attr('Ф и о заказчика', { index: 1 }),
    адресЗаказа: attr('Адрес заказа', { index: 2 }),
    способПолучения: attr('Способ получения', { index: 3 }),
    датаПолучения: attr('Дата получения', { index: 4 }),
    тЧЗаказа: hasMany('i-i-s-dlya-prilozheniya-т-ч-заказа', 'Т ч заказа', {
      товар: belongsTo('i-i-s-dlya-prilozheniya-товар', 'Товар', {
        материал: attr('Материал', { index: 1, hidden: true }),
        цена: attr('Цена', { index: 3 })
      }, { index: 0, displayMemberPath: 'материал' }),
      количество: attr('Количество', { index: 2 })
    })
  });

  modelClass.defineProjection('ЗаказL', 'i-i-s-dlya-prilozheniya-заказ', {
    номерЗаказа: attr('Номер заказа', { index: 0 }),
    фИОЗаказчика: attr('Ф и о заказчика', { index: 1 }),
    адресЗаказа: attr('Адрес заказа', { index: 2 }),
    способПолучения: attr('Способ получения', { index: 3 }),
    датаПолучения: attr('Дата получения', { index: 4 })
  });
};
