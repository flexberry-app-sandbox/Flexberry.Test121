package Test12.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Test12.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Оповещения
 */
@Entity(name = "IISTest12Оповещения")
@Table(schema = "public", name = "Оповещения")
public class Opoveshheniya {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Описание")
    private String описание;

    @Column(name = "МестоВыдачи")
    private String местовыдачи;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Zakaz")
    @Convert("Zakaz")
    @Column(name = "Заказ", length = 16, unique = true, nullable = false)
    private UUID _zakazid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Zakaz", insertable = false, updatable = false)
    private Zakaz zakaz;


    public Opoveshheniya() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getОписание() {
      return описание;
    }

    public void setОписание(String описание) {
      this.описание = описание;
    }

    public String getМестоВыдачи() {
      return местовыдачи;
    }

    public void setМестоВыдачи(String местовыдачи) {
      this.местовыдачи = местовыдачи;
    }


}