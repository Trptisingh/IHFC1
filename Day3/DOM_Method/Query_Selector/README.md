# 🚗 Highlight Driver Seat — JavaScript + CSS Example

This project demonstrates how to **select and style HTML elements dynamically** using **JavaScript** and **CSS**.

---

## 🗂️ Files
| File | Description |
|------|--------------|
| **index.html** | The main HTML page that links CSS and JavaScript |
| **style.css** | Contains all the visual styling for the page |
| **script.js** | JavaScript file that modifies the driver seat element |
| **README.md** | Explains the project purpose and usage |

---

## 🧠 What You’ll Learn
- Selecting HTML elements using `querySelector()`
- Changing styles dynamically with JavaScript
- Updating text and font size
- Using hover effects with smooth transitions in CSS

---

## ⚙️ How It Works
1. The HTML contains a `div` element with the class `.driverSeat`.
2. JavaScript selects it using:
   ```javascript
   const driverSeat = document.querySelector(".driverSeat");
````

3. The script then:

   * Increases font size to **30px**
   * Changes background color to **light blue**
   * Updates the text to **"Driver Seat!"**

---

## ▶️ How to Run

1. Save all files (**index.html**, **style.css**, **script.js**, and **README.md**) in the same folder.
2. Open `index.html` in your web browser.
3. (Optional) Open **Inspect → Console** to view debug messages.

---

## 💡 Expected Output

When you open the page:

* The “Driver Seat” box is highlighted in **light blue**.
* Text becomes larger and displays **"Driver Seat!"**
* On hover, the box **smoothly enlarges** using CSS transitions.

---

## 🧩 Summary

| Concept           | Description                                       |
| ----------------- | ------------------------------------------------- |
| `querySelector()` | Selects the first element matching a CSS selector |
| `.style`          | Changes CSS styles dynamically with JavaScript    |
| `.textContent`    | Updates visible text inside an element            |
| `:hover`          | Adds interactivity using CSS hover effects        |
| `transition`      | Makes style changes smooth and animated           |

```

