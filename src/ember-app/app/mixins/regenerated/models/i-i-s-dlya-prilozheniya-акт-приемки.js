import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаПриемки: DS.attr('date'),
  номерАкта: DS.attr('number'),
  поставщики: DS.belongsTo('i-i-s-dlya-prilozheniya-поставщики', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-dlya-prilozheniya-сотрудники', { inverse: null, async: false }),
  тЧАктаПриемки: DS.hasMany('i-i-s-dlya-prilozheniya-т-ч-акта-приемки', { inverse: 'актПриемки', async: false })
});

export let ValidationRules = {
  датаПриемки: {
    descriptionKey: 'models.i-i-s-dlya-prilozheniya-акт-приемки.validations.датаПриемки.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерАкта: {
    descriptionKey: 'models.i-i-s-dlya-prilozheniya-акт-приемки.validations.номерАкта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  поставщики: {
    descriptionKey: 'models.i-i-s-dlya-prilozheniya-акт-приемки.validations.поставщики.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-dlya-prilozheniya-акт-приемки.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧАктаПриемки: {
    descriptionKey: 'models.i-i-s-dlya-prilozheniya-акт-приемки.validations.тЧАктаПриемки.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('АктПриемкиE', 'i-i-s-dlya-prilozheniya-акт-приемки', {
    номерАкта: attr('Номер акта', { index: 0 }),
    датаПриемки: attr('Дата приемки', { index: 1 }),
    сотрудники: belongsTo('i-i-s-dlya-prilozheniya-сотрудники', 'Сотрудники', {
      фИОСотрудника: attr('Принял', { index: 3, hidden: true }),
      должность: attr('', { index: 4 })
    }, { index: 2, displayMemberPath: 'фИОСотрудника' }),
    поставщики: belongsTo('i-i-s-dlya-prilozheniya-поставщики', 'Поставщики', {
      наименование: attr('Наименование', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'наименование' }),
    тЧАктаПриемки: hasMany('i-i-s-dlya-prilozheniya-т-ч-акта-приемки', 'Т ч акта приемки', {
      товар: belongsTo('i-i-s-dlya-prilozheniya-товар', 'Товар', {
        материал: attr('Материал', { index: 1, hidden: true })
      }, { index: 0, displayMemberPath: 'материал' }),
      количество: attr('Количество', { index: 2 }),
      складскоеМесто: belongsTo('i-i-s-dlya-prilozheniya-складское-место', 'Складское место', {
        номерМеста: attr('Принимающее СМ', { index: 4, hidden: true })
      }, { index: 3, displayMemberPath: 'номерМеста' })
    })
  });

  modelClass.defineProjection('АктПриемкиL', 'i-i-s-dlya-prilozheniya-акт-приемки', {
    номерАкта: attr('Номер акта', { index: 0 }),
    датаПриемки: attr('Дата приемки', { index: 1 }),
    сотрудники: belongsTo('i-i-s-dlya-prilozheniya-сотрудники', 'Принял', {
      фИОСотрудника: attr('Принял', { index: 2 })
    }, { index: -1, hidden: true }),
    поставщики: belongsTo('i-i-s-dlya-prilozheniya-поставщики', 'Наименование', {
      наименование: attr('Наименование', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
