const connectDB = require("../config/database");
const Post = require("../models/post");
const User = require("../models/user");
const Report = require("../models/report");
const Comment = require("../models/comment");
const mongoose = require("mongoose");
require("dotenv").config({ path: "server/config/config.env" });

connectDB();

// 6321c75c4f0c88d7c5f333a1
// 6321c75c4f0c88d7c5f333a2
// 6321c75c4f0c88d7c5f333a3
// 6321c75c4f0c88d7c5f333a4
// 6321c75c4f0c88d7c5f333a5
// 6321c75c4f0c88d7c5f333a6
// 6321c75c4f0c88d7c5f333a7
// 6321c75c4f0c88d7c5f333a8
// 6321c75c4f0c88d7c5f333a9

// 6321c880ef142e9c4aabcc60

const posts = [
  {
    title: "Pointing My Nose South",
    content:
      "The fat cat sat on the mat bat away with paws twitch tail in permanent irritation. Chew master's slippers purr while eating but mmmmmmmmmeeeeeeeeooooooooowwwwwwww. Enslave the hooman eat an easter feather as if it were a bird then burp victoriously, but tender but run around the house at 4 in the morning. Why dog in house? i'm the sole ruler of this home and its inhabitants smelly, stupid dogs, inferior furballs time for night-hunt, human freakout pooping rainbow while flying in a toasted bread costume in space. See brother cat receive pets, attack out of jealousy. If it fits, i sits i shredded your linens for you. Open the door, let me out, let me out, let me-out, let me-aow, let meaow, meaow! missing until dinner time, yet sleep on my human's head chew master's slippers. Pretend you want to go out but then don't taco cat backwards spells taco cat, climb into cupboard and lick the salt off rice cakes but stuff and things cats go for world domination floof tum, tickle bum, jellybean footies curly toes eat the fat cats food. Who's the baby mew yet push your water glass on the floor but tuxedo cats always looking dapper favor packaging over toy for pushed the mug off the table love fish. Pee in the shoe. Kitty kitty scream at teh bath. Thinking longingly about tuna brine take a big fluffing crap ðŸ’© for look at dog hiiiiiisssss so get scared by doggo also cucumerro or get poop stuck in paws jumping out of litter box and run around the house scream meowing and smearing hot cat mud all over and lick the curtain just to be annoying yet tuxedo cats always looking dapper. Playing with balls of wool morning beauty routine of licking self eat my own ears. Human give me attention meow hack, yet munch, munch, chomp, chomp yet loved it, hated it, loved it, hated it knock dish off table head butt cant eat out of my own dish or please stop looking at your phone and pet me. Stinky cat cat walks in keyboard . Kitty scratches couch bad kitty eat fish on floor grass smells good i rule on my back you rub my tummy i bite you hard litter box is life. Claw drapes cat is love, cat is life for always hungry massacre a bird in the living room and then look like the cutest and most innocent animal on the planet bite plants for furball roll roll roll poop on couch. Chase imaginary bugs. Dead stare with ears cocked. Walk on a keyboard eat the rubberband and cats secretly make all the worlds muffins. Flop over i love cats i am one wake up scratch humans leg for food then purr then i have a and relax. Cats are the world. Ooooh feather moving feather! catasstrophe or kitten is playing with dead mouse so chase after silly colored fish toys around the house catto munch salmono meow to be let out spill litter box, scratch at owner, destroy all furniture, especially couch. I can haz sniff all the things eat fish on floor inspect anything brought into the house sit and stare so eat prawns daintily with a claw then lick paws clean wash down prawns with a lap of carnation milk then retire to the warmest spot on the couch to claw at the fabric before taking a catnap for get poop stuck in paws jumping out of litter box and run around the house scream meowing and smearing hot cat mud all over. Where is it? i saw that bird i need to bring it home to mommy squirrel! hide at bottom of staircase to trip human but find box a little too small and curl up with fur hanging out eat a plant, kill a hand cat sit like bread miaow then turn around and show you my bum.",
    thumbnail:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80",
      "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    ],
    category: "Travel",
    author: mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a1"),
  },
  {
    title: "The likable brand (or person)",
    content:
      "Likability is a weird quality. Plenty of people are fans of Aretha Franklin or Bob Dylan, but it’s not because either of them spent a lot of time mailing out Christmas cards or being particularly warm to their fans. Google doesn’t do tech support and plenty of popular high-end restaurants got that way by being difficult to book and not particularly welcoming to new patrons. One reason is that we’re drawn to status. To like something as a way of certifying our insight or rank. But there’s a different path, one that’s far easier to maintain and travel. It’s simple: Like your customers and they’re more likely to like you back. This is one reason that the Beatles switched their focus after their first US tour (and eventually stopped touring). They couldn’t figure out how to like the screaming young fans that didn’t have much in the way of discernment. Instead, they shifted to writing and producing music for fans and colleagues that they wanted to spend their time liking. If you want to be more liked, begin by liking.",
    thumbnail:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80",
      "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    ],
    category: "Business",
    author: mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a2"),
  },
  {
    title: "How to Find a Good Personal Trainer or Coach: 5 Mistakes to Avoid!",
    content:
      "Bacon ipsum dolor amet frankfurter swine short ribs turkey tongue cupim leberkas t-bone meatloaf tri-tip pastrami brisket beef ham. Boudin alcatra t-bone pork chop leberkas brisket shoulder pork loin chicken drumstick tail bacon swine ham landjaeger. Hamburger ham kielbasa pig jerky. Cupim chuck drumstick boudin short loin jerky bacon kevin. Shank tenderloin corned beef cow, bresaola tongue pig sirloin frankfurter bacon. Flank biltong capicola, alcatra cow chicken boudin salami ham hock doner drumstick. Fatback sirloin spare ribs tongue, pancetta doner ham hock venison tail. Prosciutto salami beef ribs brisket, pastrami chuck tongue burgdoggen bacon strip steak ham sirloin beef rump. Beef ribs pork cupim, jerky short ribs kielbasa bresaola ground round turkey t-bone jowl chicken pork loin ball tip ham. Porchetta short ribs buffalo ham, chislic turkey frankfurter prosciutto chuck ham hock pork loin leberkas short loin fatback cupim. Bresaola tail ham hock meatloaf. Salami jerky drumstick flank turkey. Prosciutto filet mignon doner beef ribs. Flank venison landjaeger pastrami short loin buffalo short ribs shankle ground round chuck. Pork turducken tongue brisket bresaola pork loin pastrami spare ribs corned beef drumstick pig biltong shankle. Hamburger jowl tri-tip, ham brisket biltong chicken bresaola porchetta chislic shankle kevin t-bone. Tongue swine leberkas doner, chuck jerky ham hock porchetta meatloaf boudin meatball ball tip frankfurter t-bone short ribs.",
    thumbnail:
      "https://images.unsplash.com/photo-1477332552946-cfb384aeaf1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    ],
    category: "Health and fitness",
    author: mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a3"),
    rating: {
      ratings: [1, 5, 5, 4, 3],
      votedUsers: [
        mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a4"),
        mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a9"),
        mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a6"),
        mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a8"),
        mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a9"),
      ],
    },
  },
  {
    title: "Detachment and commitment",
    content:
      "Bacon ipsum dolor amet frankfurter swine short ribs turkey tongue cupim leberkas t-bone meatloaf tri-tip pastrami brisket beef ham. Boudin alcatra t-bone pork chop leberkas brisket shoulder pork loin chicken drumstick tail bacon swine ham landjaeger. Hamburger ham kielbasa pig jerky. Cupim chuck drumstick boudin short loin jerky bacon kevin. Shank tenderloin corned beef cow, bresaola tongue pig sirloin frankfurter bacon. Flank biltong capicola, alcatra cow chicken boudin salami ham hock doner drumstick. Fatback sirloin spare ribs tongue, pancetta doner ham hock venison tail. Prosciutto salami beef ribs brisket, pastrami chuck tongue burgdoggen bacon strip steak ham sirloin beef rump. Beef ribs pork cupim, jerky short ribs kielbasa bresaola ground round turkey t-bone jowl chicken pork loin ball tip ham. Porchetta short ribs buffalo ham, chislic turkey frankfurter prosciutto chuck ham hock pork loin leberkas short loin fatback cupim. Bresaola tail ham hock meatloaf. Salami jerky drumstick flank turkey. Prosciutto filet mignon doner beef ribs. Flank venison landjaeger pastrami short loin buffalo short ribs shankle ground round chuck. Pork turducken tongue brisket bresaola pork loin pastrami spare ribs corned beef drumstick pig biltong shankle. Hamburger jowl tri-tip, ham brisket biltong chicken bresaola porchetta chislic shankle kevin t-bone. Tongue swine leberkas doner, chuck jerky ham hock porchetta meatloaf boudin meatball ball tip frankfurter t-bone short ribs.",
    thumbnail:
      "https://images.unsplash.com/photo-1531747056595-07f6cbbe10ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1496602910407-bacda74a0fe4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80",
      "https://images.unsplash.com/photo-1510932742089-bef92acabb5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    ],
    category: "Other",
    author: mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a4"),
  },
  {
    title: "How to Fix the 413 Request Entity Too Large Error",
    content:
      "The most straightforward way to fix the 413 Request Entity Too Large error is to add a code snippet to your functions.php file. The good news is this is something we cover in a dedicated article on increasing your maximum file size in WordPress. In this article, we also cover how to alter your .htaccess file to achieve the same result. A text editor displaying a .htaccess file. The difference is that your functions.php file relates to WordPress, while .htaccess is for an Apache-based server. The majority of the time, you won’t need to add snippets to both. There’s a slight difference when it comes to Nginx servers. The relevant file you need here is nginx.conf. However, on the vast majority of servers, you won’t be able to access this file in the same way you do .htaccess. There is some configuration you can do, as we show in our article on fixing broken permalinks, but Nginx servers often don’t provide the same ability to tinker as Apache servers. Our advice is to contact your host if you have an Nginx server and you see the 413 Request Entity Too Large error. They will be able to diagnose the issue in the correct way, and make the necessary changes to your server, without further errors. In Summary If you come across the 413 Request Entity Too Large error, you’ll likely wonder what it means. However, it can be simple to decipher – usually you’re uploading files that are too large – and fix. It shouldn’t take more than a few minutes in most cases to put things right and get your site back online. For this post, we have looked at three ways to fix the 413 Request Entity Too Large error. You can try using SFTP to upload files to your server, and also check permissions. You’re also able to edit the functions.php, .htaccess, and nginx.conf files to get back online. In lots of situations, you won’t need to touch your server’s core files – but it’s straightforward to do if you need to.",
    thumbnail:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1580894742597-87bc8789db3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    ],
    category: "Technology",
    author: mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a5"),
  },
  {
    title: "Tiktok Cinnamon Rolls",
    content:
      "What are Tiktok cinnamon rolls? This viral hack is everywhere on Tiktok and it’s super simple: store bought cinnamon rolls baked in heavy whipping cream. The rolls bake up light, fluffy, moist, and extra gooey. The layer of heavy whipping cream bakes into the buns giving them more heft and lightness as well as helps the tops bake to a beautiful golden brown. tiktok cinnamon rolls | www.iamafoodblog.com Who invented the Tiktok cinnamon roll hack? There are so many people who are doing this now and it’s kind of hard to tell who started the trend, but personally I saw @mississippi_kween and @mantha do it on my for you page. If you know who invented it, please let me know! How to make Tiktok cinnamon rolls with heavy cream This cinnamon roll hack is incredibly easy, just like all viral hacks. Preheat your oven to 350°F. Butter a large baking dish. Add the cinnamon rolls, spaced apart so they can rise and bake up fluffy. Pour heavy whipping cream over the tops of the cinnamon rolls. Bake according to the package directions. Add the frosting on while they’re still warm, but not hot, let cool slightly and enjoy! adding cream to tiktok cinnamon rolls | www.iamafoodblog.com TikTok cinnamon roll hack ingredients You only need two ingredients for this hack: store-bought ready to bake cinnamon rolls and heavy whipping cream. Store bought cinnamon rolls You want the refrigerated ready to bake rolls that come in tubes. There are so many brands out there and all of them will work, but if you want the specific ones I’ve seen on TikTok, they’re they’re Pillsbury Grands, more on that below. tiktok cinnamon rolls | www.iamafoodblog.com Heavy whipping cream Heavy whipping cream is the secret ingredient. It adds extra moistness and richness to the buns, making they super fluffy and gooey when they bake up. They also help the tops bake up to a beautiful golden brown. How to open a cinnamon roll can To be honest, opening tubes of cinnamon rolls or biscuits scares me because of the pop. I always think that the rolls are going to explode. What I like to do is, peel the outside paper off, carefully, and if that doesn’t open the package, I hold the tube and gently twist in opposite directions so the seams of the cardboard tube expands and opens. You can also gently knock it against the counter top to break the seam.",
    thumbnail:
      "https://iamafoodblog.b-cdn.net/wp-content/uploads/2022/06/tiktok-cinnamon-rolls-3523.webp",
    gallery: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://iamafoodblog.b-cdn.net/wp-content/uploads/2022/06/tiktok-cinnamon-rolls-3523.webp",
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153&q=80",
    ],
    category: "Food",
    author: mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a4"),
    rating: {
      ratings: [4, 5, 3, 4, 4, 5, 4],
      votedUsers: [
        mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a1"),
        mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a2"),
        mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a3"),
        mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a4"),
        mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a6"),
        mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a8"),
        mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a9"),
      ],
    },
  },
  {
    title: "Reject the tyranny of being picked: pick yourself",
    content:
      "Amanda Hocking is making a million dollars a year publishing her own work to the Kindle. No publisher. Rebecca Black has reached more than 15,000,000 listeners, like it or not, without a record label. Are we better off without gatekeepers? Well, it was gatekeepers that brought us the unforgettable lyrics of Terry Jacks in 1974, and it’s gatekeepers that are spending a fortune bringing out pop songs and books that don’t sell. I’m not sure that this is even the right question. Whether or not we’re better off, the fact is that the gatekeepers–the pickers–are reeling, losing power and fading away. What are you going to do about it? It’s a cultural instinct to wait to get picked. To seek out the permission and authority that comes from a publisher or talk show host or even a blogger saying, “I pick you.” Once you reject that impulse and realize that no one is going to select you–that Prince Charming has chosen another house–then you can actually get to work. If you’re hoping that the HR people you sent your resume to are about to pick you, it’s going to be a long wait. Once you understand that there are problems just waiting to be solved, once you realize that you have all the tools and all the permission you need, then opportunities to contribute abound. No one is going to pick you. Pick yourself.",
    thumbnail:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1462206092226-f46025ffe607?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    ],
    category: "Other",
    author: mongoose.Types.ObjectId("6321c880ef142e9c4aabcc60"),
  },
  {
    title: "Life in Motion: A Guide to Animating Mobile Data Visualizations",
    content:
      "These days, with technology driving the collection and production of massive quantities of data, it’s relatively easy to get your hands on information that can guide your daily decisions. Mobile apps draw on heart rate and other biometric data to track health and exercise goals. They provide real-time data on investments, personal spending, and budgeting. They can even help parents assess their newborns’ feeding and sleep patterns. To grasp the sheer volume of data available, look no further than designer Nicholas Felton’s annual reports constructed from his own personal data. With so much information at your fingertips, the hard part is making sense of it. This is where animation can help. Animating data makes it more comprehensible, engaging, and useful, particularly on the small screens of mobile devices. With animation, numbers become easier to digest and otherwise overlooked trends, patterns, and narratives become apparent. Real-time interactivity with these visuals promotes engagement and allows users to explore data more deeply. At the same time, excessive or misguided animation can defeat its purpose, obscuring rather than illuminating insights. When animating mobile data visualizations, designers should use motion design principles—and avoid common pitfalls. The Benefits of Animating Mobile Data Visualizations Animation isn’t a mere embellishment to data visualizations. Motion offers myriad benefits, and it should be applied with the goal of achieving a specific outcome. Helping users perceive trends and changes is a key advantage of using motion in data visualizations. The late academic Hans Rosling is known for an animation in which he plotted lifespan and income data to show changes in health and wealth for dozens of countries over decades. It’s a captivating animation that clarifies trends over time and counteracts common perceptions about global development.",
    thumbnail:
      "https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1034830/regular_800x320_COVER-9c87e79a46bba8bc2bb16c6a27740589.png",
    gallery: [
      "https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1034830/regular_800x320_COVER-9c87e79a46bba8bc2bb16c6a27740589.png",
      "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1475669698648-2f144fcaaeb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    ],
    category: "Art and Design",
    author: mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a5"),
  },
  {
    title: "Day 9: Loen Skylift and Mt Hoven",
    content:
      "Ok total change of plans today - it’s the last sunny day before (apparently) a week of rain, so I wanted to make sure I got up to Loen today, even if it meant extra driving/coming back on my tracks. About half the drive was normal highway, half was the narrow roads - I’m getting used to them at least..! I went through this nice valley with super green waters and tiny waterfalls galore. Not many spots to stop, but got a few pics and ate my breakky at one. The closer I got to Loen, the more questionable the cloud cover got which really had me worried - I would’ve been so mad had I drove all this way for clouds haha but thankfully it was… I won’t say clearing up, but there were pockets of sun coming out which meant it was really the perfect day for it - you wait 20min and you have diff pics/landscapes lol. The cable car was surprisingly smooth - I’m used to a bit of a bumpy ride from Switzerland lol. (On the way down you get a real nice swing though as you leave the station! Love it!) And Those colours!Those colours! Those colours! it was expensive as is the norm here… but omg it was worth it, just stunning..!! It takes a lot for me to audibly go 'wow' but the view was def 'wow' worthy - the colours, the swirling clouds, all of it. I did a mini hike just around the top (Hoven) - didn’t want to get lost in cloud cover lol I spent most of my time near the cafe terrace - perfect to watch the clouds come and go, watch the colours change and people watch a bit. Ugh it is just so beautiful here. When the sun hits the water, it’s always so vivid..!! I had debated doing the zip line - I’m glad I didn’t. The pics online made it look super long but in reality it’s pretty dinky and stupid expensive for what it is. Like, I think the Ottawa/Gatineau one is longer. Ah well. Not sure anything will ever beat the Swiss one in the mountains anyway. After Loen I made my way back towards Forde, doing a pit stop in Skei and headed over towards a nearby glacier. The parking was a zoo / total disaster so I managed to So happy up hereSo happy up here So happy up here get away / turn around and parked in a photo stop not far away and just walked back. Meh, I think you could walk closer if you went in behind the restaurant, but as you can imagine, it's quite the receding glacier. I headed back towards Forde after that and just puttered around. Not sure what I'll do tomorrow with the rain / considering I already did my plan for tomorrow. We’ll see!",
    thumbnail:
      "https://images.unsplash.com/photo-1551290470-554bf3a4fa80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    ],
    category: "Travel",
    author: mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a6"),
    rating: {
      ratings: [2, 3, 3, 4, 3, 4],
      votedUsers: [
        mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a1"),
        mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a2"),
        mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a3"),
        mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a4"),
        mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a6"),
        mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a8"),
      ],
    },
  },
  {
    title: "Birria Tacos Recipe",
    content:
      "What are Birria Tacos? Birria is traditionally a spicy and super savory Mexican beef or goat stew that’s slow cooked until the meat is tender and fall-apart juicy and delicious. Someone had the amazing idea to stuff this meaty goodness into a taco shell, and then dip the whole thing into the stew and fry it up. These birria tacos blew up after that, and the rest is history. Birria Tacos Recipe | www.iamafoodblog.com Beef birria tacos While birria is traditionally made with goat, for most of us it’s easier to get beef so that’s what I’ve gone with here. Beef is also the safer choice for crowds, but if you’re an adventurous eater and want to go with goat, you should totally go(at) for it. The recipe remains the same, just switch out the beef shank and sirloin for goat. The best birria tacos are dipped in the stew and then fried to crispy goodness It’s really in dipping the tortilla into the stew and frying it to a crisp that the magic happens, so don’t skip this step. Tacos are good but very few people who don’t live in the southwest know that tacos only become truly transcendent once you cook the tortilla in fat. Traditionally they do this in butter or lard, but here we use the fat from the top of the stew to give it that extra kick. Once you bite into a crisp fried taco shell, you’ll never go back. Birria Tacos Recipe | www.iamafoodblog.com Instant pot birria You can make this stew any way you like, but I prefer it in the instant pot because it’s so much faster, and keeps more of the flavor locked inside the dish. Those yummy smells that fill up your house when you slow cook for hours? Those are flavor particles, and that means that’s flavor that’s not in your soup. But, regardless of how you make this, it’ll come out absolutely delicious, so pick whatever method is best for you. Birria Tacos Recipe | www.iamafoodblog.com Dutch Oven To cook this in a dutch oven, you’ll need a fairly large dutch oven. Follow the instructions all the way until you close the lid of the Instant Pot. Instead, cover the dutch oven and set it on as low heat as possible on your stove, or alternatively, pop it in a 200ºF oven for 4-6 hours.",
    thumbnail:
      "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      "https://images.unsplash.com/photo-1611250188496-e966043a0629?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
      "https://images.unsplash.com/photo-1566740932818-cacfb780ae18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    ],
    category: "Food",
    author: mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a5"),
    rating: {
      ratings: [4, 5, 5, 4, 5],
      votedUsers: [
        mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a1"),
        mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a2"),
        mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a3"),
        mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a4"),
        mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a7"),
      ],
    },
  },
  {
    title: "Deepfakes are taking over TikTok — here’s how you can spot them",
    content:
      "One of the world’s most popular social media platforms, TikTok, is now host to a steady stream of deepfake videos. Deepfakes are videos in which a subject’s face or body has been digitally altered to make them look like someone else – usually a famous person. One notable example is the @deeptomcriuse TikTok account, which has posted dozens of deepfake videos impersonating Tom Cruise and attracted some 3.6 million followers. Greetings, humanoids Subscribe to our newsletter now for a weekly recap of our favorite AI stories in your inbox. Your email address I agree to allow TNW to store and process my personal data* Deepfakes gained a lot of media attention last year, with videos impersonating Hollywood actor Tom Cruise going viral. In another example, Meta CEO Mark Zuckerberg seems to be confessing to conspiratorial data sharing. More recently there have been a number of silly videos featuring actors such as Robert Pattinson and Keanu Reeves. Although deepfakes are often used creatively or for fun, they’re increasingly being deployed in disinformation campaigns, for identity fraud, and to discredit public figures and celebrities. And while the technology needed to make them is sophisticated, it’s becoming increasingly accessible, leaving detection software and regulation lagging behind. One thing is for sure – deepfakes are here to stay. So what can we do about them? Varying roles The manipulation of text, images, and footage has long been a bedrock of interactivity. And deepfakes are no exception; they’re the outcome of a deep-seated desire to participate in culture, storytelling, art, and remixing. The technology is used extensively in the digital arts and satire. It provides more refined (and cheaper) techniques for visual insertions, compared to green screens and computer-generated imagery. Deepfake technology can also enable authentic-looking resurrections of deceased actors and historical re-enactments. They may even play a role in helping people grieve their deceased loved ones. Comedian Jordan Peele provides a voiceover of a deepfake with former US President Barack Obama. But they’re also available for misuse At the same time, deepfake technology is thought to present several social problems such as: Deepfakes are being used as “proof” for other fake news and disinformation. Deepfakes are being used to discredit celebrities and others whose livelihood depends on sharing content while maintaining a reputation. Difficulties providing verifiable footage for political communication, health messaging, and electoral campaigns. People’s faces are being used in deepfake pornography. The last point is of particular concern. In 2019, deepfake detection software firm Deeptrace found that 96% of 14,000 deepfakes were pornographic in nature. Free apps such as the now-defunct DeepNude 2.0 have been used to make clothed women appear nude in the footage, often for revenge porn and blackmail.",
    thumbnail:
      "https://img-cdn.tnwcdn.com/image?fit=1280%2C720&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2022%2F07%2FTikTokDeppfake.jpg&signature=65f7dbea9d93499dc427598655607f16",
    gallery: [
      "https://images.unsplash.com/photo-1648195699350-fa0ed4a263e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80",
      "https://images.unsplash.com/photo-1618590067824-5ba32ca76ce9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1564475470622-91237acb86be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1111&q=80",
    ],
    category: "Technology",
    author: mongoose.Types.ObjectId("6321c880ef142e9c4aabcc60"),
    rating: {
      ratings: [4, 5, 3, 4, 3, 5],
      votedUsers: [
        mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a1"),
        mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a2"),
        mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a3"),
        mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a4"),
        mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a6"),
        mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a9"),
      ],
    },
  },
  {
    title: "Brooklyn Home Evolved",
    content:
      "Bacon ipsum dolor amet bresaola kevin chicken, pork loin short loin cow burgdoggen pork chop shoulder picanha. Chislic drumstick salami spare ribs. Prosciutto shank cow meatball, beef pastrami spare ribs short loin cupim alcatra biltong hamburger salami. Rump landjaeger chicken chislic, porchetta ball tip brisket sirloin tenderloin. Brisket venison chislic, rump landjaeger meatball biltong turkey pork jerky. Flank beef ribs shoulder turducken drumstick, ball tip prosciutto venison short ribs. Doner sausage biltong, pastrami frankfurter beef ribs short ribs kielbasa turkey. Venison shank biltong, hamburger beef bacon porchetta pork belly jowl ham cupim frankfurter pork shankle. Ham hamburger short ribs turducken. Flank pork belly ribeye fatback, chislic beef short ribs salami tail. Pastrami tri-tip doner, filet mignon cupim alcatra picanha bacon jerky hamburger. Corned beef ground round ham tri-tip, rump kielbasa kevin. Pork belly shankle jowl, pastrami cow sirloin shoulder pancetta pork hamburger chuck ribeye short ribs rump beef. Boudin short loin ham hock doner porchetta, tenderloin pastrami buffalo flank pig chislic venison prosciutto. Boudin t-bone pig, burgdoggen sirloin pork biltong tongue frankfurter. Sirloin meatloaf drumstick cow, pancetta cupim brisket meatball corned beef. Picanha sausage hamburger ham tri-tip. Tri-tip landjaeger pig biltong ball tip, pork loin frankfurter jerky strip steak. Cupim burgdoggen filet mignon tri-tip brisket meatloaf short loin strip steak turducken tenderloin. Turducken buffalo landjaeger, meatball ham doner swine boudin shankle strip steak alcatra meatloaf shoulder shank. Ham hock andouille venison salami, ball tip kielbasa short ribs bresaola pork belly filet mignon landjaeger fatback meatball prosciutto shank. Andouille pork loin prosciutto flank short ribs fatback, boudin ball tip beef jowl pork corned beef picanha short loin. Chicken landjaeger ham hock, pig pork loin picanha porchetta meatloaf pork belly shank andouille. Cupim frankfurter andouille, sausage ground round jowl beef chislic. Pancetta rump landjaeger swine, bresaola capicola drumstick ribeye shoulder spare ribs tongue meatball. Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!",
    thumbnail:
      "https://images.squarespace-cdn.com/content/v1/53bff3c3e4b0fd8b51088a58/1622379405616-L3OV35J54G8IGJKRDXX5/_DSC4480.jpg?format=1500w",
    gallery: [
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1550226891-ef816aed4a98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    ],
    category: "Fashion",
    author: mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a3"),
    rating: {
      ratings: [4, 5, 2, 5],
      votedUsers: [
        mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a1"),
        mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a2"),
        mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a3"),
        mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a4"),
      ],
    },
  },
];

const users = [
  {
    fullName: "Marie Anderson",
    username: "MarieAn",
    email: "marie.andersen@example.com",
    password: "MarieAn",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    shortBio:
      "Certified student. Infuriatingly humble troublemaker. Amateur analyst. Food scholar. Lifelong introvert. Explorer. Hipster-friendly entrepreneur. Zombieaholic.",
    socials: {
      facebook: "https://www.facebook.com/marie.andersen",
      twitter: "https://www.instagram.com/marie.andersen",
      linkedin: "https://www.linkedin.com/in/marie.andersen",
    },
  },
  {
    fullName: "Joanikije Živadinović",
    username: "JoanZ4214",
    email: "joanikije.zivadinovic@example.com",
    password: "JoanZ4214",
    image: "https://randomuser.me/api/portraits/men/70.jpg",
    shortBio:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.",
    socials: {
      facebook: "https://www.facebook.com/joanikije.zivadinovic",
      twitter: "https://www.instagram.com/joanikije.zivadinovic",
      linkedin: "https://www.linkedin.com/in/joanikije.zivadinovic",
    },
  },
  {
    fullName: "Bruno Brunet",
    username: "BrunoBrunet51",
    email: "bruno.brunet@example.com",
    password: "BrunoBrunet51",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    shortBio:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. ",
    socials: {
      facebook: "https://www.facebook.com/bruno.brunet",
      twitter: "https://www.instagram.com/bruno.brunet",
      linkedin: "https://www.linkedin.com/in/bruno.brunet",
    },
  },
  {
    fullName: "Leo Niskanen",
    username: "niskanenleo",
    email: "leo.niskanen@example.com",
    password: "niskanenleo",
    image: "https://randomuser.me/api/portraits/men/91.jpg",
    shortBio:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    socials: {
      facebook: "https://www.facebook.com/leo.niskanen",
      twitter: "https://www.instagram.com/leo.niskanen",
      linkedin: "https://www.linkedin.com/in/leo.niskanen",
    },
  },
  {
    fullName: "Vildan Demirel",
    username: "vildandemirel93",
    email: "vildan.demirel@example.com",
    password: "vildandemirel93",
    image: "https://randomuser.me/api/portraits/women/79.jpg",
    shortBio:
      "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    socials: {
      facebook: "https://www.facebook.com/vildan.demirel",
      twitter: "https://www.instagram.com/vildan.demirel",
      linkedin: "https://www.linkedin.com/in/vildan.demirel",
    },
  },
  {
    fullName: "Madelene Lindstrøm",
    username: "madelenelidstrom",
    email: "madelene.lindstrom@example.com",
    password: "madelenelidstrom",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    shortBio:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like.",
    socials: {
      facebook: "https://www.facebook.com/madelene.lindstrom",
      twitter: "https://www.instagram.com/madelene.lindstrom",
      linkedin: "https://www.linkedin.com/in/madelene.lindstrom",
    },
  },
  {
    fullName: "Elmer Martins",
    username: "elmermartins1",
    email: "elmer.martins@example.com",
    password: "elmermartins1",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    shortBio:
      "Fusce at risus libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce id blandit elit, vitae egestas leo. Duis est tellus, vehicula nec dui non, tristique consectetur mauris. Nunc tempus pretium enim, vel volutpat enim auctor et. Nulla imperdiet ex eget ex suscipit facilisis. Quisque faucibus, lacus et maximus consectetur, eros nisl varius leo, eu dignissim leo orci eu quam. Proin non interdum mi. Vestibulum gravida orci et neque pulvinar, vel auctor leo dapibus.",
    socials: {
      facebook: "https://www.facebook.com/elmer.martins",
      twitter: "https://www.instagram.com/elmer.martins",
      linkedin: "https://www.linkedin.com/in/elmer.martins",
    },
  },
  {
    fullName: "Morrison Huitink",
    username: "huitikmorrison",
    email: "morrison.huitink@example.com",
    password: "huitikmorrison",
    image: "https://randomuser.me/api/portraits/men/39.jpg",
    shortBio:
      "Vestibulum rhoncus pretium turpis vel vehicula. Etiam ac lacus venenatis, convallis ante eu, cursus justo. Vestibulum at lacus vel nibh lobortis efficitur eget at risus. Cras nec viverra nisl. Duis suscipit orci sed hendrerit sagittis. Sed ornare porta sapien, sit amet porttitor metus rhoncus at. Aenean venenatis fringilla nulla ut consequat. Sed est lacus, auctor sit amet efficitur et, imperdiet nec ligula. In hac habitasse platea dictumst. Nullam non magna euismod mi vehicula tincidunt vel et mi. Pellentesque sollicitudin, enim commodo placerat tempus, diam urna dapibus libero, elementum molestie tortor ante non orci. Fusce vitae nibh ut mauris rhoncus dapibus. Nunc vitae nunc ac tellus vehicula rutrum at in velit. Nulla fermentum vehicula elementum.",
    socials: {
      facebook: "https://www.facebook.com/morrison.huitink",
      twitter: "https://www.instagram.com/morrison.huitink",
      linkedin: "https://www.linkedin.com/in/morrison.huitink",
    },
  },
  {
    fullName: "Manuel Ferrer",
    username: "ManuelFerrer",
    email: "manuel.ferrer@example.com",
    password: "manuelferrer",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    shortBio:
      "Maecenas a nulla porttitor diam lobortis vulputate tempus quis elit. In dictum purus a sapien convallis accumsan at vel nunc. Cras rutrum nisi arcu, ut auctor tellus ultricies quis. Mauris at aliquet odio, in tempor massa. Suspendisse dapibus mattis mauris in pretium. Praesent non erat pulvinar ex porttitor sodales. Nullam egestas congue varius. Integer ornare ante sit amet justo convallis, ac fermentum eros pellentesque. Vivamus euismod consectetur nibh, nec iaculis nisi tristique nec.",
    socials: {
      facebook: "https://www.facebook.com/manuel.ferrer",
      twitter: "https://www.instagram.com/manuel.ferrer",
      linkedin: "https://www.linkedin.com/in/manuel.ferrer",
    },
  },
];

const comments = [
  {
    author: mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a2"),
    text: "I love the idea, it really looks amazing :)",
    likes: [
      mongoose.Types.ObjectId("6321c8cf368d529500ff8cb2"),
      mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a2"),
      mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a5"),
      mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a3"),
      mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a9"),
    ],
    onPost: mongoose.Types.ObjectId("6321c8cf368d529500ff8cb2"),
  },
  {
    author: mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a2"),
    text: "Great way to put these colors together, they blend in so nicely..",
    likes: [
      mongoose.Types.ObjectId("6321c8cf368d529500ff8cb2"),
      mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a5"),
      mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a3"),
      mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a9"),
    ],
    onPost: mongoose.Types.ObjectId("6321c8cf368d529500ff8cb2"),
  },
  {
    author: mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a5"),
    text: "Beatiful, we are waiting for more posts!",
    likes: [
      mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a5"),
      mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a3"),
    ],
    onPost: mongoose.Types.ObjectId("6321c8cf368d529500ff8cb2"),
  },
  {
    author: mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a7"),
    text: "I need this!!!",
    likes: [
      mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a5"),
      mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a3"),
      mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a7"),
    ],
    onPost: mongoose.Types.ObjectId("6321c8cf368d529500ff8cb2"),
  },
  //second post
  {
    author: mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a7"),
    text: "This is so scary :( Should we be worried",
    likes: [
      mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a5"),
      mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a3"),
      mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a7"),
    ],
    onPost: mongoose.Types.ObjectId("6321c8cf368d529500ff8cb1"),
  },
  {
    author: mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a7"),
    text: "AI's are really taking over",
    likes: [
      mongoose.Types.ObjectId("6321c8cf368d529500ff8cb2"),
      mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a2"),
      mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a5"),
      mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a3"),
      mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a9"),
    ],
    onPost: mongoose.Types.ObjectId("6321c8cf368d529500ff8cb1"),
  },
  //third post
  {
    author: mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a1"),
    text: "It looks delicious :P Where can we find the ingredients?",
    likes: [
      mongoose.Types.ObjectId("6321c8cf368d529500ff8cb2"),
      mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a3"),
      mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a9"),
    ],
    onPost: mongoose.Types.ObjectId("6321c8cf368d529500ff8cb0"),
  },
  //fifth post
  {
    author: mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a3"),
    text: "I expected it to be hard, but with good guide it was very easy to follow. Thanks!",
    likes: [
      mongoose.Types.ObjectId("6321c8cf368d529500ff8cb2"),
      mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a3"),
      mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a9"),
    ],
    onPost: mongoose.Types.ObjectId("6321c8cf368d529500ff8cae"),
  },
  {
    author: mongoose.Types.ObjectId("6321c8cf368d529500ff8cb2"),
    text: "This is how all tutorials should be done, easy and simple..",
    likes: [
      mongoose.Types.ObjectId("6321c8cf368d529500ff8cb2"),
      mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a3"),
      mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a9"),
      mongoose.Types.ObjectId("6321c880ef142e9c4aabcc60"),
    ],
    onPost: mongoose.Types.ObjectId("6321c8cf368d529500ff8cae"),
  },
  //eight post
  {
    author: mongoose.Types.ObjectId("6321c880ef142e9c4aabcc60"),
    text: "You have my respect for this one!",
    likes: [
      mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a9"),
      mongoose.Types.ObjectId("6321c880ef142e9c4aabcc60"),
    ],
    onPost: mongoose.Types.ObjectId("6321c8cf368d529500ff8ca9"),
  },
  // sixth post
  {
    author: mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a7"),
    text: "I always had a trouble with this particular error. Thanks man",
    likes: [
      mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a9"),
      mongoose.Types.ObjectId("6321c880ef142e9c4aabcc60"),
      mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a7"),
      mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a1"),
    ],
    onPost: mongoose.Types.ObjectId("6321c8cf368d529500ff8cab"),
  },
  {
    author: mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a1"),
    text: "Yooo, thanks!!",
    likes: [
      mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a9"),
      mongoose.Types.ObjectId("6321c880ef142e9c4aabcc60"),
      mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a7"),
      mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a1"),
    ],
    onPost: mongoose.Types.ObjectId("6321c8cf368d529500ff8cab"),
  },
];

const reports = [
  {
    post: mongoose.Types.ObjectId("6321c8cf368d529500ff8cad"),
    submittedBy: mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a4"),
    status: "closed",
    reportType: "Harassment or bullying",
  },
  {
    post: mongoose.Types.ObjectId("6321c8cf368d529500ff8caa"),
    submittedBy: mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a1"),
    status: "open",
    reportType: "Spam or misleading",
  },
  {
    post: mongoose.Types.ObjectId("6321c8cf368d529500ff8cac"),
    submittedBy: mongoose.Types.ObjectId("6321c880ef142e9c4aabcc60"),
    status: "closed",
    reportType: "Spam or misleading",
  },
  {
    post: mongoose.Types.ObjectId("6321c8cf368d529500ff8caa"),
    submittedBy: mongoose.Types.ObjectId("6321c75c4f0c88d7c5f333a6"),
    status: "open",
    reportType: "Other",
  },
];

async function seedPosts() {
  try {
    await Post.deleteMany();
    await Report.deleteMany();
    await Comment.deleteMany();
    await Post.insertMany(posts);
    console.log("Seeder Initialized.");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit();
  }
}

async function seedComments() {
  try {
    await Comment.deleteMany();
    await Comment.insertMany(comments);
    console.log("Seeder Initialized.");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit();
  }
}

async function seedReports() {
  try {
    await Report.deleteMany();
    await Report.insertMany(reports);
    console.log("Seeder Initialized.");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit();
  }
}

async function seedUsers() {
  try {
    await User.deleteMany();
    await User.insertMany(users);
    console.log("Seeder Initialized.");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit();
  }
}

// seedPosts();
// seedUsers();
// seedComments();
// seedReports();
