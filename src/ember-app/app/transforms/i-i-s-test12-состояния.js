import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СостоянияEnum from '../enums/i-i-s-test12-состояния';

export default FlexberryEnum.extend({
  enum: СостоянияEnum,
  sourceType: 'IIS.Test12.Состояния'
});
