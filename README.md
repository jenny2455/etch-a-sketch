Name of the game is bit by bit. This project was really fun yet challenging and I learned some now techniques and also how to troubleshoot. I practiced creating functions to end up with cleaner looking code. 

Some general things I learned:
1. Solve 1 tiny problem at a time and you will solve the entire project in no time.
2. Sometimes it helps to walk way for a bit. I did this project over 3 days, spending 2-3 hours per day. When I got to a point where I was stuck and really not doing anything useful, I would pause for the day. The next day I went back to the project, I solved my issue within 20 minutes. No idea why, but it worked both times I did this. I think my mind gets fogged and I just end up doing random things which is not productive.
3. Console log! Sometimes I don't know what to console log, it isn't obvious to me. So i start console logging whatever I think is related to the function to see where the issue is. For example, as I added more eventlisteners and buttons, my querySelectorAll were all of a sudden returning empty nodelists which I found out through console logging. 
4. Take my time. Because I didn't allow myself to get stressed, I enjoyed the process more. 
5. I should have the readME open and write notes in it, instead of a doc and deleting it. 



A couple issues I had that took time to solve:
- Getting the random numbers to turn into the rgb. Creating the rgb formula was easy, but I was having issues setting that random number to equal the background color.  Ultimately it was very simple, and console logging helped me to see what was happening. I used backticks and the ${} to pull my random numbers into a rgb format that could be set to the background color. 
- I am not good at selecting the div I want to target and that came up alot in creating my 
clearGrid function and my cell color functions. I got the 2 colorways working with a single grid, but then when I added the 2 grid size functionality all of a sudden neither colorways worked. I backtracked and noticed that when I had one individual grid hardcoded, the colorway worked. Then when I activated both grid sizes using my buttons, they stopped working. For reasons I'm still not clear on, admittedly, my const variables were now creating empty nodelists for my cells, so I could not reach them to change the color. I console logged a couple things, including console logging the divs that I created and noticed that I although I had set the id attribute of each div to cell, I now had to access them via div#container. Why? I'm really not sure. But it worked. 
- Then my clearGrid stopped working. It was using the same cell const that I had greated globally, except now it was return an empty node is. So I lost access to the cells. On a whim I decided to just rewrite that original global variable into my clearGrid function aannnnd it worked. 