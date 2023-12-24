import { Serializer as ТоварSerializer } from
  '../mixins/regenerated/serializers/i-i-s-dlya-prilozheniya-товар';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТоварSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
