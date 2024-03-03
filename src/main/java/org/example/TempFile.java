package org.example;

import com.manybrain.mailinator.client.MailinatorClient;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;

import java.util.List;
import java.util.Set;

public class TempFile {
    public static void main(String[] args) {
        String url = "https://dev-vendor.dpworld.com/en/ili";
        By firstTeamScore = By.xpath("//button");

        DesiredCapabilities caps = new DesiredCapabilities();
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--start-maximized");
        caps.setCapability(ChromeOptions.CAPABILITY, options);

        WebDriver driver = new ChromeDriver(options);
        driver.get(url);

        Set<String> windows = driver.getWindowHandles();
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
        List<WebElement> firstTeam = driver.findElements(firstTeamScore);
        System.out.println("buttons : ");
        firstTeam.forEach(i -> System.out.println(i.getText()));

        firstTeam.get(firstTeam.size() - 1).click();

        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
        driver.quit();
    }
}
