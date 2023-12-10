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
          caption: i18n.t('forms.application.sitemap.test12.caption'),
          title: i18n.t('forms.application.sitemap.test12.title'),
          children: [{
            link: 'i-i-s-test12-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.test12.i-i-s-test12-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.test12.i-i-s-test12-сотрудник-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-test12-заказ-l',
            caption: i18n.t('forms.application.sitemap.test12.i-i-s-test12-заказ-l.caption'),
            title: i18n.t('forms.application.sitemap.test12.i-i-s-test12-заказ-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-test12-товары-l',
            caption: i18n.t('forms.application.sitemap.test12.i-i-s-test12-товары-l.caption'),
            title: i18n.t('forms.application.sitemap.test12.i-i-s-test12-товары-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-test12-оповещения-l',
            caption: i18n.t('forms.application.sitemap.test12.i-i-s-test12-оповещения-l.caption'),
            title: i18n.t('forms.application.sitemap.test12.i-i-s-test12-оповещения-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-test12-клиент-l',
            caption: i18n.t('forms.application.sitemap.test12.i-i-s-test12-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.test12.i-i-s-test12-клиент-l.title'),
            icon: 'suitcase',
            children: null
          }]
        }
      ]
    };
  }),
})