import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  имя: DS.attr('string'),
  кодК: DS.attr('number'),
  отчество: DS.attr('string'),
  телефон: DS.attr('number'),
  фамилия: DS.attr('string')
});

export let ValidationRules = {
  имя: {
    descriptionKey: 'models.i-i-s-test12-клиент.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кодК: {
    descriptionKey: 'models.i-i-s-test12-клиент.validations.кодК.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  отчество: {
    descriptionKey: 'models.i-i-s-test12-клиент.validations.отчество.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-test12-клиент.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фамилия: {
    descriptionKey: 'models.i-i-s-test12-клиент.validations.фамилия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлиентE', 'i-i-s-test12-клиент', {
    кодК: attr('Код К', { index: 0 }),
    фамилия: attr('Фамилия', { index: 1 }),
    имя: attr('Имя', { index: 2 }),
    отчество: attr('Отчество', { index: 3 }),
    телефон: attr('Телефон', { index: 4 })
  });

  modelClass.defineProjection('КлиентL', 'i-i-s-test12-клиент', {
    кодК: attr('Код К', { index: 0 }),
    фамилия: attr('Фамилия', { index: 1 }),
    имя: attr('Имя', { index: 2 }),
    отчество: attr('Отчество', { index: 3 }),
    телефон: attr('Телефон', { index: 4 })
  });
};
