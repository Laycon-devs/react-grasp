const recipes = [
    {
      id: 1,
      name: "Spaghetti Carbonara",
      servings: 4,
      ingredients: ["spaghetti", "eggs", "bacon", "Parmesan cheese", "black pepper"],
      instructions: "Cook spaghetti according to package instructions. In a separate bowl, whisk together eggs, Parmesan cheese, and black pepper. Cook bacon until crispy, then chop into small pieces. Drain spaghetti and immediately toss with egg mixture and bacon. Serve hot.",
      imageUrl: "https://example.com/spaghetti_carbonara.jpg"
    },
    {
      id: 2,
      name: "Chicken Alfredo",
      servings: 6,
      ingredients: ["fettuccine", "chicken breasts", "heavy cream", "Parmesan cheese", "garlic", "butter"],
      instructions: "Cook fettuccine according to package instructions. In a separate pan, cook chicken breasts until no longer pink. In a saucepan, melt butter and sauté minced garlic until fragrant. Add heavy cream and Parmesan cheese, stirring until sauce thickens. Slice cooked chicken and toss with sauce and cooked fettuccine. Serve hot.",
      imageUrl: "https://example.com/chicken_alfredo.jpg"
    },
    {
      id: 3,
      name: "Classic Lasagna",
      servings: 8,
      ingredients: ["lasagna noodles", "ground beef", "tomato sauce", "ricotta cheese", "mozzarella cheese", "Parmesan cheese", "onion", "garlic", "olive oil", "salt", "black pepper"],
      instructions: "Preheat oven to 375°F (190°C). In a skillet, heat olive oil and sauté chopped onion and minced garlic until softened. Add ground beef and cook until browned. Stir in tomato sauce and season with salt and pepper. In a separate bowl, mix ricotta cheese, mozzarella cheese, and Parmesan cheese. Spread a layer of meat sauce in a baking dish, followed by a layer of lasagna noodles and cheese mixture. Repeat layers. Cover with foil and bake for 45 minutes. Uncover and bake for an additional 15 minutes until bubbly and golden. Let stand for 10 minutes before serving.",
      imageUrl: "https://example.com/classic_lasagna.jpg"
    },
    {
      id: 4,
      name: "Margarita Pizza",
      servings: 2,
      ingredients: ["pizza dough", "tomatoes", "fresh mozzarella cheese", "fresh basil leaves", "olive oil", "salt", "black pepper"],
      instructions: "Preheat oven to 475°F (245°C). Roll out pizza dough on a baking sheet. Slice tomatoes and mozzarella cheese thinly. Arrange tomato slices and cheese on the dough. Drizzle with olive oil and season with salt and pepper. Bake for 10-12 minutes until crust is golden and cheese is bubbly. Remove from oven, sprinkle with fresh basil leaves, and serve hot.",
      imageUrl: "https://example.com/margarita_pizza.jpg"
    },
    {
      id: 5,
      name: "Vegetable Stir-Fry",
      servings: 4,
      ingredients: ["mixed vegetables (bell peppers, broccoli, carrots, snow peas, etc.)", "tofu", "soy sauce", "sesame oil", "garlic", "ginger", "cornstarch", "rice"],
      instructions: "Cook rice according to package instructions. In a wok or large skillet, heat sesame oil over medium-high heat. Add minced garlic and ginger, sauté until fragrant. Add mixed vegetables and tofu, stir-fry until vegetables are tender-crisp and tofu is lightly browned. In a small bowl, mix soy sauce and cornstarch, then pour over the vegetables. Cook until sauce thickens. Serve hot over cooked rice.",
      imageUrl: "https://example.com/vegetable_stir_fry.jpg"
    },
    {
      id: 6,
      name: "Chocolate Chip Cookies",
      servings: 24,
      ingredients: ["all-purpose flour", "butter", "brown sugar", "granulated sugar", "eggs", "vanilla extract", "baking soda", "salt", "chocolate chips"],
      instructions: "Preheat oven to 350°F (175°C). In a large bowl, cream together butter, brown sugar, and granulated sugar until smooth. Beat in eggs one at a time, then stir in vanilla extract. Combine flour, baking soda, and salt; gradually mix into the creamed mixture. Fold in chocolate chips. Drop by rounded spoonfuls onto ungreased cookie sheets. Bake for 8 to 10 minutes until edges are lightly golden. Allow cookies to cool on baking sheet for 5 minutes before transferring to a wire rack to cool completely.",
      imageUrl: "https://example.com/chocolate_chip_cookies.jpg"
    },
    {
      id: 7,
      name: "Caesar Salad",
      servings: 4,
      ingredients: ["romaine lettuce", "Caesar dressing", "Parmesan cheese", "croutons", "lemon", "olive oil", "garlic", "Dijon mustard", "anchovy paste", "Worcestershire sauce", "black pepper"],
      instructions: "In a small bowl, whisk together minced garlic, Dijon mustard, anchovy paste, Worcestershire sauce, black pepper, and lemon juice. Slowly whisk in olive oil until well combined. In a large salad bowl, toss torn romaine lettuce with Caesar dressing until evenly coated. Sprinkle with grated Parmesan cheese and croutons. Drizzle with the prepared dressing and toss to combine. Serve immediately.",
      imageUrl: "https://example.com/caesar_salad.jpg"
    },
    {
      id: 8,
      name: "Beef Tacos",
      servings: 6,
      ingredients: ["ground beef", "taco seasoning", "taco shells", "lettuce", "tomatoes", "cheddar cheese", "sour cream", "salsa", "avocado"],
      instructions: "In a skillet, cook ground beef over medium heat until browned. Drain excess fat. Stir in taco seasoning and water according to package instructions. Simmer for 5 minutes. Heat taco shells according to package instructions. Fill each taco shell with seasoned beef, shredded lettuce, diced tomatoes, grated cheddar cheese, sour cream, salsa, and sliced avocado. Serve hot.",
      imageUrl: "https://example.com/beef_tacos.jpg"
    },
    {
      id: 9,
      name: "Vegetarian Chili",
      servings: 8,
      ingredients: ["black beans", "kidney beans", "tomatoes", "onion", "bell pepper", "corn", "vegetable broth", "chili powder", "cumin", "paprika", "salt", "black pepper", "olive oil"],
      instructions: "In a large pot, heat olive oil over medium heat. Add chopped onion and bell pepper, sauté until softened. Stir in chili powder, cumin, paprika, salt, and black pepper. Add diced tomatoes (with juice), black beans, kidney beans, corn, and vegetable broth. Bring to a simmer and cook for 20-25 minutes, stirring occasionally. Adjust seasoning to taste. Serve hot with your favorite toppings.",
      imageUrl: "https://example.com/vegetarian_chili.jpg"
    },
    {
      id: 10,
      name: "Caprese Salad",
      servings: 4,
      ingredients: ["tomatoes", "fresh mozzarella cheese", "fresh basil leaves", "balsamic vinegar", "olive oil", "salt", "black pepper"],
      instructions: "Slice tomatoes and fresh mozzarella cheese into thick slices. Arrange alternating slices of tomato, cheese, and basil leaves on a serving platter. Drizzle with olive oil and balsamic vinegar. Season with salt and black pepper to taste. Serve immediately as a refreshing appetizer or side dish.",
      imageUrl: "https://example.com/caprese_salad.jpg"
    }
  ];
  