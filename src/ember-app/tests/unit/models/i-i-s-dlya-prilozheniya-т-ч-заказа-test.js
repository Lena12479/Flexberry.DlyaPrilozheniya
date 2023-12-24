import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-dlya-prilozheniya-т-ч-заказа', 'Unit | Model | i-i-s-dlya-prilozheniya-т-ч-заказа', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-dlya-prilozheniya-акт-приемки',
    'model:i-i-s-dlya-prilozheniya-заказ',
    'model:i-i-s-dlya-prilozheniya-отпуск-материала',
    'model:i-i-s-dlya-prilozheniya-поставщики',
    'model:i-i-s-dlya-prilozheniya-складское-место',
    'model:i-i-s-dlya-prilozheniya-сотрудники',
    'model:i-i-s-dlya-prilozheniya-т-ч-акта-приемки',
    'model:i-i-s-dlya-prilozheniya-т-ч-заказа',
    'model:i-i-s-dlya-prilozheniya-товар',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
