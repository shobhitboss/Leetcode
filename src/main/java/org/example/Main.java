package org.example;

import com.opencsv.CSVReader;
import com.opencsv.exceptions.CsvException;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.logging.Log;

import javax.print.attribute.DateTimeSyntax;
import java.io.FileReader;
import java.io.IOException;
import java.sql.SQLOutput;
import java.text.Format;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeFormatterBuilder;
import java.time.temporal.TemporalAccessor;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException, CsvException {
        System.out.println(validateDateFormat("30/04/2022 00:00:00"));


//        CSVReader reader = new CSVReader(new FileReader("/Users/apple/Downloads/report.csv"));
//        List<String[]> fileData = reader.readAll();
//        String[] fileHeader = fileData.get(0);
//        for (int i = 0; i < fileHeader.length; i++) {
//            int currentColIndex = i;
//            if (fileHeader[currentColIndex].toLowerCase().contains("Date".toLowerCase())) {
//                System.out.println("verifying date format in column : " + fileHeader[currentColIndex]);
//                List<String> currentList = new ArrayList<>();
//                fileData.forEach(row -> currentList.add(row[currentColIndex]));
//                String currentCol = currentList.get(0);
//                currentList.remove(0);
//                System.out.println("verifying date format in column : " + currentColIndex);
//                currentList.forEach( item -> System.out.println(validateDateFormat(currentCol, item)));
//            }
//        }
    }

    public static boolean validateDateFormat(String dateToValidate) {

//        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
//        String dateTimeString = String.valueOf(LocalDateTime.parse(dateToValidate));
//        System.out.println(dateTimeString);

        Date date;
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
        sdf.setLenient(false);
        try {
            date = sdf.parse(dateToValidate);
            System.out.println("Current Date in dd-mm-yyyy hh:mm:ss format = " + date.toString() );
        } catch (ParseException e) {
            System.out.println("validation failed for date : " + dateToValidate);
            return false;
        }



//        SimpleDateFormat sdf =new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
//        String dateString=sdf.format(dateToValidate);
//        System.out.println(dateString);
        return true;
    }
}