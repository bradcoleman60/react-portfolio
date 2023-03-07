# react-portfolio

# **Table of Contents**
1. [Description](#description)
2. [Testing](#testing)
3. [Technology Used and Credits](#technology-used-and-credits)
4. [About the Author](#about-the-author)
5. [License](#license)

Deployed Site: [https://afternoon-badlands-25422.herokuapp.com/](https://afternoon-badlands-25422.herokuapp.com/)



# **Description**

The goal of this project was to create a website to share my projects with potential employers and fellow developers and collaborate on future projects.  This site was created using React and was deployed on GitHub Pages. 

I used handlebars as my rendering agent and took advantage of partials to render blog titles and details.   

Below is a screen shot of the landing home page before log in. 

![screenshot](./public/assets/images/screen_shot_1.jpg)

Below is a screen shot of the home page after log in. Note the "login / register button does not appear, but the logout button does. 

![screenshot](./public/assets/images/screen_shot_2.jpg)

Below is a screen shot of the logged in user's dashboard that allows navigation to and "edit/delete" page for the selected blog post. 

![screenshot](./public/assets/images/screen_shot_3.jpg)

Below is a screen shot of the edit/ delete page.  This retrieves the title and the text of the blog entry and inserts such content into a editable text field.  The user can then submit the edits, delete the blog or cancel and return to the dashboard. 

![screenshot](./public/assets/images/screen_shot_4.jpg)

Below is a screen shot of the modal used to enter a new blog entry with a title and text content.  

![screenshot](./public/assets/images/screen_shot_5.jpg)

Below is a screen shot of the detailed blog rendering that shows the list of comments.  A user can also add a comment to the blog.   

![screenshot](./public/assets/images/screen_shot_6.jpg)


# **Highlighted Code Example**

The following is code that I created that I would like to highlight.  

In this first block I created the....

```



```

The following is the....... 

```


```

# **Testing** 


To test to ensure the code rendered the desired output I iterated a series of tests to ensure that all acceptance criteria were met and documented completion below:

| User Acceptance Criteria | Test Result | 
| ------------- |:-------------| 
|1. WHEN I load the portfolio THEN I am presented with a page containing a header, a section for content, and a footer|**Completed**.  Om log in this is rendered.   |
|2. WHEN I view the header THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio|**Completed**.  This navigation works.   |
|3. WHEN I view the navigation titles THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted|**Completed**.  There is one page where a user can log in our sign up.  |
|4. WHEN I click on a navigation title THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted|**Completed**.  A username and password can be accepted.   |
|5. WHEN I load the portfolio the first time THEN the About Me title and section are selected by default  |
|6. WHEN I am presented with the About Me section THEN I see a recent photo or avatar of the developer and a short bio about them|**Completed**.  This functionality works.   |
|7. WHEN I am presented with the Portfolio section THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository|**Completed**.  This functionality works.    |
|8. WHEN I am presented with the Contact section THEN I see a contact form with fields for a name, an email address, and a message|**Completed**.  This functionality works.  |
|9. WHEN I move my cursor out of one of the form fields without entering text THEN I receive a notification that this field is required|**Completed**.  This functionality works.  |
|10. WHEN I enter text into the email address field THEN I receive a notification if I have entered an invalid email address|**Completed**.  This functionality works.  |
|11. WHEN I am presented with the Resume section THEN I see a link to a downloadable resume and a list of the developer’s proficiencies|**Completed**.  This functionality works.  |
|12. WHEN I view the footer THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)|**Completed**.  This functionality works through the use of a modal.  |



# **Technology Used and Credits**

I used many useful references in completing this project including the following.  In particular, I found the layout of the w3schools reference materials to be extremely intuitive and helpful.  They even have a "try me" feature where elements of code can be reviewed and tested. 


| Technology Used | Resource URL | 
| ------------- |:-------------| 
| <img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"> | [https://git-scm.com/](https://git-scm.com/) | 
| <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> | [https://developer.mozilla.org/en-US/docs/Learn/JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript) |
| <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"> | [https://nodejs.org/en/](https://nodejs.org/en/) |
| <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white"> | [https://dev.mysql.com/doc/refman/8.0/en/](https://dev.mysql.com/doc/refman/8.0/en/) |
| <img src="https://img.shields.io/badge/sequelize-323330?style=for-the-badge&logo=sequelize&logoColor=blue"> | [https://sequelize.org/](https://sequelize.org/) |
| <img src="https://img.shields.io/badge/Handlebars.js-f0772b?style=for-the-badge&logo=handlebarsdotjs&logoColor=black"> | [https://www.npmjs.com/package/handlebars"](https://www.npmjs.com/package/handlebars)|
| <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"> | [https://getbootstrap.com/](https://getbootstrap.com/)|

# **About the Author**

My name is Brad Coleman. I am fairly new to web development but have considered it a hobby for several years and have hacked my way through learning various aspects including php, html and mysql.  I am currently enrolled in the Cal Berkeley Extension Web Development Boot camp and am excited to learn web development more holistically.  I have spent my earlier career working as a corporate controller / CPA.

- [Linkedin Profile](https://www.linkedin.com/in/brad-coleman-109529/)
- [GitHub Repos](https://github.com/bradcoleman60?tab=repositories)


# **License**

MIT License

Copyright (c) 2022 Brad Coleman

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

