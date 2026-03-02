# Lab-9.1: Component Creation and Props
**Author:** Jameka Haggins 
---

## Reflection Questions
1. How did you handle optional props in your components?
2. What considerations did you make when designing the component interfaces?
3. How did you ensure type safety across your components?
4. What challenges did you face when implementing component composition?

---

I used the question mark syntax (?) in my TypeScript interfaces to mark certain props as optional, like `onClose` or `avatarUrl`. In the actual code, I handled them using conditional rendering. For example, in the `AlertBox`, I used the && operator so the close button only shows up if an `onClose` function is actually provided. For things like boolean flags (e.g., `showEmail`), I usually gave them a default value in the destructuring so the component knows what to do if I forget to pass them in.

My main goal was predictability. I wanted to make sure that if another developer (or future!me) used these components, they wouldn’t have to guess what data type was needed (avoiding the whole "this'll be a future!Me problem thing). I kept the interfaces clean by separating the core data (like the User object) from the UI settings (like `showRole`). This makes the components more flexible, you can pass in a whole user object but still have total control over how much of their info actually gets displayed on the screen.

I relied heavily on TypeScript interfaces. By defining exactly what a Product or `AlertBox` should look like in a central `types/index.ts` file, I made sure that the same rules were followed everywhere. If I tried to pass a number into the message prop of an AlertBox instead of a string, VS Code would immediately give me a red squiggly line. This caught a lot of potential bugs before I even opened my browser to test the app.

The trickiest part was managing the children prop while keeping the layout looking good. Since children can be almost anything, I had to make sure the styling of the parent container was flexible enough to wrap around whatever was put inside it without breaking the design. Though I feel I could've done better with the styling...but what matters is it works, right?
