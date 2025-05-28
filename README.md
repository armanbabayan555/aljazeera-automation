# Al Jazeera Automation Tests

This repository contains automation scenarios for the Al Jazeera website using CodeceptJS with WebDriver.

## Most Read Section (Desktop & Mobile)

**Site URL:** https://aljazeera.com/  
**Section:** Most Read

1. **Scenario 1**  
   On **desktop**, verify that the **“Most Read”** section is visible.

2. **Scenario 2**  
   On **desktop**, verify that the **“Most Read”** section contains exactly **10 posts**.

3. **Scenario 3**  
   On **mobile**, verify that the **“Most Read”** section is **not** present.

4. **Scenario 4**  
   On **desktop**, verify that the **“Bypass Block”** menu item for **“Most Read”** works correctly (accessibility).

---

## Livestream Section

**Site URL:** https://aljazeera.com/live  
**Section:** Livestream

1. **Scenario 1**  
   Verify that the **Livestream Player** is visible.

2. **Scenario 2**  
   Verify that the **Switch Player** button is visible within the Livestream Player.

---

## Framework & Setup

This project uses **CodeceptJS** with the **WebDriver** helper and Allure reporting.

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn
- Allure CLI (for report generation)

## Running the Tests

Clean previous outputs

```npm run clean```

Execute the full test suite

```npm test```

## Generate and open Allure report
1) ```npm run report:generate```

2) ```npm run report:open```

OR, alternatively:
```npx allure serve output```

