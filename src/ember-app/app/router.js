import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-test12-заказ-l');
  this.route('i-i-s-test12-заказ-e',
  { path: 'i-i-s-test12-заказ-e/:id' });
  this.route('i-i-s-test12-заказ-e.new',
  { path: 'i-i-s-test12-заказ-e/new' });
  this.route('i-i-s-test12-клиент-l');
  this.route('i-i-s-test12-клиент-e',
  { path: 'i-i-s-test12-клиент-e/:id' });
  this.route('i-i-s-test12-клиент-e.new',
  { path: 'i-i-s-test12-клиент-e/new' });
  this.route('i-i-s-test12-оповещения-l');
  this.route('i-i-s-test12-оповещения-e',
  { path: 'i-i-s-test12-оповещения-e/:id' });
  this.route('i-i-s-test12-оповещения-e.new',
  { path: 'i-i-s-test12-оповещения-e/new' });
  this.route('i-i-s-test12-сотрудник-l');
  this.route('i-i-s-test12-сотрудник-e',
  { path: 'i-i-s-test12-сотрудник-e/:id' });
  this.route('i-i-s-test12-сотрудник-e.new',
  { path: 'i-i-s-test12-сотрудник-e/new' });
  this.route('i-i-s-test12-товары-l');
  this.route('i-i-s-test12-товары-e',
  { path: 'i-i-s-test12-товары-e/:id' });
  this.route('i-i-s-test12-товары-e.new',
  { path: 'i-i-s-test12-товары-e/new' });
});

export default Router;
