package datastructure;

import java.util.ArrayList;
import java.util.List;

public class Library {
    List<Book> bookLibrary = new ArrayList<>();

    public static void main(String[] args) {
        Library libs = new Library();
        Book b1 = new Book(1, "A", "This1", true);
        Book b2 = new Book(2, "B", "This2", true);
        Book b3 = new Book(3, "C", "This3", true);
        Book b4 = new Book(4, "D", "This4", false);
        libs.bookLibrary.add(b1);
        libs.bookLibrary.add(b2);
        libs.bookLibrary.add(b3);
        libs.bookLibrary.add(b4);

        libs.printLibrary();

        libs.deleteBook("hit");
        libs.printLibrary();
    }

    public void addBook(Book book) {
        bookLibrary.add(book);
    }

    public void deleteBook(String name) {
        int i = 0;
        for (i = 0; i < bookLibrary.size(); i++) {
            if (bookLibrary.get(i).name.equals(name)) {
                System.out.println("Book found at index : " + i);
                break;
            }
        }
        if (i < bookLibrary.size())
            bookLibrary.remove(i);
    }

    public void printLibrary() {
        System.out.println("Below books are available in Library - ");
        for (Book book : bookLibrary)
            System.out.println(book.toString());
    }

    static class Book {
        int id;
        String name;
        String author;
        boolean isAvailable;

        public Book(int id, String name, String author, boolean isAvailable) {
            this.id = id;
            this.name = name;
            this.author = author;
            this.isAvailable = isAvailable;
        }

        @Override
        public String toString() {
            return "Book{" +
                    "id=" + id +
                    ", name='" + name + '\'' +
                    ", author='" + author + '\'' +
                    ", isAvailable=" + isAvailable +
                    '}';
        }
    }
}

