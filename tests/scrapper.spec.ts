// Import Playwright and its types
import { chromium, Page, BrowserContext } from "playwright";

const cookies = [
        {
            "domain": ".amazon.com",
            "expirationDate": 1723718045,
            "hostOnly": false,
            "httpOnly": false,
            "name": "AMCV_7742037254C95E840A4C98A6%40AdobeOrg",
            "path": "/",
            "sameSite": "None",
            "secure": false,
            "session": false,
            "storeId": "0",
            "value": "1585540135%7CMCIDTS%7C19585%7CMCMID%7C68332980467340883802960421199371807006%7CMCAAMLH-1692700444%7C12%7CMCAAMB-1692700444%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1692102845s%7CNONE%7CMCAID%7CNONE%7CvVersion%7C4.4.0",
            "id": 1
        },
        {
            "domain": ".amazon.com",
            "expirationDate": 1727795789.481564,
            "hostOnly": false,
            "httpOnly": false,
            "name": "i18n-prefs",
            "path": "/",
            "sameSite": "None",
            "secure": false,
            "session": false,
            "storeId": "0",
            "value": "USD",
            "id": 2
        },
        {
            "domain": ".amazon.com",
            "expirationDate": 1730829232.240826,
            "hostOnly": false,
            "httpOnly": false,
            "name": "lc-main",
            "path": "/",
            "sameSite": "None",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": "en_US",
            "id": 3
        },
        {
            "domain": ".amazon.com",
            "expirationDate": 1723631693,
            "hostOnly": false,
            "httpOnly": false,
            "name": "regStatus",
            "path": "/",
            "sameSite": "None",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": "pre-register",
            "id": 4
        },
        {
            "domain": ".amazon.com",
            "expirationDate": 1727806981.464321,
            "hostOnly": false,
            "httpOnly": false,
            "name": "session-id",
            "path": "/",
            "sameSite": "None",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": "138-2777282-2253551",
            "id": 5
        },
        {
            "domain": ".amazon.com",
            "expirationDate": 1727806981.464271,
            "hostOnly": false,
            "httpOnly": false,
            "name": "session-id-time",
            "path": "/",
            "sameSite": "None",
            "secure": false,
            "session": false,
            "storeId": "0",
            "value": "2082787201l",
            "id": 6
        },
        {
            "domain": ".amazon.com",
            "expirationDate": 1727976858.874445,
            "hostOnly": false,
            "httpOnly": false,
            "name": "session-token",
            "path": "/",
            "sameSite": "None",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": "mXqYVIdpjoex+6oGa1q3GLmhRpVg+9lFla6yMeslPh6hMHKmuAOxB8tcvchEQW9ID+cJhqpPOM4kraUhjrTtyGYFeRWuP2uK9y8mWCiVIsab08m+JEDOoZa8Ak5vQdpoHj1cSPtOvvzDlz3un9mbZAtkVt2Kg42dNLN7bmYrxWC5YzZKqaQJ5BtDn1vj3HKtufQ+uYW9RLnUQcXzAtfPp/fcMKoI5lg06f4rL6K3Q9f/SAN44eoEnXRJa0HNfgEtlCKvBiTLlQwsdNtS/pPFgKtN9w10KwvN8EHN7pZxLwW2SGmVm1QubSnhFp0R5c1/jWXWZKDLTCT/PWKFhIFHue4yauYlLJK1",
            "id": 7
        },
        {
            "domain": ".amazon.com",
            "expirationDate": 1727795789.481575,
            "hostOnly": false,
            "httpOnly": true,
            "name": "sp-cdn",
            "path": "/",
            "sameSite": "None",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": "\"L5Z9:IN\"",
            "id": 8
        },
        {
            "domain": ".amazon.com",
            "expirationDate": 1727806981.464113,
            "hostOnly": false,
            "httpOnly": false,
            "name": "ubid-main",
            "path": "/",
            "sameSite": "None",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": "134-9325947-4502151",
            "id": 9
        },
        {
            "domain": "www.amazon.com",
            "expirationDate": 1726680859,
            "hostOnly": true,
            "httpOnly": false,
            "name": "csm-hit",
            "path": "/",
            "sameSite": "None",
            "secure": false,
            "session": false,
            "storeId": "0",
            "value": "tb:s-YYTCWXGN7Q5QE1MG36N7|1696440858256&t:1696440859396&adb:adblk_no",
            "id": 10
        },
        {
            "domain": "www.amazon.com",
            "expirationDate": 1698626101,
            "hostOnly": true,
            "httpOnly": false,
            "name": "csm-sid",
            "path": "/",
            "sameSite": "None",
            "secure": false,
            "session": false,
            "storeId": "0",
            "value": "848-6683234-3188971",
            "id": 11
        }
];

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    bypassCSP: true,
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.0.0 Safari/537.36",
  });

  // Add cookies to the context.
  await context.addCookies(cookies);

  const page = await context.newPage();

  try {
    await page.goto("https://www.amazon.com/ZeroWater-Ready-Read-5-Stage-Dispenser");

    // Wait for the element with data-hook="total-review-count" to appear.
    await page.waitForSelector('[data-hook="total-review-count"]');

    // Get the text content of the element, which contains the review count.
    const reviewCountElement = await page.$('[data-hook="total-review-count"]');
    const reviewCount = await reviewCountElement?.innerText();

    // Output the review count to the console.
    console.log(`Total Review Count: ${reviewCount}`);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    // Close the page and context when done.
    await page.close();
    await context.close();
  }
}

// Export the main function
export { main };
