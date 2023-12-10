import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодСЗ: DS.attr('number'),
  количество: DS.attr('number'),
  стоимость: DS.attr('decimal'),
  товары: DS.belongsTo('i-i-s-test12-товары', { inverse: null, async: false }),
  заказ: DS.belongsTo('i-i-s-test12-заказ', { inverse: 'составЗаказа', async: false })
});

export let ValidationRules = {
  кодСЗ: {
    descriptionKey: 'models.i-i-s-test12-состав-заказа.validations.кодСЗ.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  количество: {
    descriptionKey: 'models.i-i-s-test12-состав-заказа.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  стоимость: {
    descriptionKey: 'models.i-i-s-test12-состав-заказа.validations.стоимость.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  товары: {
    descriptionKey: 'models.i-i-s-test12-состав-заказа.validations.товары.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  заказ: {
    descriptionKey: 'models.i-i-s-test12-состав-заказа.validations.заказ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СоставЗаказаE', 'i-i-s-test12-состав-заказа', {
    кодСЗ: attr('Код СЗ', { index: 0 }),
    стоимость: attr('Стоимость', { index: 1 }),
    количество: attr('Количество', { index: 2 }),
    товары: belongsTo('i-i-s-test12-товары', 'Товары', {
      название: attr('Название', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'название' })
  });
};
