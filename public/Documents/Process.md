# Aniruddh Ravipati's Portfolio
A website to showcase my work as an interaction designer! This is the third version the portfolio within a year. Build,Test, Repeat!

This is also serves as a way to commit to my multi-disciplinary side on a deeper level. This website shall grow to include not just product design work but also my work at CIID, and other future art and design works.

## Process 

### Step 1 : Verplank Model 

Verplank model is a well-known model within Interaction Design theory which helps clarify the core interaction for the product [Here is a pdf by Bill Verplank himself that explains how to use this framework](http://www.billverplank.com/IxDSketchBook.pdf)  

![](../Portfolio%20v3/Verplank%20Framework.jpg)

The key idea behind the metaphor - *opening a gift* - is not a value judgement on the quality of my work but rather it speaks to the aesthetic of the interaction itself. Consider all that a wrapped present conveys - it contains something that is for you to see, however it is hidden away by ribbon and wrap. 

This particular metaphor seems to fit in with how I wanted to convey information - each layer of information led to deeper information unlocked by the interactions. The interactions themselves would take inspiration from the methaphor - one pulls at the ribbon and then removes the wrap - two interactions that would work with each other to reveal a layer that would reveal more information. 

### Step 2 : Wireframes

With this step, I wanted to experiment with the aesthetics of the would-be website and how the layers would be presented. If we were sticking to the metaphor (and we are straining it a bit here), this is the stage where one decides which color the wrap will be, what patterns will it have on it, is it shiny?, which knot to use for the ribbon? 

![](../Portfolio%20v3/Variations.png)

I liked the last one - it was simple but had space for some dynamic backgrounds that would add a certain shine to the portfolio. The next step was to figure out the UX for this style.

### Step 2 : UX 
The UX of this project will go through several changes as we go through the cycle. For the first iteration, the task is to take the chosen wireframe from Step 2 and extrapolate the initial interactions. 
![](UX%20Photos/Brief%20About-1.png)
![](UX%20Photos/Brief%20About-2.png)
![](UX%20Photos/Brief%20About.png)
![](UX%20Photos/Project%20Info.png)

### Step 3: Building the Wireframe in React
For building this project, I chose to use React, along with [React Router](https://reactrouter.com/en/main) (which I used for the first time!). I'd learnt React in the [Scrimba course](https://scrimba.com/learn/learnreact) taught by [Bob Ziroll](https://twitter.com/bobziroll?s=20) and built [some](https://github.com/anirudhravipati/notes-app-react) [basic]() applications as a result. With this project I want to take my command of the framework futher.

![](Code%20Process%20/code.png) 

At this point, I should mention that I chose to start building a wireframe since I wanted to get a feel for the code and start learing right away. Further, I believe that to complement the core interactions, I had to first find out what I can do with the available tools. 

### Experiments with Animation 
Now comes the fun part! I've always been fascinated by animations in the web and resolved to learn it with this project. To that end, I chose to use [Framer Motion](https://www.framer.com/motion/). The reason for why I chose this over say, [Anime JS](https://animejs.com/) or [React Spring](https://www.react-spring.dev/) is simple, I started with Framer Motion first. The first step is to animate the hover transitions and swap to custom cursor in the home page. 