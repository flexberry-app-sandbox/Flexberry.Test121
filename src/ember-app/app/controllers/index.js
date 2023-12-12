import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.главная.caption'),
          title: i18n.t('forms.application.sitemap.главная.title'),
          children: [{
            link: null,
            caption: i18n.t('forms.application.sitemap.главная.сотрудники.caption'),
            title: i18n.t('forms.application.sitemap.главная.сотрудники.title'),
            children: [{
              link: 'i-i-s-test12-сотрудник-l',
              caption: i18n.t('forms.application.sitemap.главная.сотрудники.i-i-s-test12-сотрудник-l.caption'),
              title: i18n.t('forms.application.sitemap.главная.сотрудники.i-i-s-test12-сотрудник-l.title'),
              icon: 'list',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.главная.заказы.caption'),
            title: i18n.t('forms.application.sitemap.главная.заказы.title'),
            children: [{
              link: 'i-i-s-test12-заказ-l',
              caption: i18n.t('forms.application.sitemap.главная.заказы.i-i-s-test12-заказ-l.caption'),
              title: i18n.t('forms.application.sitemap.главная.заказы.i-i-s-test12-заказ-l.title'),
              icon: 'file',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.главная.справочник-товаров.caption'),
            title: i18n.t('forms.application.sitemap.главная.справочник-товаров.title'),
            children: [{
              link: 'i-i-s-test12-товары-l',
              caption: i18n.t('forms.application.sitemap.главная.справочник-товаров.i-i-s-test12-товары-l.caption'),
              title: i18n.t('forms.application.sitemap.главная.справочник-товаров.i-i-s-test12-товары-l.title'),
              icon: 'calendar',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.главная.s-m-s-оповещения.caption'),
            title: i18n.t('forms.application.sitemap.главная.s-m-s-оповещения.title'),
            children: [{
              link: 'i-i-s-test12-оповещения-l',
              caption: i18n.t('forms.application.sitemap.главная.s-m-s-оповещения.i-i-s-test12-оповещения-l.caption'),
              title: i18n.t('forms.application.sitemap.главная.s-m-s-оповещения.i-i-s-test12-оповещения-l.title'),
              icon: 'tags',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.главная.клиенты.caption'),
            title: i18n.t('forms.application.sitemap.главная.клиенты.title'),
            children: [{
              link: 'i-i-s-test12-клиент-l',
              caption: i18n.t('forms.application.sitemap.главная.клиенты.i-i-s-test12-клиент-l.caption'),
              title: i18n.t('forms.application.sitemap.главная.клиенты.i-i-s-test12-клиент-l.title'),
              icon: 'address card',
              children: null
            }]
          }]
        }
      ]
    };
  }),
})