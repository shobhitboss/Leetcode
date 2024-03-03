package org.example;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.List;

public class Code3 {
    public static void main(String[] args) throws InterruptedException {
        String url = "https://www.espncricinfo.com/series/icc-cricket-world-cup-2023-24-1367856/india-vs-new-zealand-21st-match-1384412/full-scorecard";
        By firstTeamScore = By.xpath("(//div[contains(@class,'rounded-lg')]//table[contains(@class,'scorecard')])[1]//tbody/tr/td[3]");
        By secondTeamScore = By.xpath("(//div[contains(@class,'rounded-lg')]//table[contains(@class,'scorecard')])[2]//tbody/tr/td[3]");
        int teamTotal = 0;

        WebDriver driver = new ChromeDriver();
        driver.get(url);
        Thread.sleep(500);
        List<WebElement> firstTeam = driver.findElements(firstTeamScore);
        System.out.println("Score Details : ");
        firstTeam.forEach(i -> System.out.println(i.getText()));
        for (int i = 0; i < firstTeam.size() - 2; i++) {
            teamTotal += Integer.parseInt(firstTeam.get(i).getText());
        }
        int totalScore = Integer.parseInt(firstTeam.get(firstTeam.size() - 1).getText());

        if (totalScore == teamTotal)
            System.out.println("Score Matching");
        else
            System.out.println("Score not Matching");

        driver.quit();
    }
}
