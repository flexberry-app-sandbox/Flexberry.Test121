import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-test12-заказ', 'Unit | Serializer | i-i-s-test12-заказ', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-test12-заказ',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-test12-место-выдачи',
    'transform:i-i-s-test12-состояния',

    'model:i-i-s-test12-заказ',
    'model:i-i-s-test12-клиент',
    'model:i-i-s-test12-оповещения',
    'model:i-i-s-test12-состав-заказа',
    'model:i-i-s-test12-сотрудник',
    'model:i-i-s-test12-товары',
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
