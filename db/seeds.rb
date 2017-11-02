# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Book.destroy_all

 books = Book.create!([
   { title: "Nightfall",
    author: "Isaac Asimov",
    narrator: "Stephen Eley",
    length: "1 hrs and 35 mins",
    unabridged: true,
    language: "English",
    summary:
     "The question was rather unnecessary. Beta was almost at zenith, its ruddy light flooding the landscape to an unusual orange as the brilliant rays of setting Gamma died. Beta was at aphelion. It was small; smaller than Theremon had ever seen it before, and for the moment it was undisputed ruler of Lagash sky.",
     image: "https://s3.us-east-2.amazonaws.com/cloudible-dev/books/images/000/000/002/original/nightfall.jpg",
     audio: "https://s3.us-east-2.amazonaws.com/cloudible-dev/audio/EP100_Nightfall.mp3"
   },
    { title: "Checkov Collected Stories",
    author: "Anton Checkov",
    narrator: "Alan Davis Drake",
    length: "18 hrs and 15 mins",
    unabridged: true,
    language: "English",
    summary:
     "Anton Chekhov (1860-1904) shares insightful moments in the everyday lives of 19th Century Russians. With great economy, Chekhov's short stories reveal the depths of human joy, confusion, dissatisfaction, and sorrow. His tales elicit a deep sympathy for all people, wherever they may be, in Russia more than a hundred years ago or anywhere in the world today. These translations, by Constance Garnett, Marian Fell, and others, are offered here as public domain recordings created both for LibriVox.org and at public performances. The copyright recordings that are clearly stated as such are offered here by permission of the publisher are intended for personal and classroom use only and are not for commercial distribution. ",
     image: "https://s3.us-east-2.amazonaws.com/cloudible-dev/books/images/000/000/002/original/checkov_stories.png",
     audio: "https://s3.us-east-2.amazonaws.com/cloudible-dev/audio/EP100_Nightfall.mp3"
   },

     { title: "The Adventures of Sherlock Holmes",
      author: "Sir Arthur Conan Doyle",
      narrator: "Steven Bobs",
      length: "45 mins",
      unabridged: false,
      language: "English",
      summary:
       "To Sherlock Holmes she is always THE woman. I have seldom heard him mention her under any other name. In his eyes she eclipses and predominates the whole of her sex. It was not that he felt any emotion akin to love for Irene Adler. All emotions, and that one particularly, were abhorrent to his cold, precise but admirably balanced mind.",
       image: "https://s3.us-east-2.amazonaws.com/cloudible-dev/books/images/000/000/002/original/170x170bb.jpg",
       audio: "https://s3.us-east-2.amazonaws.com/cloudible-dev/audio/the-adventures-of-sherlock-holmes-001-adventure-1-a-scandal-in-bohemia.345.mp3"
      },
       { title: "Crime and Punishment",
        author: "Fyodor Dostoyevski",
        narrator: "Dill Gates",
        length: "35 mins",
        unabridged: false,
        language: "English",
        summary:
         "Dostoevsky was the son of a doctor. His parents were very hard-working and deeply religious people, but so poor that they lived with their five children in only two rooms. The father and mother spent their evenings in reading aloud to their children, generally from books of a serious character.",
         image: "https://s3.us-east-2.amazonaws.com/cloudible-dev/books/images/000/000/002/original/CrimePunishment_BS_large.jpg",
         audio: "https://s3.us-east-2.amazonaws.com/cloudible-dev/audio/crime-and-punishment-002-part-1-chapter-1.3392.mp3"
       },
         {title: "Pride and Prejudice",
          author: "Jane Austen",
          narrator: "Annie Coleman Rothenberg",
          length: "14 hrs and 15 mins",
          unabridged: true,
          language: "English",
          summary:
          "Jane Austen s classic novel chronicles the events in the lives of the Bennet family. Take a family with five unmarried daughters and a lack of wealth, throw in a new wealthy neighbor or two, plus a whole regiment of soldiers in town, and add a heaping spoonful of pride and a pinch of prejudice. Mix it all together and you get a story full of tears and laughter, embarrassment and pride, and, of course, love. (Summary by Annie Coleman)",
           image: "https://s3.us-east-2.amazonaws.com/cloudible-dev/books/images/000/000/002/original/61Otnh85LYL._SL500_.jpg",
           audio: "https://s3.us-east-2.amazonaws.com/cloudible-dev/audio/prideandprejudice_01-04_austen_apc_64kb.mp3"
         },
          { title: "Tales of the Jazz Age",
            author: "F. Scott Fitzerald",
            narrator: "Vladimir Sanchez",
            length: "39 mins",
            unabridged: false,
            language: "English",
            summary: "This book contains selections from the F. Scott Fitzgerald collectionTales of the Jazz Age. The short stories collected here include the novelette May Day and the novella The Diamond as Big as the Ritz.",
            image: "https://s3.us-east-2.amazonaws.com/cloudible-dev/books/images/000/000/002/original/tales_of_jazz.jpg",
            audio: "https://s3.us-east-2.amazonaws.com/cloudible-dev/audio/tales-of-the-jazz-age-002-the-jellybean.5765.mp3"
             },
             { title: "The Adventures of Tom Sawyer",
              author: "Mark Twain",
              narrator: "John Greenman",
              length: "3 hrs and 35 mins",
              unabridged: true,
              language: "English",
              summary:
               "The Adventures of Tom Sawyer (published 1876) is a very well-known and popular story concerning American youth. Mark Twain's lively tale of the scrapes and adventures of boyhood is set in St. Petersburg, Missouri, where Tom Sawyer and his friend Huckleberry Finn have the kinds of adventures many boys can imagine: racing bugs during class, impressing girls, especially Becky Thatcher, with fights and stunts in the schoolyard, getting lost in a cave, and playing pirates on the Mississippi River.

One of the most famous incidents in the book describes how Tom persuades his friends to do a boring, hateful chore for him: whitewashing (i.e., painting) a fence.

This was the first novel to be written on a typewriter.
",
               image: "https://s3.us-east-2.amazonaws.com/cloudible-dev/books/images/000/000/002/original/tom_sawyer.jpg",
               audio: "https://s3.us-east-2.amazonaws.com/cloudible-dev/audio/AdventuresOfTomSawyer-32kb-Part1_librivox.m4b"
             },
             { title: "The Picture of Dorian Gray",
              author: "Oscar Wilde",
              narrator: "Michael Johns",
              length: "32 mins",
              unabridged: false,
              language: "English",
              summary:
               "The studio was filled with the rich odour of roses, and when the light summer wind stirred amidst the trees of the garden, there came through the open door the heavy scent of the lilac, or the more delicate perfume of the pink-flowering thorn.
From the corner of the divan of Persian saddle-bags on which he was lying, smoking, as was his custom, innumerable cigarettes, Lord Henry Wotton could just catch the gleam of the honey-sweet and honey-coloured blossoms of a laburnum, whose tremulous branches seemed hardly able to bear the burden of a beauty so flamelike as theirs; and now and then the fantastic shadows of birds in flight flitted across the long tussore-silk curtains that were stretched in front of the huge window, producing a kind of momentary Japanese effect, and making him think of those pallid, jade-faced painters of Tokyo who, through the medium of an art that is necessarily immobile, seek to convey the sense of swiftness and motion.",
               image: "https://s3.us-east-2.amazonaws.com/cloudible-dev/books/images/000/000/002/original/dorian_gray.jpg",
               audio: "https://s3.us-east-2.amazonaws.com/cloudible-dev/audio/the-picture-of-dorian-gray-001-chapter-1.1937.mp3"
             },
             { title: "Eugene Oneguine",
              author: "Alexander Pushkin",
              narrator: "Mary Ann",
              length: "2 hrs and 45 mins",
              unabridged: false,
              language: "English",
              summary:
               "The studio was filled with the rich odour of roses, and when the light summer wind stirred amidst the trees of the garden, there came through the open door the heavy scent of the lilac, or the more delicate perfume of the pink-flowering thorn.
From the corner of the divan of Persian saddle-bags on which he was lying, smoking, as was his custom, innumerable cigarettes, Lord Henry Wotton could just catch the gleam of the honey-sweet and honey-coloured blossoms of a laburnum, whose tremulous branches seemed hardly able to bear the burden of a beauty so flamelike as theirs; and now and then the fantastic shadows of birds in flight flitted across the long tussore-silk curtains that were stretched in front of the huge window, producing a kind of momentary Japanese effect, and making him think of those pallid, jade-faced painters of Tokyo who, through the medium of an art that is necessarily immobile, seek to convey the sense of swiftness and motion.",
               image: "https://s3.us-east-2.amazonaws.com/cloudible-dev/books/images/000/000/002/original/220px-Eugene_Onegin's_portrait_by_Pushkin.jpg",
               audio: "https://s3.us-east-2.amazonaws.com/cloudible-dev/audio/eugeneoneguine_01_pushkin_64kb.mp3"
             },

             { title: "Hamlet",
              author: "William Shakespeare",
              narrator: "Jonathan Bill",
              length: "3 hrs and 19 mins",
              unabridged: false,
              language: "English",
              summary:
               "Hamlet is a tragedy and revenge play by William Shakespeare. It is one of his best-known works, one of the most-quoted writings in the English language and is universally included on lists of the worlds greatest books.",
               image: "https://s3.us-east-2.amazonaws.com/cloudible-dev/books/images/000/000/002/original/hamlet.jpg",
               audio: "https://s3.us-east-2.amazonaws.com/cloudible-dev/audio/hamlet-002-act-1-scene-1.1626.mp3"
             },
             { title: "Animal Farm",
              author: "George Orwell",
              narrator: "Jonathan Bill",
              length: "5 hrs and 56 mins",
              unabridged: false,
              language: "English",
              summary:
               "One night, all the animals at Mr. Jones Manor Farm assemble in a barn to hear old Major, a pig, describe a dream he had about a world where all animals live free from the tyranny of their human masters. old Major dies soon after the meeting, but the animals inspired by his philosophy of Animalism plot a rebellion against Jones. Two pigs, Snowball and Napoleon, prove themselves important figures and planners of this dangerous enterprise. When Jones forgets to feed the animals, the revolution occurs, and Jones and his men are chased off the farm. Manor Farm is renamed Animal Farm, and the Seven Commandments of Animalism are painted on the barn wall.",
               image: "https://s3.us-east-2.amazonaws.com/cloudible-dev/books/images/000/000/002/original/animal_farm.jpg",
               audio: "https://s3.us-east-2.amazonaws.com/cloudible-dev/audio/AnimalFarm01.mp3"
             },

             { title: "The Curious Case of Benjamin Button",
              author: "Scott F. Fitzgerald",
              narrator: "Andy Michaels",
              length: "6 hrs and 56 mins",
              unabridged: true,
              language: "English",
              summary:
              "Description
              A life lived backwards, with events happening in reverse order forms the strange and unexpected framework of one of F Scott Fitzgerald's rare short stories. The Curious Case of Benjamin Button was published in Collier's in 1927 and the idea came to Fitzgerald apparently from a quote of Mark Twain's in which he regretted that the best part of life came at the beginning and the worst at the end. Fitzgerald's concept of using this notion and turning the normal sequence of life on its head resulted in this delightful, thought provoking fantasy tale. ",
               image: "https://s3.us-east-2.amazonaws.com/cloudible-dev/books/images/000/000/002/original/benjamin_button.jpg",
               audio: "https://s3.us-east-2.amazonaws.com/cloudible-dev/audio/BenjaminButton01-05-Fitzgerald-ADDrake_64kb.mp3"
             },

             ])
