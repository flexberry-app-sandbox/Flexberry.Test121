import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-test12-состав-заказа', 'Unit | Model | i-i-s-test12-состав-заказа', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
