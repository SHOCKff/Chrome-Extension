







# Chrome-Extension
Project Description – WebTimeTracker Chrome Extension
The WebTimeTracker Chrome Extension is a smart productivity tool designed to help users monitor and analyze the time they spend on different websites during their daily browsing sessions. The goal of this project is to increase awareness of digital habits and boost productivity by categorizing web activity as either productive (such as coding platforms or educational sites) or unproductive (such as social media or entertainment sites), and providing insightful analytics through a clean and simple dashboard.

This extension works by running a background script that continuously listens to the active tab changes in the Chrome browser. It records the domain name of the currently active website and logs how long the user stays on that particular site. When the user switches to another tab or website, the extension calculates the duration spent on the previous tab and sends that data to a backend server. The server is responsible for securely storing and organizing all time logs per user.

The backend of this project is built using Node.js and Express, with MongoDB used as the database to store user activity logs. Each log contains information such as the domain name, time spent, the timestamp, and the user’s ID. This data can later be fetched and used to display visual analytics.

On the frontend, users can open the dashboard from the Chrome extension popup to view a visual breakdown of their productivity. The dashboard is built using HTML, CSS, and JavaScript with the help of the Chart.js library to render pie charts or bar graphs that show how much time was spent on different websites. Sites are automatically categorized based on a JSON configuration file containing lists of “productive” and “unproductive” domains. This helps users quickly understand where their time is being used wisely and where it might be getting wasted.

To further enhance usefulness, the project also includes the feature of weekly productivity reports. These reports are automatically generated and sent to the user’s email every week using tools like node-cron (for scheduling) and nodemailer (for sending emails). The report summarizes how much time the user spent on each site, highlights trends over the week, and gives a simple productivity score based on the ratio of productive to unproductive time.

This tool can be very helpful for students, developers, remote workers, and anyone who wants to improve their focus. Unlike traditional time tracking tools that require manual input, WebTimeTracker runs in the background without interrupting the user, ensuring accurate and effortless time logging. Since the extension is lightweight and built using Manifest V3, it is efficient and secure, aligning with the latest Chrome extension development standards.

In conclusion, WebTimeTracker is a complete, full-stack solution for personal productivity analysis. It combines browser automation, real-time time tracking, backend storage, and insightful data visualization in a simple and accessible format. The project showcases the power of browser extensions in improving digital well-being and highlights how a combination of front-end, back-end, and database technologies can be used to build real-world productivity tools.
