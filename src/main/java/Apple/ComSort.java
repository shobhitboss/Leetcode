package Apple;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ComSort {

    public static void main(String[] args) {
        List<Person> list = new ArrayList<>();

        list.add(new Person("Rohit", 11));
        list.add(new Person("Rohit", 12));
        list.add(new Person("Rohit", 13));
        list.add(new Person("Mohit", 11));
        list.add(new Person("Shobhit", 11));
        list.add(new Person("Lohit", 11));

        System.out.println(list);

        Collections.sort(list, (p1, p2) -> p1.age == p2.age ? (p1.name).compareTo(p2.name) : (p1.age > p2.age ? 1 : -1));

        System.out.println(list);
    }

    static class Person {
        private String name;
        private int age;

        public Person(String name, int age) {
            this.name = name;
            this.age = age;
        }

        @Override
        public String toString() {
            return "Person{" +
                    "name='" + name + '\'' +
                    ", age=" + age +
                    '}';
        }
    }
}
