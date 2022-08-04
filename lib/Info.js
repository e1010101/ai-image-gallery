function makeName(name, generatedBy) {
  return "/images/" + generatedBy + "/" + name;
}

export const Generators = ["DALL-E 2", "Midjourney", "starryai", "Nightcafe"];

export const Info = [
  // DALL-E 2
  {
    image: makeName("/ceramicclown.webp", "dalle2"),
    generatedBy: "DALL-E 2",
    promptText:
      "a terrifying ceramic clown, 14mm photograph, studio lighting, creepy and ominous",
  },
  {
    image: makeName("/creepyclown.webp", "dalle2"),
    generatedBy: "DALL-E 2",
    promptText:
      "photograph of an evil, creepy clown from distance, poor lighting, terrifying, haunting",
  },
  {
    image: makeName("/doll.webp", "dalle2"),
    generatedBy: "DALL-E 2",
    promptText:
      "a wide shot of a tall, humanoid doll with holes for eyes, dramatic lighting, very very creepy",
  },
  {
    image: makeName("/noodles.webp", "dalle2"),
    generatedBy: "DALL-E 2",
    promptText:
      "a delicious-looking plate of Singaporean wanton noodles, 3 michelin stars, award-winning food photography",
  },
  {
    image: makeName("/penguin.webp", "dalle2"),
    generatedBy: "DALL-E 2",
    promptText:
      "a cute emperor penguin, children's storybook illustration, hand-drawn",
  },
  {
    image: makeName("/supergirl.webp", "dalle2"),
    generatedBy: "DALL-E 2",
    promptText: "supergirl, hyperrealistic VFX render",
  },
  {
    image: makeName("/teddy.webp", "dalle2"),
    generatedBy: "DALL-E 2",
    promptText:
      "a teddy bear counting marbles, children's storybook illustration",
  },
  {
    image: makeName("/timestops.webp", "dalle2"),
    generatedBy: "DALL-E 2",
    promptText: "time comes to a standstill, oil painting by René Magritte",
  },
  // MIDJOURNEY
  {
    image: makeName("/alien.webp", "midjourney"),
    generatedBy: "Midjourney",
    promptText: "a humanoid alien, warlord, destroyer, oil painting",
  },
  {
    image: makeName("/alienBio.webp", "midjourney"),
    generatedBy: "Midjourney",
    promptText:
      "alien anatomy, blueprints, colored scribbles and text, sketch, biology",
  },
  {
    image: makeName("/alienBook.webp", "midjourney"),
    generatedBy: "Midjourney",
    promptText:
      "Magic book of aliens on an old alchemy desk with bioluminescent potions, text, photorealistic, colorful, detailed, 8k 3D, species, magical",
  },
  {
    image: makeName("/apocalypse.webp", "midjourney"),
    generatedBy: "Midjourney",
    promptText: "the end of civilisation, gloomy, apocalyptic",
  },
  {
    image: makeName("/apples.webp", "midjourney"),
    generatedBy: "Midjourney",
    promptText: "two apples on a white table, cubism",
  },
  {
    image: makeName("/atlantis.webp", "midjourney"),
    generatedBy: "Midjourney",
    promptText: "atlantis in the sky, awe-inspiring, beautiful",
  },
  {
    image: makeName("/balloon.webp", "midjourney"),
    generatedBy: "Midjourney",
    promptText:
      "a light blue balloon floating through an empty field, surrealism",
  },
  {
    image: makeName("/castle.webp", "midjourney"),
    generatedBy: "Midjourney",
    promptText:
      "a majestic, visually stunning castle on a hill at sunrise, the meaning of beauty, Illustration, Rays of Shimmering Light",
  },
  {
    image: makeName("/city.webp", "midjourney"),
    generatedBy: "Midjourney",
    promptText: "a starry sky over an empty city, beautiful",
  },
  {
    image: makeName("/coinsman.webp", "midjourney"),
    generatedBy: "Midjourney",
    promptText: "a man with a bag of coins, photo from 1843",
  },
  {
    image: makeName("/cyberpirate.webp", "midjourney"),
    generatedBy: "Midjourney",
    promptText: "a pirate from the future, cyberpunk",
  },
  {
    image: makeName("/demonscroll.webp", "midjourney"),
    generatedBy: "Midjourney",
    promptText:
      "ancient scroll drawings depicting demons, blueprints, colored scribbles and text, sketch, geometry, physics, biology",
  },
  {
    image: makeName("/dogshoe.webp", "midjourney"),
    generatedBy: "Midjourney",
    promptText: "a dog that looks like a shoe, uncanny, Charcoal Art",
  },
  {
    image: makeName("/dragondrawing.webp", "midjourney"),
    generatedBy: "Midjourney",
    promptText: "a hideous dragon, medival manuscript drawing",
  },
  {
    image: makeName("/end.webp", "midjourney"),
    generatedBy: "Midjourney",
    promptText:
      "the end of time, horrifying, depressing, gloomy, trending on Artstation",
  },
  {
    image: makeName("/factory.webp", "midjourney"),
    generatedBy: "Midjourney",
    promptText: "an abandoned factory, dytopian, synthwave",
  },
  {
    image: makeName("/flower1.webp", "midjourney"),
    generatedBy: "Midjourney",
    promptText:
      "a beautiful futuristic garden with many unknown flowers, synthwave, digital art, 8K VFX render",
  },
  {
    image: makeName("/flowerfield.webp", "midjourney"),
    generatedBy: "Midjourney",
    promptText:
      "An illustration of a huge dandelion farm, huge redwoods in the background, golden hour, blue skies, HD digital art, artstation",
  },
  {
    image: makeName("/flowerman.webp", "midjourney"),
    generatedBy: "Midjourney",
    promptText:
      "a man with a flower as a face, comic book illustration, bright colors",
  },
  {
    image: makeName("/grim.webp", "midjourney"),
    generatedBy: "Midjourney",
    promptText:
      "the grim reaper in futuristic armor, cyberpunk, highly-detailed",
  },
  {
    image: makeName("/island.webp", "midjourney"),
    generatedBy: "Midjourney",
    promptText:
      "a deserted island with interesting alien plants, hyperrealistic VFX render",
  },
  {
    image: makeName("/juice.webp", "midjourney"),
    generatedBy: "Midjourney",
    promptText: "a glass of orange juice, 3D render, low-poly",
  },
  {
    image: makeName("/lab.webp", "midjourney"),
    generatedBy: "Midjourney",
    promptText:
      "Scientific Laboratory, Room, High Detail, Horror, Future, Midjourney",
  },
  {
    image: makeName("/man.webp", "midjourney"),
    generatedBy: "Midjourney",
    promptText: "creepy, uncanny",
  },
  {
    image: makeName("/minion.webp", "midjourney"),
    generatedBy: "Midjourney",
    promptText: 'A minion from "Despicable Me", by Andy Warhol',
  },
  {
    image: makeName("/monstergirl.webp", "midjourney"),
    generatedBy: "Midjourney",
    promptText: "uncanny, creepy",
  },
  {
    image: makeName("/muscle.webp", "midjourney"),
    generatedBy: "Midjourney",
    promptText: "muscular human, digital art, 8K VFX render",
  },
  {
    image: makeName("/mushroom.webp", "midjourney"),
    generatedBy: "Midjourney",
    promptText: "an alien mushroom, vintage illustration from an old book",
  },
  {
    image: makeName("/newspaper.webp", "midjourney"),
    generatedBy: "Midjourney",
    promptText:
      "a man reading the newspaper as he drinks coffee, still life, watercolor",
  },
  {
    image: makeName("/orange.webp", "midjourney"),
    generatedBy: "Midjourney",
    promptText: "a orange and cabbage hybrid, vintage botanical drawing",
  },
  {
    image: makeName("/pastel.webp", "midjourney"),
    generatedBy: "Midjourney",
    promptText: "pastel colors, geometric, abstract, 8k rendering",
  },
  {
    image: makeName("/pencilTribal.webp", "midjourney"),
    generatedBy: "Midjourney",
    promptText: "a tribal warlord, pencil sketch",
  },
  {
    image: makeName("/pirate.webp", "midjourney"),
    generatedBy: "Midjourney",
    promptText: "a pirate, cubism, oil painting",
  },
  {
    image: makeName("/plague.webp", "midjourney"),
    generatedBy: "Midjourney",
    promptText: "the plague spreads across the land, depressing, apocalyptic",
  },
  {
    image: makeName("/prince.webp", "midjourney"),
    generatedBy: "Midjourney",
    promptText: "a cyborg prince in battle, 8K highly-detailed render",
  },
  {
    image: makeName("/skyman.webp", "midjourney"),
    generatedBy: "Midjourney",
    promptText: "a humanoid figure shrouded by clouds, sunbeams, awesome",
  },
  {
    image: makeName("/time.webp", "midjourney"),
    generatedBy: "Midjourney",
    promptText: "a clock, minimal, Francis Picabia - DADA Graphic , Front 242",
  },
  {
    image: makeName("/tree.webp", "midjourney"),
    generatedBy: "Midjourney",
    promptText:
      "A beautiful depressing realism painting of a lonely tree standing alone in a field of wheat during an overcast cloudy day, 4k, award winning painting, gustave courbet, Studio Ghibli",
  },
  {
    image: makeName("/tribal.webp", "midjourney"),
    generatedBy: "Midjourney",
    promptText: "a man with a tribal mask, cyberpunk, 8K VFX render",
  },
  {
    image: makeName("/wasteland.webp", "midjourney"),
    generatedBy: "Midjourney",
    promptText:
      "a barren wasteland, gloomy and desolate, digital art, 8K VFX render",
  },
  {
    image: makeName("/yellow.webp", "midjourney"),
    generatedBy: "Midjourney",
    promptText: "the idea of yellow, abstract surrealist illustration",
  },
  {
    image: makeName("/yellowFrancis.webp", "midjourney"),
    generatedBy: "Midjourney",
    promptText:
      "yellow, minimal, Francis Picabia - DADA Graphic, Front 242, Pop art screen print, TATE galleries",
  },
  // NIGHTCAFE
  {
    image: makeName("/nebula.webp", "nightcafe"),
    generatedBy: "Nightcafe",
    promptText: "cosmic nebula explosion",
  },
  // STARRYAI
  {
    image: makeName("/creepy.webp", "starryai"),
    generatedBy: "starryai",
    promptText:
      "a creepy animatronic, uncanny valley, poor lighting, Seb Mckinnon",
  },
  {
    image: makeName("/eyeball.webp", "starryai"),
    generatedBy: "starryai",
    promptText: "eyeball, horror theme, photorealistic, Yanjun Cheng",
  },
  {
    image: makeName("/oldgod.webp", "starryai"),
    generatedBy: "starryai",
    promptText: "great old god, terrifying, monstrous, horror, Lovecraftian",
  },
  {
    image: makeName("/timeStarry.webp", "starryai"),
    generatedBy: "starryai",
    promptText: "The end of time, Artstation",
  },
];
