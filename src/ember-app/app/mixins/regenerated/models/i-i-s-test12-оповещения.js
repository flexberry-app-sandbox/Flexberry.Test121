import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  местоВыдачи: DS.attr('i-i-s-test12-место-выдачи'),
  описание: DS.attr('string'),
  заказ: DS.belongsTo('i-i-s-test12-заказ', { inverse: null, async: false })
});

export let ValidationRules = {
  местоВыдачи: {
    descriptionKey: 'models.i-i-s-test12-оповещения.validations.местоВыдачи.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  описание: {
    descriptionKey: 'models.i-i-s-test12-оповещения.validations.описание.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  заказ: {
    descriptionKey: 'models.i-i-s-test12-оповещения.validations.заказ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОповещенияE', 'i-i-s-test12-оповещения', {
    описание: attr('Описание', { index: 0 }),
    местоВыдачи: attr('Место выдачи', { index: 1 }),
    заказ: belongsTo('i-i-s-test12-заказ', 'Заказ', {
      кодЗаказа: attr('Код заказа', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'кодЗаказа' })
  });

  modelClass.defineProjection('ОповещенияL', 'i-i-s-test12-оповещения', {
    описание: attr('Описание', { index: 0 }),
    местоВыдачи: attr('Место выдачи', { index: 1 }),
    заказ: belongsTo('i-i-s-test12-заказ', 'Код заказа', {
      кодЗаказа: attr('Код заказа', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
