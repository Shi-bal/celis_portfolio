let info = {
  name: "Valerie Celis",
  logo_name: "val",
  flat_picture: require("./src/assets/me.png"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "Hi, I'm Valerie Celis, a 3rd-year BSIT student at Caraga State University. I specialize in web design with growing skills in backend development.",
  links: {
    facebook: "https://www.facebook.com/kawaii.valerie",
    github: "https://github.com/Shi-bal",
    telegram: "https://t.me/sso_val?fbclid=IwY2xjawFvKklleHRuA2FlbQIxMAABHd-e6NgctxzGHXKE_ykx0cSeEXSPJFQwIlkPtmGpbIPdg5iTCEkC4FsOGw_aem_mkg_nq2bh5o5Q1uNors63g",
    instagram: "https://www.instagram.com/bb.val143/?igsh=YjQ3MDE5OXhnZG81&fbclid=IwY2xjawFvS-RleHRuA2FlbQIxMAABHX1krgnRIeaiJqp1zxrIB4jQ4-4EFJ419Gdt_JcUfcLOq0U-hhDGr4Ay7w_aem_kwQQEYTv5dlQMgir8ot7Mw",
    resume: "https://docs.google.com/document/d/1KxNM5bKgVVplIQTUC8JGKgtmPlHZ7Mk0KqrpG4aDMQo/edit?usp=sharing",
  },
  education: [
    {
      name: "Caraga State University",
      place: "Ampayon, Butuan City",
      date: "sep, 2022 - present",
      degree: "Bachelor of Science in Information Technology",
      gpa: "1.72",
      description:
        "",
      skills: [
        
        "web programming",
        "UI/UX design",
        "Front-end developing",
      ]
    },
  ],

  experience: [
    {
      name: "University Project - Web Design",
      place: "Butuan City, Philippines",
      date: "August 2023 - October 2023",
      position: "Web Designer",
      description:
        "Completed a university project focused on designing a responsive website. Used Tailwind CSS to ensure the site looked good on various devices. Gathered feedback from classmates and teachers to improve the design and make the site more user-friendly.",
      skills: ["HTML5", "CSS", "Tailwind CSS", "JavaScript", "Responsive Design"]
    },
    
    {
      name: "Personal Project - Portfolio Website",
      place: "Butuan City, Philippines",
      date: "February 2023",
      position: "Web Design Enthusiast",
      description:
        "Created a personal portfolio website to showcase skills and projects. Experimented with animations, transitions, and user interactions, honing skills in CSS and JavaScript. Gained hands-on experience with web design principles and responsive layouts.",
      skills: ["HTML5", "CSS", "JavaScript", "Tailwind CSS", "Personal Branding"]
    }
  ],
  
  
  skills: [
    {
      title: "UX/UI Design",
      info: ["Figma"],
      icon: "fas fa-columns" // Use a stylish icon representing design
    },
    {
      title: "Programming Languages",
      info: ["C", "JavaScript", "Java", "C#"],
      icon: "fas fa-code" // Use the code icon for programming languages
    },
    {
      title: "Front-end Development",
      info: ["HTML", "CSS", "Bootstrap", "Tailwind CSS"],
      icon: "fas fa-laptop" // Use a laptop icon representing web development
    },
    {
      title: "Web Technologies",
      info: ["Vue.js", "Laravel", "Node.js"],
      icon: "fas fa-network-wired" // Use a cogs icon for technologies
    },
  ],
  

  portfolio: [

    {
      name: "UPTREND",
      pictures: [
        {
          img: require("./src/assets/portfolio/uptrend/uptrend.png")
        }
      ],
      technologies: ["Vue Js", "Tailwindcss", "Laravel"],
      category: "Web App",
      date: "October, 2024",
      github:
        "",
      visit: "https://drive.google.com/drive/folders/1AQn73-ZJ9cG94y2_VIsrC4wjsoq7P2nZ?usp=sharing",
      description:
        " Uptrend is an trendy ecommerce for fashion limited edition shoes "
    },
    {
      name: "Movie Guide App",
      pictures: [
        {
          img: require("./src/assets/portfolio/movie guide/1.png")
        }
      ],
      technologies: ["HTML", "CSS", "API"],
      category: "Web App",
      date: "Aug, 2021 - 20 days",
      github:
        "",
      visit: "https://drive.google.com/drive/folders/1AQn73-ZJ9cG94y2_VIsrC4wjsoq7P2nZ?usp=sharing",
      description:
        " A movie guide app, that has search bar for you to search any movie that you want, including the movie plot, cast, and rayings "
    },
    {
      name: "Weather App",
      pictures: [
        {
          img: require("./src/assets/portfolio/weather-app/weatherapp.png")
        }
      ],
      technologies: ["HTML", "CSS", "API"],
      category: "Web App",
      date: "Apr, 2021 - May, 2021",
      github: "",
      visit: "",
      description:
        ""
    },
    
  ],
};

export default info;
