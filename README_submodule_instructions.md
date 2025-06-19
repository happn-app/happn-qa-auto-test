##  UI Test Project Location

The UI test project is located in a **Git submodule**:

📁 **Folder:** `happn-qa-auto-test`  
 **Repo:** [https://github.com/datta2015/happn-qa-auto-test](https://github.com/datta2015/happn-qa-auto-test)

### 🔄 Cloning with Submodules

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
