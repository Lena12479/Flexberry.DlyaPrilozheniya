import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерМеста: DS.attr('string'),
  расшифровка: DS.attr('string')
});

export let ValidationRules = {
  номерМеста: {
    descriptionKey: 'models.i-i-s-dlya-prilozheniya-складское-место.validations.номерМеста.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  расшифровка: {
    descriptionKey: 'models.i-i-s-dlya-prilozheniya-складское-место.validations.расшифровка.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СкладскоеМестоE', 'i-i-s-dlya-prilozheniya-складское-место', {
    номерМеста: attr('Номер места', { index: 0 }),
    расшифровка: attr('Расшифровка', { index: 1 })
  });

  modelClass.defineProjection('СкладскоеМестоL', 'i-i-s-dlya-prilozheniya-складское-место', {
    номерМеста: attr('Номер места', { index: 0 }),
    расшифровка: attr('Расшифровка', { index: 1 })
  });
};
