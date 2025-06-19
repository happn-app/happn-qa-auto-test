##  UI Test Project Location

The UI test project is located in a **Git submodule**:

📁 **Folder:** `happn-qa-auto-test`  
**Repo:** [https://github.com/datta2015/happn-qa-auto-test](https://github.com/datta2015/happn-qa-auto-test)

###  Cloning with Submodules

To clone the main project **with the submodule included**, use:

```bash
git clone --recurse-submodules <main-repo-url>
```

Or, if you already cloned the repo:

```bash
git submodule update --init --recursive
```

### 📂 Accessing the Project

After cloning, navigate to the test project:

```bash
cd happn-qa-auto-test
```

>  If the folder appears empty or unclickable on GitHub, it’s because GitHub does not display submodules unless the commit exists on the default branch. The code is still fully accessible via Git.
---

## Test Folder Structure

All UI tests are organized under the `tests/` folder using the **Page Object Model (POM)** pattern.

 **Folder:** `tests/`  
 Each page and component has its own object model for better maintainability and scalability.

> Example structure:
```
tests/
├── pages/         # Page objects
├── locators/      # Element locators
├── steps/         # Step definitions for tests
├── features/      # Gherkin feature files
├── utils/         # Test utilities
└── support/       # World/context setup
```

This structure helps ensure clean separation of test logic and UI structure.

## Run the test
npm test
