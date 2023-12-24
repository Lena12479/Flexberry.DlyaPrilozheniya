import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ПолучениеEnum from '../enums/i-i-s-dlya-prilozheniya-получение';

export default FlexberryEnum.extend({
  enum: ПолучениеEnum,
  sourceType: 'IIS.DlyaPrilozheniya.Получение'
});
