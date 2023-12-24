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
          caption: i18n.t('forms.application.sitemap.приемка-товара.caption'),
          title: i18n.t('forms.application.sitemap.приемка-товара.title'),
          children: [{
            link: 'i-i-s-dlya-prilozheniya-поставщики-l',
            caption: i18n.t('forms.application.sitemap.приемка-товара.i-i-s-dlya-prilozheniya-поставщики-l.caption'),
            title: i18n.t('forms.application.sitemap.приемка-товара.i-i-s-dlya-prilozheniya-поставщики-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-dlya-prilozheniya-акт-приемки-l',
            caption: i18n.t('forms.application.sitemap.приемка-товара.i-i-s-dlya-prilozheniya-акт-приемки-l.caption'),
            title: i18n.t('forms.application.sitemap.приемка-товара.i-i-s-dlya-prilozheniya-акт-приемки-l.title'),
            icon: 'tags',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.заказ.caption'),
          title: i18n.t('forms.application.sitemap.заказ.title'),
          children: [{
            link: 'i-i-s-dlya-prilozheniya-отпуск-материала-l',
            caption: i18n.t('forms.application.sitemap.заказ.i-i-s-dlya-prilozheniya-отпуск-материала-l.caption'),
            title: i18n.t('forms.application.sitemap.заказ.i-i-s-dlya-prilozheniya-отпуск-материала-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-dlya-prilozheniya-заказ-l',
            caption: i18n.t('forms.application.sitemap.заказ.i-i-s-dlya-prilozheniya-заказ-l.caption'),
            title: i18n.t('forms.application.sitemap.заказ.i-i-s-dlya-prilozheniya-заказ-l.title'),
            icon: 'tags',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.каталог-товаров.caption'),
          title: i18n.t('forms.application.sitemap.каталог-товаров.title'),
          children: [{
            link: 'i-i-s-dlya-prilozheniya-товар-l',
            caption: i18n.t('forms.application.sitemap.каталог-товаров.i-i-s-dlya-prilozheniya-товар-l.caption'),
            title: i18n.t('forms.application.sitemap.каталог-товаров.i-i-s-dlya-prilozheniya-товар-l.title'),
            icon: 'folder open',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.доп-справочники.caption'),
          title: i18n.t('forms.application.sitemap.доп-справочники.title'),
          children: [{
            link: 'i-i-s-dlya-prilozheniya-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.доп-справочники.i-i-s-dlya-prilozheniya-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.доп-справочники.i-i-s-dlya-prilozheniya-сотрудники-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-dlya-prilozheniya-складское-место-l',
            caption: i18n.t('forms.application.sitemap.доп-справочники.i-i-s-dlya-prilozheniya-складское-место-l.caption'),
            title: i18n.t('forms.application.sitemap.доп-справочники.i-i-s-dlya-prilozheniya-складское-место-l.title'),
            icon: 'phone',
            children: null
          }]
        }
      ]
    };
  }),
})