
# GitHub Project Setup via Terminal

This guide explains how to initialize a Git project locally and push it to a GitHub repository using terminal commands.

---

## ✅ 1. Prerequisites

Make sure Git is installed:

```bash
git --version
```

If not installed:

- **Ubuntu/Debian**:
  ```bash
  sudo apt install git
  ```
- **macOS**:
  ```bash
  brew install git
  ```

---

## 🪪 2. Configure Git User

Set your Git identity (used for commits):

```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

---

## 📁 3. Initialize a Local Repository

```bash
mkdir my-project
cd my-project
git init
```

---

## 📄 4. Add a File and Commit

```bash
echo "# My Project" > README.md
git add .
git commit -m "Initial commit"
```

---

## ☁️ 5. Create a GitHub Repository

Go to [https://github.com](https://github.com)  
→ Click **“+”** → **“New repository”**  
→ Enter repository name and click **Create**.

---

## 🔗 6. Connect to Remote Repository

**Using HTTPS**:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
```

**Or using SSH**:

```bash
git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO.git
```

---

## 🚀 7. Push to GitHub

Rename default branch to `main` and push:

```bash
git branch -M main
git push -u origin main
```

> If prompted, enter your GitHub **username** and **personal access token** (instead of password).

---

## ⚠️ 8. Handling `rejected: non-fast-forward` Error

If you see this error:

```
! [rejected] main -> main (non-fast-forward)
```

It means the remote branch has changes your local branch doesn't. Fix it with:

```bash
git pull origin main --rebase
git push -u origin main
```

### 🛑 Optional: Force Push (Destructive)

If you're sure the remote changes can be overwritten:

```bash
git push -u origin main --force
```

> ⚠️ **Warning**: This will overwrite the remote repository. Use only if you're not working with collaborators.

---
