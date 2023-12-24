import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-dlya-prilozheniya-сотрудники', 'Unit | Serializer | i-i-s-dlya-prilozheniya-сотрудники', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-dlya-prilozheniya-сотрудники',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-dlya-prilozheniya-наличие',
    'transform:i-i-s-dlya-prilozheniya-получение',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
