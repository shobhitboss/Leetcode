package basics.solutions;

import java.util.*;

public class DistinctObjectInList {
    public static void main(String[] args) {
        Set<Student> students = new HashSet<>();

        students.add(new Student("Alice", "A", 5, 12));
        students.add(new Student("Alice", "A", 5, 12));
        students.add(new Student("Alicey", "A", 5, 12));
        students.add(new Student("Bob", "B", 6, 13));
        students.add(new Student("Bob", "B", 6, 13));
        students.add(new Student("Boby", "B", 6, 13));
        students.add(new Student("Charlie", "A", 5, 12));

        for (Student student : students) {
            System.out.println(student.toString());
        }
    }

    public static class Student {
        private String name;
        private String className;
        private int standard;
        private int age;

        public Student(String name, String className, int standard, int age) {
            this.name = name;
            this.className = className;
            this.standard = standard;
            this.age = age;
        }

        // Implement equals() and hashCode() for unique object comparison
        @Override
        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj == null || getClass() != obj.getClass()) {
                return false;
            }
            Student other = (Student) obj;
            return name.equals(other.name) && className.equals(other.className) && standard == other.standard;
        }

        @Override
        public int hashCode() {
            return Objects.hash(name, className, standard);
        }

        @Override
        public String toString() {
            return "Student{" + "name='" + name + '\'' + ", className='" + className + '\'' + ", standard=" + standard + ", age=" + age + '}';
        }
    }
}
