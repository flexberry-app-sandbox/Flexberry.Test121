import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  кодЗаказа: DS.attr('number'),
  статус: DS.attr('i-i-s-test12-состояния'),
  клиент: DS.belongsTo('i-i-s-test12-клиент', { inverse: null, async: false }),
  сотрудник: DS.belongsTo('i-i-s-test12-сотрудник', { inverse: null, async: false }),
  составЗаказа: DS.hasMany('i-i-s-test12-состав-заказа', { inverse: 'заказ', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-test12-заказ.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  кодЗаказа: {
    descriptionKey: 'models.i-i-s-test12-заказ.validations.кодЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  статус: {
    descriptionKey: 'models.i-i-s-test12-заказ.validations.статус.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-test12-заказ.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-test12-заказ.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  составЗаказа: {
    descriptionKey: 'models.i-i-s-test12-заказ.validations.составЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказE', 'i-i-s-test12-заказ', {
    кодЗаказа: attr('Код заказа', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    статус: attr('Статус', { index: 2 }),
    клиент: belongsTo('i-i-s-test12-клиент', 'Клиент', {
      фамилия: attr('Фамилия', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'фамилия' }),
    сотрудник: belongsTo('i-i-s-test12-сотрудник', 'Сотрудник', {
      фамилия: attr('Фамилия', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'фамилия' }),
    составЗаказа: hasMany('i-i-s-test12-состав-заказа', 'Состав заказа', {
      кодСЗ: attr('Код СЗ', { index: 0 }),
      стоимость: attr('Стоимость', { index: 1 }),
      количество: attr('Количество', { index: 2 }),
      товары: belongsTo('i-i-s-test12-товары', 'Товары', {
        название: attr('Название', { index: 4, hidden: true })
      }, { index: 3, displayMemberPath: 'название' })
    })
  });

  modelClass.defineProjection('ЗаказL', 'i-i-s-test12-заказ', {
    кодЗаказа: attr('Код заказа', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    статус: attr('Статус', { index: 2 }),
    клиент: belongsTo('i-i-s-test12-клиент', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 3 })
    }, { index: -1, hidden: true }),
    сотрудник: belongsTo('i-i-s-test12-сотрудник', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
