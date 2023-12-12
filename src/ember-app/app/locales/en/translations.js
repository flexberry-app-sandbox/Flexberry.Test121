import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISTest12ЗаказLForm from './forms/i-i-s-test12-заказ-l';
import IISTest12КлиентLForm from './forms/i-i-s-test12-клиент-l';
import IISTest12ОповещенияLForm from './forms/i-i-s-test12-оповещения-l';
import IISTest12СотрудникLForm from './forms/i-i-s-test12-сотрудник-l';
import IISTest12ТоварыLForm from './forms/i-i-s-test12-товары-l';
import IISTest12ЗаказEForm from './forms/i-i-s-test12-заказ-e';
import IISTest12КлиентEForm from './forms/i-i-s-test12-клиент-e';
import IISTest12ОповещенияEForm from './forms/i-i-s-test12-оповещения-e';
import IISTest12СотрудникEForm from './forms/i-i-s-test12-сотрудник-e';
import IISTest12ТоварыEForm from './forms/i-i-s-test12-товары-e';
import IISTest12ЗаказModel from './models/i-i-s-test12-заказ';
import IISTest12КлиентModel from './models/i-i-s-test12-клиент';
import IISTest12ОповещенияModel from './models/i-i-s-test12-оповещения';
import IISTest12СоставЗаказаModel from './models/i-i-s-test12-состав-заказа';
import IISTest12СотрудникModel from './models/i-i-s-test12-сотрудник';
import IISTest12ТоварыModel from './models/i-i-s-test12-товары';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-test12-заказ': IISTest12ЗаказModel,
    'i-i-s-test12-клиент': IISTest12КлиентModel,
    'i-i-s-test12-оповещения': IISTest12ОповещенияModel,
    'i-i-s-test12-состав-заказа': IISTest12СоставЗаказаModel,
    'i-i-s-test12-сотрудник': IISTest12СотрудникModel,
    'i-i-s-test12-товары': IISTest12ТоварыModel
  },

  'application-name': 'Test12',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Test12',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test12',
          title: 'Test12'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        главная: {
          caption: 'Главная',
          title: 'Главная',
          сотрудники: {
            caption: 'Сотрудники',
            title: 'Сотрудники',
            'i-i-s-test12-сотрудник-l': {
              caption: 'Сотрудник',
              title: 'Сотрудник'
            }
          },
          заказы: {
            caption: 'Заказы',
            title: 'Заказы',
            'i-i-s-test12-заказ-l': {
              caption: 'Заказ',
              title: 'Заказ'
            }
          },
          'справочник-товаров': {
            caption: 'СправочникТоваров',
            title: 'СправочникТоваров',
            'i-i-s-test12-товары-l': {
              caption: 'Товары',
              title: 'Товары'
            }
          },
          's-m-s-оповещения': {
            caption: 'SMS-Оповещения',
            title: 'SMS-Оповещения',
            'i-i-s-test12-оповещения-l': {
              caption: 'Оповещения',
              title: 'Оповещения'
            }
          },
          клиенты: {
            caption: 'Клиенты',
            title: 'Клиенты',
            'i-i-s-test12-клиент-l': {
              caption: 'Клиент',
              title: 'Клиент'
            }
          }
        },
        test12: {
          caption: 'Test12',
          title: 'Test12',
          'i-i-s-test12-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          },
          'i-i-s-test12-заказ-l': {
            caption: 'Заказ',
            title: ''
          },
          'i-i-s-test12-товары-l': {
            caption: 'Товары',
            title: ''
          },
          'i-i-s-test12-оповещения-l': {
            caption: 'Оповещения',
            title: ''
          },
          'i-i-s-test12-клиент-l': {
            caption: 'Клиент',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-test12-заказ-l': IISTest12ЗаказLForm,
    'i-i-s-test12-клиент-l': IISTest12КлиентLForm,
    'i-i-s-test12-оповещения-l': IISTest12ОповещенияLForm,
    'i-i-s-test12-сотрудник-l': IISTest12СотрудникLForm,
    'i-i-s-test12-товары-l': IISTest12ТоварыLForm,
    'i-i-s-test12-заказ-e': IISTest12ЗаказEForm,
    'i-i-s-test12-клиент-e': IISTest12КлиентEForm,
    'i-i-s-test12-оповещения-e': IISTest12ОповещенияEForm,
    'i-i-s-test12-сотрудник-e': IISTest12СотрудникEForm,
    'i-i-s-test12-товары-e': IISTest12ТоварыEForm
  },

});

export default translations;
