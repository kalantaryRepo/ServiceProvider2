package sp.spring.vue.Entity;

import lombok.Getter;
import lombok.Setter;
import sp.spring.vue.enums.UserStatus;

import javax.persistence.*;
import java.util.Date;

@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
@Getter
@Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private String firstName;

    @Column
    private String lastName;

    @Column(unique = true)
    private String email;

    @Column(length = 8)
    private String password;

    @JoinColumn
    private UserStatus userStatus;

    @Column
    private Date RegistrationDate;
}
