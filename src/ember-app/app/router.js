import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-dlya-prilozheniya-акт-приемки-l');
  this.route('i-i-s-dlya-prilozheniya-акт-приемки-e',
  { path: 'i-i-s-dlya-prilozheniya-акт-приемки-e/:id' });
  this.route('i-i-s-dlya-prilozheniya-акт-приемки-e.new',
  { path: 'i-i-s-dlya-prilozheniya-акт-приемки-e/new' });
  this.route('i-i-s-dlya-prilozheniya-заказ-l');
  this.route('i-i-s-dlya-prilozheniya-заказ-e',
  { path: 'i-i-s-dlya-prilozheniya-заказ-e/:id' });
  this.route('i-i-s-dlya-prilozheniya-заказ-e.new',
  { path: 'i-i-s-dlya-prilozheniya-заказ-e/new' });
  this.route('i-i-s-dlya-prilozheniya-отпуск-материала-l');
  this.route('i-i-s-dlya-prilozheniya-отпуск-материала-e',
  { path: 'i-i-s-dlya-prilozheniya-отпуск-материала-e/:id' });
  this.route('i-i-s-dlya-prilozheniya-отпуск-материала-e.new',
  { path: 'i-i-s-dlya-prilozheniya-отпуск-материала-e/new' });
  this.route('i-i-s-dlya-prilozheniya-поставщики-l');
  this.route('i-i-s-dlya-prilozheniya-поставщики-e',
  { path: 'i-i-s-dlya-prilozheniya-поставщики-e/:id' });
  this.route('i-i-s-dlya-prilozheniya-поставщики-e.new',
  { path: 'i-i-s-dlya-prilozheniya-поставщики-e/new' });
  this.route('i-i-s-dlya-prilozheniya-складское-место-l');
  this.route('i-i-s-dlya-prilozheniya-складское-место-e',
  { path: 'i-i-s-dlya-prilozheniya-складское-место-e/:id' });
  this.route('i-i-s-dlya-prilozheniya-складское-место-e.new',
  { path: 'i-i-s-dlya-prilozheniya-складское-место-e/new' });
  this.route('i-i-s-dlya-prilozheniya-сотрудники-l');
  this.route('i-i-s-dlya-prilozheniya-сотрудники-e',
  { path: 'i-i-s-dlya-prilozheniya-сотрудники-e/:id' });
  this.route('i-i-s-dlya-prilozheniya-сотрудники-e.new',
  { path: 'i-i-s-dlya-prilozheniya-сотрудники-e/new' });
  this.route('i-i-s-dlya-prilozheniya-товар-l');
  this.route('i-i-s-dlya-prilozheniya-товар-e',
  { path: 'i-i-s-dlya-prilozheniya-товар-e/:id' });
  this.route('i-i-s-dlya-prilozheniya-товар-e.new',
  { path: 'i-i-s-dlya-prilozheniya-товар-e/new' });
});

export default Router;
