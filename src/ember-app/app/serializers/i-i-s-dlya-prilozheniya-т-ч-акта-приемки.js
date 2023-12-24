import { Serializer as ТЧАктаПриемкиSerializer } from
  '../mixins/regenerated/serializers/i-i-s-dlya-prilozheniya-т-ч-акта-приемки';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТЧАктаПриемкиSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
